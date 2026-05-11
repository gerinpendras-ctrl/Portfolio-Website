import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { personal } from '../data/portfolioData'

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    // Build mailto link as the submission method (no backend needed for static deploy)
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailtoUrl  = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(mailtoBody)}`
    window.location.href = mailtoUrl
    setTimeout(() => { setLoading(false); setSent(true) }, 800)
  }

  const infoCards = [
    {
      icon:  <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href:  `mailto:${personal.email}`,
    },
    {
      icon:  <Phone size={20} />,
      label: 'Phone',
      value: personal.phone,
      href:  `tel:${personal.phone}`,
    },
    {
      icon:  <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Gerin Pendras',
      href:  personal.linkedin,
    },
    ...(personal.github ? [{
      icon:  <Github size={20} />,
      label: 'GitHub',
      value: personal.github.replace('https://github.com/', '@'),
      href:  personal.github,
    }] : []),
  ]

  const inputCls =
    'w-full bg-bg-card border border-teal/20 rounded-xl px-4 py-3.5 text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:border-teal/60 focus:ring-2 focus:ring-teal/10 transition-all duration-200'

  return (
    <div className="relative overflow-x-hidden pt-28 pb-24">
      <div className="blob w-96 h-96 bg-teal top-0 right-0 translate-x-1/3 -translate-y-1/3" />
      <div className="blob w-72 h-72 bg-gold bottom-48 left-0 -translate-x-1/3" />

      <div className="section relative z-10">

        {/* Page header */}
        <div className="text-center flex flex-col items-center gap-4 mb-14">
          <span className="text-teal text-sm font-bold uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display text-5xl sm:text-6xl text-text-main">
            Let's <span className="text-gold">Talk</span>
          </h1>
          <p className="text-text-muted max-w-lg leading-relaxed">
            Have a project in mind, or just want to say hi? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact info sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {infoCards.map(card => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-teal/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center text-teal flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-text-muted text-xs font-bold uppercase tracking-wider">{card.label}</p>
                  <p className="text-text-main font-bold text-sm mt-0.5">{card.value}</p>
                </div>
              </a>
            ))}

            {/* Availability banner */}
            <div className="glass-card rounded-2xl p-6 mt-2 border-teal/30 glow-teal">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
                <span className="text-teal font-bold text-sm">Available for Work</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Currently accepting new projects and freelance work. Let's create something great together!
              </p>
            </div>
          </div>

          {/* ── Contact form ── */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-5 text-center py-8">
                <CheckCircle size={56} className="text-teal" />
                <h3 className="font-display text-3xl text-text-main">Message Sent!</h3>
                <p className="text-text-muted max-w-sm leading-relaxed">
                  Your email client should have opened. If not, feel free to email me directly at{' '}
                  <a href={`mailto:${personal.email}`} className="text-teal font-bold hover:underline">
                    {personal.email}
                  </a>.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="text-sm text-text-muted hover:text-teal font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-text-muted text-xs font-bold uppercase tracking-wider">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-text-muted text-xs font-bold uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-muted text-xs font-bold uppercase tracking-wider">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-muted text-xs font-bold uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-teal text-bg-base font-bold px-8 py-4 rounded-full hover:bg-teal-dim transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                <p className="text-text-muted text-xs text-center">
                  This will open your default email client.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
