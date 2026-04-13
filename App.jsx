import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cursor   from './components/Cursor';
import Navbar   from './components/Navbar';
import Home     from './pages/Home';
import ProjectDetail    from './pages/ProjectDetail';
import CollectionDetail from './pages/CollectionDetail';

/**
 * App
 *
 * Top-level component.  Sets up:
 *   - BrowserRouter  — enables client-side routing
 *   - Cursor         — rendered once, fixed to viewport, above everything
 *   - Navbar         — persistent across all routes
 *   - Route tree     — maps URLs to page components
 *
 * Routes:
 *   /                         → Home (all sections)
 *   /projects/:id             → ProjectDetail
 *   /collections/:id          → CollectionDetail
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Global UI — always visible regardless of route */}
      <Cursor />
      <Navbar />

      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/projects/:id"      element={<ProjectDetail />} />
        <Route path="/collections/:id"   element={<CollectionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
