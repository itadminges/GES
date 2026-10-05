import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { SubmissionsProvider } from './context/SubmissionsContext';

// Universal Components
import { Preloader } from './components/Preloader';
import { ScrollTop } from './components/ScrollTop';
import { Modals } from './components/Modals';
import { SEOHead } from './components/SEOHead';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Operational } from './pages/Operational';
import { Schools } from './pages/Schools';
import { Partner } from './pages/Partner';
import { Careers } from './pages/Careers';
import { News } from './pages/News';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <SubmissionsProvider>
      <ModalProvider>
        <BrowserRouter>
          {/* Universal Features */}
          <Preloader duration={800} />
          <ScrollTop />
          <Modals />
          <SEOHead />

          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/operational" element={<Operational />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy .php Route 301-equivalent permanent redirects to canonical clean URLs */}
            <Route path="/index.php" element={<Navigate to="/" replace />} />
            <Route path="/about.php" element={<Navigate to="/about" replace />} />
            <Route path="/operational.php" element={<Navigate to="/operational" replace />} />
            <Route path="/schools.php" element={<Navigate to="/schools" replace />} />
            <Route path="/partner.php" element={<Navigate to="/partner" replace />} />
            <Route path="/careers.php" element={<Navigate to="/careers" replace />} />
            <Route path="/news.php" element={<Navigate to="/news" replace />} />
            <Route path="/contact.php" element={<Navigate to="/contact" replace />} />

            {/* Catch-all redirect to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </SubmissionsProvider>
  );
};

export default App;
