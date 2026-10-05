import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

interface HeaderProps {
  isInternal?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isInternal = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { openModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/news?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Logo: on internal pages or when scrolled, show colored logo; on homepage top, show white logo
  const logoSrc = (isInternal || isScrolled)
    ? '/assets/img/banner/ges-logo-internal.png'
    : '/assets/img/banner/ges-logo.png';

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'navbar-shrink' : ''}`}
      id="mainNav"
      aria-label="Main Navigation"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, .88)' : 'transparent',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.06)' : 'none',
        transition: 'background-color 0.4s ease, height 0.4s ease'
      }}
    >
      {/* Logo */}
      <div className="logo">
        <Link to="/" aria-label="GES Quality Education Home">
          <img
            src={logoSrc}
            alt="GES Quality Education"
            width="168"
            height="58"
            loading="eager"
            decoding="async"
          />
        </Link>
      </div>

      {/* Search */}
      <form action="" autoComplete="on" className="search" onSubmit={handleSearchSubmit} role="search" aria-label="Site Search">
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What're we looking for ?"
          aria-label="What are we looking for?"
        />
        <input id="search_submit" value="Rechercher" type="submit" aria-label="Search" />
      </form>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`open ${menuOpen ? 'oppenned' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }
        }}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName !== 'A') {
            setMenuOpen(!menuOpen);
          }
        }}
      >
        <span className="cls"></span>
        <span>
          <ul className={`sub-menu ${menuOpen ? 'oppenned' : ''}`}>
            <ul className="valign">
              <ul className="big-menu">
                <ul>
                  <li>
                    <Link to="/" title="about" onClick={() => setMenuOpen(false)}>
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" title="skills" onClick={() => setMenuOpen(false)}>
                      About GES
                    </Link>
                  </li>
                  <li>
                    <Link to="/operational" title="jobs" onClick={() => setMenuOpen(false)}>
                      Our Operational Models
                    </Link>
                  </li>
                  <li>
                    <Link to="/schools" title="contact" onClick={() => setMenuOpen(false)}>
                      Our Schools
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner" title="contact" onClick={() => setMenuOpen(false)}>
                      Partner With Us
                    </Link>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Link to="/careers" title="contact" onClick={() => setMenuOpen(false)}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" title="contact" onClick={() => setMenuOpen(false)}>
                      Our Impact
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" title="contact" onClick={() => setMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </ul>

              <ul className="list">
                <li className="sec-menu">
                  <a
                    className="venobox"
                    data-vbtype="inline"
                    href="#inline-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      openModal('downloads');
                    }}
                  >
                    Downloads
                  </a>
                </li>
                <li className="sec-menu">
                  <a
                    className="venobox"
                    data-vbtype="inline"
                    href="#inline-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      openModal('terms');
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="sec-menu">
                  <a
                    className="venobox"
                    data-vbtype="inline"
                    href="#inline-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      openModal('privacy');
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="sec-menu">
                  <a
                    className="venobox"
                    data-vbtype="inline"
                    href="#inline-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      openModal('cookies');
                    }}
                  >
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </ul>
          </ul>
        </span>
        <span className="cls"></span>
      </div>
    </nav>
  );
};
