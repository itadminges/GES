import React, { useState, useEffect } from 'react';

export const ScrollTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scrollup"
      style={{
        display: 'block',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: '#1F265A',
        color: '#fff',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        textAlign: 'center',
        lineHeight: '45px',
        transition: 'all 0.3s ease'
      }}
      aria-label="Scroll to top"
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
};
