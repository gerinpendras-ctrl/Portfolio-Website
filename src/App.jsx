import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main-site">
  <section id="home" class="relative min-h-screen grid grid-cols-2 overflow-hidden">
    <div class="relative z-10 flex flex-col justify-end px-16 pt-36 pb-24">
      <p class="h-i1 font-mono text-[.68rem] tracking-[.3em] text-gold uppercase mb-6">
        Senior Graphic Designer · Branding &amp; Visual Identity
      </p>
      <h1 class="h-i2 font-display font-black leading-[.92] text-cream mb-3"
          style="font-size:clamp(3.8rem,6.5vw,6.2rem)">
        Alexandra<br/><em class="text-sage not-italic">Cruz</em>
      </h1>
      <p class="h-i3 font-display italic font-light text-smoke mb-12"
         style="font-size:clamp(1.3rem,2.2vw,2rem)">Design that speaks before words do.</p>
      <p class="h-i4 font-body text-mist leading-[1.85] mb-12 max-w-[22rem]" style="font-size:1.05rem">
        I craft visual identities, brand systems, and editorial experiences that carry weight and intention.
        Every pixel is a decision. Every decision is a story.
      </p>
      <div class="h-i5 flex items-center gap-7">
        <a href="#projects"
           class="bg-gold text-ink font-mono text-[.7rem] tracking-[.15em] uppercase px-9 py-4 no-underline inline-block hover:bg-amber transition-colors">
          View Work
        </a>
        <a href="#contact"
           class="font-mono text-[.7rem] tracking-[.15em] uppercase text-mist hover:text-gold transition-colors no-underline flex items-center gap-2 after:content-['→']">
          Get in touch
        </a>
      </div>
    </div>

    <div class="h-r relative overflow-hidden"
         style="background:linear-gradient(135deg,#0f2926 0%,#1a3d3a 30%,#0d2b14 60%,#1a4025 100%)">
      <div class="absolute inset-0 grid-pattern"></div>
      <div id="hc1" class="absolute rounded-full border border-gold/20"    style="width:400px;height:400px;top:8%;right:-100px;"></div>
      <div id="hc2" class="absolute rounded-full border border-sage/40"    style="width:250px;height:250px;top:40%;right:80px;"></div>
      <div id="hc3" class="absolute rounded-full border border-gold/30"    style="width:140px;height:140px;bottom:20%;right:200px;"></div>
      <div class="hex-shape"></div>
      <div class="absolute bottom-0 left-0 w-px h-3/5 opacity-30"
           style="background:linear-gradient(to top,#f5a623,transparent)"></div>
      <div class="absolute bottom-12 left-12 font-mono text-[.62rem] tracking-[.2em] text-gold/50 uppercase"
           style="writing-mode:vertical-rl">Alexandra Cruz — 2025</div>
    </div>
    <div class="scroll-hint absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-2
                font-mono text-[.62rem] tracking-[.2em] text-smoke uppercase
                after:content-[''] after:w-px after:h-10
                after:bg-gradient-to-b after:from-smoke after:to-transparent">
      Scroll
    </div>
  </section>

  <section id="about" class="relative z-10 py-40 bg-forest border-t border-sage/30">
    <div class="max-w-6xl mx-auto px-16 grid grid-cols-2 gap-32 items-center">

      <div class="reveal relative">
        <div class="relative overflow-hidden" style="aspect-ratio:3/4;background:linear-gradient(160deg,#1a4025,#1a3d3a)">
          <div class="absolute inset-0 grid-pattern-sm"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="font-display font-black text-[8rem] leading-none text-gold/15">AC</span>
          </div>
        </div>
        <div class="absolute -bottom-6 -right-8 bg-gold text-ink font-mono text-[.65rem] tracking-[.1em] uppercase px-6 py-4">
          Available for work
        </div>
        <div class="absolute -top-4 -left-4 right-4 -bottom-4 border border-gold/25 -z-10 pointer-events-none"></div>
      </div>

      <div class="reveal" style="transition-delay:.2s">
        <div class="sec-lbl">Who I Am</div>
        <h2 class="font-display font-black leading-none mb-6"
            style="font-size:clamp(2.3rem,4.2vw,3.6rem)">Craft meets concept.</h2>
        <p class="font-body text-mist leading-[1.9] mb-5" style="font-size:1.05rem">
          With over 9 years shaping visual identities for global brands and intimate studios alike, I bring
          strategic thinking and obsessive craft to every project. My work sits at the intersection of
          concept and execution — where ideas become experiences.
        </p>
        <p class="font-body text-smoke leading-relaxed text-base">Based in Manila. Working worldwide.</p>

        <div class="flex flex-wrap gap-2 mt-7">
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Brand Identity</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Editorial Design</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Typography</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Art Direction</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Motion Graphics</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Packaging</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">UI Design</span>
          <span class="font-mono text-[.62rem] tracking-[.1em] uppercase border border-sage text-mist px-3 py-1.5">Print</span>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-11">
          <div class="border-l-2 border-sage pl-5"><div class="font-display font-bold text-gold" style="font-size:2.4rem;line-height:1">9+</div><div class="font-mono text-[.62rem] tracking-[.15em] text-smoke uppercase mt-1">Years of Practice</div></div>
          <div class="border-l-2 border-sage pl-5"><div class="font-display font-bold text-gold" style="font-size:2.4rem;line-height:1">120+</div><div class="font-mono text-[.62rem] tracking-[.15em] text-smoke uppercase mt-1">Projects Delivered</div></div>
          <div class="border-l-2 border-sage pl-5"><div class="font-display font-bold text-gold" style="font-size:2.4rem;line-height:1">38</div><div class="font-mono text-[.62rem] tracking-[.15em] text-smoke uppercase mt-1">Clients Worldwide</div></div>
          <div class="border-l-2 border-sage pl-5"><div class="font-display font-bold text-gold" style="font-size:2.4rem;line-height:1">14</div><div class="font-mono text-[.62rem] tracking-[.15em] text-smoke uppercase mt-1">Awards Won</div></div>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="relative z-10 py-40 bg-ink">
    <div class="max-w-6xl mx-auto px-16">

      <div class="reveal flex justify-between items-end mb-20">
        <div>
          <div class="sec-lbl">Selected Work</div>
          <h2 class="font-display font-black leading-none" style="font-size:clamp(2.5rem,5vw,4rem)">Projects</h2>
        </div>
        <a href="#" class="font-mono text-[.7rem] tracking-[.15em] uppercase text-mist hover:text-gold transition-colors no-underline flex items-center gap-2 after:content-['→']">All projects</a>
      </div>

      <div class="reveal grid grid-cols-2 gap-10" style="transition-delay:.15s">

        <div onclick="showProject('terranova')"
             class="col-span-2 grid grid-cols-2 bg-forest border border-sage/30 overflow-hidden relative
                    group hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300">
          <div class="relative overflow-hidden" style="min-height:340px">
            <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                 style="background:linear-gradient(135deg,#0f2926,#1a4025,#2a5c35)">
              <div class="absolute inset-0 grid-pattern"></div>
              <div class="absolute inset-0 flex items-center justify-center font-display font-black text-white/[.07]"
                   style="font-size:6rem">TERRA</div>
            </div>
          </div>
          <div class="p-10 flex flex-col justify-center">
            <div class="font-mono text-[.65rem] tracking-[.2em] text-gold mb-3">01 — Featured</div>
            <h3 class="font-display font-bold text-[1.65rem] leading-tight mb-4">Terranova Spirits<br/>Brand Identity</h3>
            <p class="font-body text-smoke leading-relaxed text-[.95rem] mb-6">A full visual identity system for a premium artisanal gin distillery — from logotype and packaging to brand guidelines and environmental signage.</p>
            <div class="flex flex-wrap gap-2">
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Branding</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Packaging</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Typography</span>
            </div>
          </div>
          <span class="absolute top-5 right-6 text-gold text-lg opacity-0 -translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
        </div>


        <div onclick="showProject('solstice')"
             class="bg-forest border border-sage/30 overflow-hidden relative
                    group hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300">
          <div class="relative overflow-hidden" style="aspect-ratio:16/10">
            <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                 style="background:linear-gradient(135deg,#2b1a0d,#6b3d10,#e8891a)">
              <div class="absolute inset-0 grid-pattern"></div>
              <div class="absolute inset-0 flex items-center justify-center font-display font-black text-white/[.07]"
                   style="font-size:5rem">SOL</div>
            </div>
          </div>
          <div class="p-8">
            <div class="font-mono text-[.65rem] tracking-[.2em] text-gold mb-2">02</div>
            <h3 class="font-display font-bold text-[1.35rem] leading-tight mb-3">Solstice Editorial</h3>
            <p class="font-body text-smoke text-sm leading-relaxed mb-5">A quarterly arts magazine — art direction, grid systems, and type hierarchy for 120-page print runs.</p>
            <div class="flex gap-2">
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Editorial</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Print</span>
            </div>
          </div>
          <span class="absolute top-5 right-6 text-gold text-lg opacity-0 -translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
        </div>


        <div onclick="showProject('verdant')"
             class="bg-forest border border-sage/30 overflow-hidden relative
                    group hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300">
          <div class="relative overflow-hidden" style="aspect-ratio:16/10">
            <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                 style="background:linear-gradient(135deg,#1a4025,#1a3d3a,#0d1f1d)">
              <div class="absolute inset-0 grid-pattern"></div>
              <div class="absolute inset-0 flex items-center justify-center font-display font-black text-white/[.07]"
                   style="font-size:5rem">VRD</div>
            </div>
          </div>
          <div class="p-8">
            <div class="font-mono text-[.65rem] tracking-[.2em] text-gold mb-2">03</div>
            <h3 class="font-display font-bold text-[1.35rem] leading-tight mb-3">Verdant Co. Rebrand</h3>
            <p class="font-body text-smoke text-sm leading-relaxed mb-5">Complete brand overhaul for a sustainable lifestyle company — strategy, identity, and digital design systems.</p>
            <div class="flex gap-2">
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Rebrand</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Digital</span>
            </div>
          </div>
          <span class="absolute top-5 right-6 text-gold text-lg opacity-0 -translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
        </div>
        <div onclick="showProject('nocturn')"
             class="col-span-2 grid grid-cols-2 bg-forest border border-sage/30 overflow-hidden relative
                    group hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300">
          <div class="p-10 flex flex-col justify-center">
            <div class="font-mono text-[.65rem] tracking-[.2em] text-gold mb-3">04</div>
            <h3 class="font-display font-bold text-[1.65rem] leading-tight mb-4">Nocturn Music Festival</h3>
            <p class="font-body text-smoke leading-relaxed text-[.95rem] mb-6">Campaign identity, poster series, merchandise, and stage design for Southeast Asia's largest electronic music festival.</p>
            <div class="flex flex-wrap gap-2">
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Campaign</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Poster</span>
              <span class="font-mono text-[.6rem] tracking-[.1em] uppercase bg-sage/20 text-mist px-3 py-1">Merch</span>
            </div>
          </div>
          <div class="relative overflow-hidden" style="min-height:300px">
            <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                 style="background:linear-gradient(135deg,#1a1a2e,#0d2b14,#2d6642)">
              <div class="absolute inset-0 grid-pattern"></div>
              <div class="absolute inset-0 flex items-center justify-center font-display font-black text-white/[.07]"
                   style="font-size:6rem">NCT</div>
            </div>
          </div>
          <span class="absolute top-5 right-6 text-gold text-lg opacity-0 -translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
        </div>

      </div>
    </div>
  </section>
  <section id="collections" class="relative z-10 py-40 bg-forest border-t border-sage/30">
    <div class="max-w-6xl mx-auto px-16">

      <div class="reveal mb-16">
        <div class="sec-lbl">Artwork Archives</div>
        <h2 class="font-display font-black leading-none mb-4" style="font-size:clamp(2.5rem,5vw,4rem)">Collections</h2>
        <p class="font-body text-mist leading-relaxed max-w-lg" style="font-size:1.05rem">
          Personal work, explorations, and curated series outside of client commissions.
        </p>
      </div>

      <div class="reveal grid grid-cols-3 gap-8" style="transition-delay:.15s">

        <div onclick="showCollection('typographic')"
             class="relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300">
          <div class="relative overflow-hidden" style="aspect-ratio:3/4;background:linear-gradient(160deg,#0f2926,#1a4025,#2a5c35)">
            <div class="absolute inset-0 stripe-pattern"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="font-display font-black text-gold/20" style="font-size:7rem">Aa</span>
            </div>
            <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(10,26,14,.82),transparent 60%)"></div>
            <div class="absolute inset-0 border border-transparent group-hover:border-gold/50 transition-colors duration-300 pointer-events-none"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="font-display font-bold text-xl mb-1">Typographic Studies</h3>
            <p class="font-mono text-[.62rem] tracking-[.15em] text-gold uppercase">24 pieces · Ongoing</p>
          </div>
        </div>

        <div onclick="showCollection('chromatic')"
             class="relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300 mt-12">
          <div class="relative overflow-hidden" style="aspect-ratio:3/4;background:linear-gradient(160deg,#3d1a0d,#e8891a,#6b3d10)">
            <div class="absolute inset-0 stripe-pattern"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full" style="background:radial-gradient(circle,rgba(245,166,35,.25),transparent)"></div>
            </div>
            <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(10,26,14,.82),transparent 60%)"></div>
            <div class="absolute inset-0 border border-transparent group-hover:border-gold/50 transition-colors duration-300 pointer-events-none"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="font-display font-bold text-xl mb-1">Chromatic Gestures</h3>
            <p class="font-mono text-[.62rem] tracking-[.15em] text-gold uppercase">18 pieces · 2024</p>
          </div>
        </div>

        <div onclick="showCollection('form')"
             class="relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300">
          <div class="relative overflow-hidden" style="aspect-ratio:3/4;background:linear-gradient(160deg,#0d2b14,#1a3d3a,#2d6642)">
            <div class="absolute inset-0 stripe-pattern"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-24 h-24 border-2 border-gold/40 rotate-45"></div>
            </div>
            <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(10,26,14,.82),transparent 60%)"></div>
            <div class="absolute inset-0 border border-transparent group-hover:border-gold/50 transition-colors duration-300 pointer-events-none"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="font-display font-bold text-xl mb-1">Form &amp; Negative Space</h3>
            <p class="font-mono text-[.62rem] tracking-[.15em] text-gold uppercase">31 pieces · 2023–2024</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section id="contact" class="relative z-10 py-40 bg-ink border-t border-sage/30">
    <div class="max-w-6xl mx-auto px-16 grid grid-cols-2 gap-32 items-center">

      <div class="reveal">
        <div class="sec-lbl">Let's Talk</div>
        <h2 class="font-display font-black leading-none mb-6" style="font-size:clamp(2.5rem,5vw,4rem)">Start a project.</h2>
        <p class="font-body text-mist leading-[1.9] max-w-md" style="font-size:1.05rem">
          Whether you have a brief, a vague idea, or just want to explore what's possible — I'd love to hear from you.
          I take on a limited number of projects each quarter.
        </p>
        <a href="mailto:hello@alexandracruz.com"
           class="font-display italic text-2xl text-gold hover:text-amber transition-colors no-underline block mt-8">
          hello@alexandracruz.com
        </a>
      </div>

      <div class="reveal flex flex-col gap-6" style="transition-delay:.2s">
        <div class="flex flex-col gap-2">
          <label class="font-mono text-[.62rem] tracking-[.2em] text-gold uppercase">Your Name</label>
          <input type="text" placeholder="Jane Smith"
                 class="bg-forest border border-sage/40 text-cream font-body text-base px-4 py-3.5 outline-none
                        focus:border-gold transition-colors placeholder:text-smoke"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-mono text-[.62rem] tracking-[.2em] text-gold uppercase">Email Address</label>
          <input type="email" placeholder="jane@studio.com"
                 class="bg-forest border border-sage/40 text-cream font-body text-base px-4 py-3.5 outline-none
                        focus:border-gold transition-colors placeholder:text-smoke"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-mono text-[.62rem] tracking-[.2em] text-gold uppercase">Project Type</label>
          <input type="text" placeholder="Brand Identity, Editorial, Campaign…"
                 class="bg-forest border border-sage/40 text-cream font-body text-base px-4 py-3.5 outline-none
                        focus:border-gold transition-colors placeholder:text-smoke"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-mono text-[.62rem] tracking-[.2em] text-gold uppercase">Tell me about your project</label>
          <textarea rows="5" placeholder="A brief description, timeline, and budget if you have one…"
                    class="bg-forest border border-sage/40 text-cream font-body text-base px-4 py-3.5 outline-none
                           focus:border-gold transition-colors placeholder:text-smoke resize-y"></textarea>
        </div>
        <button class="self-start bg-gold text-ink font-mono text-[.7rem] tracking-[.15em] uppercase
                       px-10 py-4 hover:bg-amber hover:-translate-y-0.5 transition-all duration-200">
          Send Message
        </button>
      </div>

    </div>
  </section>


  <footer class="relative z-10 bg-forest border-t border-sage/30 px-16 py-10 flex justify-between items-center">
    <div class="font-display text-sm tracking-[.15em] text-mist uppercase"><span class="text-gold">A</span>lexandra Cruz</div>
    <div class="font-mono text-[.62rem] tracking-[.1em] text-smoke">© 2025 Alexandra Cruz. All rights reserved.</div>
    <div class="flex gap-6">
      <a href="#" class="font-mono text-[.65rem] tracking-[.1em] uppercase text-smoke hover:text-gold transition-colors no-underline">Behance</a>
      <a href="#" class="font-mono text-[.65rem] tracking-[.1em] uppercase text-smoke hover:text-gold transition-colors no-underline">Instagram</a>
      <a href="#" class="font-mono text-[.65rem] tracking-[.1em] uppercase text-smoke hover:text-gold transition-colors no-underline">LinkedIn</a>
    </div>
  </footer>

