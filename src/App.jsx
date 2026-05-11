import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Home      from './pages/Home'
import Projects  from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About     from './pages/About'
import Contact   from './pages/Contact'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/projects"      element={<Projects />} />
          <Route path="/projects/:id"  element={<ProjectDetail />} />
          <Route path="/about"         element={<About />} />
          <Route path="/contact"       element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
