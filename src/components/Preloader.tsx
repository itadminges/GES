import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  duration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ duration = 900 }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className="preloader js-preloader flex-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0b2152',
        backgroundImage: 'url(/assets/img/loading.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '300px 213px',
        backgroundPosition: 'center',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease-out',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto'
      }}
    >
      <div className="dots" style={{ display: 'none' }}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};