</div>


<div id="page-project" class="hidden min-h-screen bg-ink py-36">
  <div class="max-w-5xl mx-auto px-16">

    <button onclick="showMain()"
            class="font-mono text-[.68rem] tracking-[.15em] uppercase text-gold bg-transparent border-none
                   mb-16 flex items-center gap-2 hover:gap-3 transition-all duration-200 before:content-['←']">
      Back to projects
    </button>

    <div class="grid grid-cols-2 gap-20 mb-20 items-start">
      <div>
        <div id="pd-label" class="sec-lbl">Featured</div>
        <h1 id="pd-title" class="font-display font-black leading-none mb-8"
            style="font-size:clamp(2.4rem,4.8vw,4.2rem)">Title</h1>
        <div class="grid grid-cols-2 gap-5 mb-8">
          <div><label class="font-mono text-[.6rem] tracking-[.2em] text-gold uppercase block mb-1">Year</label>
               <span id="pd-year" class="font-body text-mist text-sm">2024</span></div>
          <div><label class="font-mono text-[.6rem] tracking-[.2em] text-gold uppercase block mb-1">Client</label>
               <span id="pd-client" class="font-body text-mist text-sm">—</span></div>
          <div><label class="font-mono text-[.6rem] tracking-[.2em] text-gold uppercase block mb-1">Role</label>
               <span id="pd-role" class="font-body text-mist text-sm">—</span></div>
          <div><label class="font-mono text-[.6rem] tracking-[.2em] text-gold uppercase block mb-1">Category</label>
               <span id="pd-cat" class="font-body text-mist text-sm">—</span></div>
        </div>
        <div id="pd-body" class="font-body text-mist leading-[1.9] space-y-4" style="font-size:1.05rem"></div>
      </div>
      <div>
        <div id="pd-image" class="relative overflow-hidden border border-sage/30" style="aspect-ratio:4/3">
          <div id="pd-bg" class="absolute inset-0"></div>
          <div class="absolute inset-0 grid-pattern opacity-60"></div>
          <div id="pd-big-label" class="absolute inset-0 flex items-center justify-center
               font-display font-black text-white/[.08]" style="font-size:4.5rem"></div>
        </div>
      </div>
    </div>

    <div class="border-t border-sage/30 pt-16">
      <div class="sec-lbl">Project Gallery</div>
      <h2 class="font-display font-black text-3xl leading-none mb-10">Visual Deliverables</h2>
      <div class="proj-gallery">
        <div style="background:linear-gradient(135deg,#0f2926,#1a4025)"><div class="absolute inset-0 grid-pattern opacity-50"></div></div>
        <div style="background:linear-gradient(135deg,#2b1a0d,#e8891a)"><div class="absolute inset-0 grid-pattern opacity-50"></div></div>
        <div style="background:linear-gradient(135deg,#1a4025,#1a3d3a)"><div class="absolute inset-0 grid-pattern opacity-50"></div></div>
        <div style="background:linear-gradient(135deg,#1a1a2e,#2d6642)"><div class="absolute inset-0 grid-pattern opacity-50"></div></div>
        <div style="background:linear-gradient(135deg,#0d2b14,#3d8055)"><div class="absolute inset-0 grid-pattern opacity-50"></div></div>
      </div>
    </div>

  </div>
</div>


<div id="page-collection" class="hidden min-h-screen bg-forest py-36">
  <div class="max-w-6xl mx-auto px-16">

    <button onclick="showMain()"
            class="font-mono text-[.68rem] tracking-[.15em] uppercase text-gold bg-transparent border-none
                   mb-16 flex items-center gap-2 hover:gap-3 transition-all duration-200 before:content-['←']">
      Back to collections
    </button>

    <div class="mb-16">
      <div id="col-count" class="sec-lbl">Collection</div>
      <h1 id="col-title" class="font-display font-black leading-none mb-4"
          style="font-size:clamp(2.4rem,4.8vw,4rem)">Title</h1>
      <p id="col-desc" class="font-body text-mist leading-[1.9] max-w-2xl" style="font-size:1.05rem">—</p>
    </div>

    <div class="masonry">
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:1;background:linear-gradient(135deg,#1a4025,#1a3d3a)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 01</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:3/4;background:linear-gradient(135deg,#3d2010,#e8891a)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 02</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:16/9;background:linear-gradient(135deg,#0d2b14,#2d6642)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 03</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:4/3;background:linear-gradient(135deg,#0f2926,#1a4025)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 04</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:2/3;background:linear-gradient(135deg,#2a1a00,#f5a623)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 05</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:1;background:linear-gradient(135deg,#2d6642,#1a3d3a)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 06</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:4/3;background:linear-gradient(135deg,#d4611a,#2b1a0d)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 07</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:3/4;background:linear-gradient(135deg,#0d2b14,#0f2926)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 08</div>
      </div>
      <div class="border border-sage/20 hover:border-gold/40 transition-colors overflow-hidden">
        <div class="grid-pattern-sm" style="aspect-ratio:16/9;background:linear-gradient(135deg,#1a4025,#2a5c35)"></div>
        <div class="font-mono text-[.6rem] tracking-[.1em] text-smoke uppercase px-4 py-3">Study No. 09</div>
      </div>
    </div>

  </div>
</div>
    </>
  )
}

export default App
