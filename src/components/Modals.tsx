import React from 'react';
import { useModal } from '../context/ModalContext';

export const Modals: React.FC = () => {
  const { activeModal, videoUrl, closeModal } = useModal();

  if (!activeModal) return null;

  // Convert youtube watch URL or short URL to embed format
  const getEmbedUrl = (url: string | null) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <div
      className="vbox-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="vbox-container"
        role="dialog"
        aria-modal="true"
        aria-label="Modal dialog"
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          borderRadius: '12px',
          maxWidth: activeModal === 'video' ? '850px' : '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          padding: activeModal === 'video' ? '0' : '35px 30px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: activeModal === 'video' ? '-40px' : '15px',
            right: activeModal === 'video' ? '0px' : '15px',
            background: activeModal === 'video' ? 'transparent' : '#f0f0f0',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: activeModal === 'video' ? '#fff' : '#333',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Video Lightbox */}
        {activeModal === 'video' && videoUrl && (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
            <iframe
              src={getEmbedUrl(videoUrl)}
              title="GES Video Presentation"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Downloads Modal */}
        {activeModal === 'downloads' && (
          <div className="popmain">
            <h1 style={{ color: '#1F265A', marginBottom: '25px', fontSize: '28px', borderBottom: '2px solid #E53238', paddingBottom: '10px' }}>
              Downloads & Publications
            </h1>
            <ul className="downloads" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
                <a
                  href="/assets/downloads/GES Corporate Broucher.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#3365B0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fa fa-file-pdf" style={{ marginRight: '10px', color: '#E53238', fontSize: '20px' }}></i>
                  GES Corporate Brochure (PDF)
                </a>
              </li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
                <a
                  href="/assets/downloads/awards.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#3365B0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fa fa-award" style={{ marginRight: '10px', color: '#3365B0', fontSize: '20px' }}></i>
                  Empowering Minds Through Excellence - Awards & Impact (PDF)
                </a>
              </li>
              <li style={{ padding: '12px 0' }}>
                <a
                  href="#achieving-success"
                  onClick={(e) => e.preventDefault()}
                  style={{ color: '#555', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fa fa-book-open" style={{ marginRight: '10px', color: '#888', fontSize: '20px' }}></i>
                  GES Achieving Success - Curriculum & Pedagogy Brief
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Terms & Conditions Modal */}
        {activeModal === 'terms' && (
          <div className="popmain">
            <h1 style={{ color: '#1F265A', fontSize: '28px', borderBottom: '2px solid #E53238', paddingBottom: '10px' }}>
              Terms & Conditions
            </h1>
            <div style={{ color: '#444', lineHeight: '1.7', textAlign: 'left', marginTop: '20px', fontSize: '14px' }}>
              <p>
                Welcome to our website <a href="https://www.ges.om/" target="_blank" rel="noreferrer" style={{ color: '#3365B0' }}>www.ges.om</a>. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern GES®'s relationship with you in relation to this website.
              </p>
              <p>
                If you disagree with any part of these terms and conditions, please do not use our website.
              </p>
              <p>
                The term 'GES®' or 'us' or 'we' refer to GES®, its affiliates, subsidiaries, and network schools around the world. The term 'you' refers to the user or viewer of our website. The use of this website is subject to the following terms of use:
              </p>
              <ul>
                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
                <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                <li>This website contains material which is owned by or licensed to us, including design, layout, look, appearance and graphics.</li>
                <li>Access to and use of this website is subject to all applicable laws and regulations of the Sultanate of Oman.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Privacy Policy Modal */}
        {activeModal === 'privacy' && (
          <div className="popmain">
            <h1 style={{ color: '#1F265A', fontSize: '28px', borderBottom: '2px solid #E53238', paddingBottom: '10px' }}>
              Privacy Policy
            </h1>
            <div style={{ color: '#444', lineHeight: '1.7', textAlign: 'left', marginTop: '20px', fontSize: '14px' }}>
              <h4 style={{ color: '#1F265A' }}>Privacy Statement</h4>
              <p>
                This Privacy Policy discloses the privacy practices for https://www.ges.om, the main Global Education Services Company (GES®) website. By using this website, you are consenting to our collection and use of information in accordance with this Privacy Policy.
              </p>
              <h4 style={{ color: '#1F265A' }}>What information do we gather about you?</h4>
              <p>
                We and our third-party vendors collect certain information regarding your use of www.ges.om, such as your IP address and browser type. Your session and the pages you visit on www.ges.om will be tracked, but you will remain anonymous.
              </p>
              <h4 style={{ color: '#1F265A' }}>What do we use your information for?</h4>
              <p>
                We use the information we gather from you for systems administration purposes, abuse prevention, to track user trends, and to fulfill contact and meeting requests.
              </p>
              <h4 style={{ color: '#1F265A' }}>Information Protection</h4>
              <p>
                This site has reasonable security measures in place to help protect against the loss, misuse, and alteration of the information under our control.
              </p>
              <h4 style={{ color: '#1F265A' }}>Effective Date</h4>
              <p>The effective date of this policy is January 1st, 2025.</p>
            </div>
          </div>
        )}

        {/* Cookies Policy Modal */}
        {activeModal === 'cookies' && (
          <div className="popmain">
            <h1 style={{ color: '#1F265A', fontSize: '28px', borderBottom: '2px solid #E53238', paddingBottom: '10px' }}>
              Cookies Policy
            </h1>
            <div style={{ color: '#444', lineHeight: '1.7', textAlign: 'left', marginTop: '20px', fontSize: '14px' }}>
              <p>
                Our website uses cookies. A cookie is a small file of letters and numbers that we put on your computer if you agree. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.
              </p>
              <p>
                The cookies we use are analytical tools that allow us to collect anonymous information about how you use our website and the pages you viewed. They also help us provide you with a good experience when you browse our website and allow us to improve the site.
              </p>
              <p>
                Some cookies are necessary for the operation of our website, so if you choose to block them, some aspects of the site may not work for you.
              </p>
              <p>
                If you want to delete or disable cookies, you can visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noreferrer" style={{ color: '#3365B0' }}>www.aboutcookies.org</a> for more information.
              </p>
            </div>
          </div>
        )}

        {/* Partner Modal */}
        {activeModal === 'partner' && (
          <div className="popmain">
            <h1 style={{ color: '#1F265A', fontSize: '28px', borderBottom: '2px solid #E53238', paddingBottom: '10px' }}>
              Be A Partner
            </h1>
            <div style={{ color: '#444', lineHeight: '1.7', textAlign: 'left', marginTop: '20px', fontSize: '14px' }}>
              <p>
                GES is a global education management organization that manages schools in both the private and public sectors around the world. We offer a number of management options including complete management, license agreements, public-private partnerships, and charter school agreements.
              </p>
              <p>
                GES aims to expand and establish a network of schools, nurseries and training institutes both in Oman and outside. Schools signing a complete management agreement with GES benefit from a wide range of educational products and services designed for Pre-K/K-12 schools.
              </p>
              <div style={{ marginTop: '25px', textAlign: 'center' }}>
                <a href="/operational" className="more" onClick={closeModal} style={{ display: 'inline-block' }}>
                  Our Operational Models
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SIPS School Modal */}
        {activeModal === 'school-sips' && (
          <div className="popmain" style={{ textAlign: 'center' }}>
            <img src="/assets/img/about/sis-logo.jpg" alt="SIPS Logo" style={{ maxHeight: '80px', marginBottom: '15px' }} />
            <h2 style={{ color: '#1F265A', fontSize: '24px' }}>Al Shomoukh International Private School</h2>
            <h6 style={{ color: '#777', margin: '10px 0 15px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#E53238', marginRight: '6px' }}></i>
              Hay Al Hail, Al Jadeed Al Hail South, Muscat – Oman
            </h6>
            <div style={{ marginBottom: '15px' }}>
              Visit our website:{' '}
              <a href="http://alshomoukh.com/" target="_blank" rel="noreferrer" style={{ color: '#3365B0', fontWeight: 'bold' }}>
                www.alshomoukh.com
              </a>
            </div>
            <p style={{ color: '#555', textAlign: 'left', lineHeight: '1.7', fontSize: '14px' }}>
              Al Shomoukh International Private School (SIPS) is one of Oman’s top educational schools, renowned for delivering exceptional academic excellence through the National English Curriculum (British) for K-12 students. Established in 2015 alongside a bilingual stream for students seeking a diverse academic pathway, SIPS offers a world-class learning environment that welcomes students from diverse cultural and national backgrounds, fostering inclusivity and global citizenship.
            </p>
          </div>
        )}

        {/* Qurum Campus Modal */}
        {activeModal === 'school-qurum' && (
          <div className="popmain" style={{ textAlign: 'center' }}>
            <img src="/assets/img/about/snlogo.jpg" alt="Shomoukh Nursery Logo" style={{ maxHeight: '80px', marginBottom: '15px' }} />
            <h2 style={{ color: '#1F265A', fontSize: '24px' }}>Shomoukh ECE Al Qurum Campus</h2>
            <h6 style={{ color: '#777', margin: '10px 0 15px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#E53238', marginRight: '6px' }}></i>
              Al Saruj St., Shatti Al Qurum, Muscat - Oman
            </h6>
            <div style={{ marginBottom: '15px' }}>
              Visit our website:{' '}
              <a href="https://www.shomoukh.com/" target="_blank" rel="noreferrer" style={{ color: '#3365B0', fontWeight: 'bold' }}>
                www.shomoukh.com
              </a>
            </div>
            <p style={{ color: '#555', textAlign: 'left', lineHeight: '1.7', fontSize: '14px' }}>
              Shomoukh Early Childhood Education Center at Al Qurum Campus is one of Oman’s leading early childhood education centers, providing exceptional care in a purpose-built environment designed for children aged one to four. With a wide range of programs and a curriculum inspired by the Reggio Emilia Approach, the center fosters creativity, critical thinking, and holistic development.
            </p>
          </div>
        )}

        {/* Mouj Campus Modal */}
        {activeModal === 'school-mouj' && (
          <div className="popmain" style={{ textAlign: 'center' }}>
            <img src="/assets/img/about/sis-nur-logo.jpg" alt="Shomoukh Nursery Logo" style={{ maxHeight: '80px', marginBottom: '15px' }} />
            <h2 style={{ color: '#1F265A', fontSize: '24px' }}>Shomoukh ECE Al Mouj Campus</h2>
            <h6 style={{ color: '#777', margin: '10px 0 15px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#E53238', marginRight: '6px' }}></i>
              Al Mouj, Muscat – Oman
            </h6>
            <div style={{ marginBottom: '15px' }}>
              Visit our website:{' '}
              <a href="http://www.shomoukh.com/" target="_blank" rel="noreferrer" style={{ color: '#3365B0', fontWeight: 'bold' }}>
                www.shomoukh.com
              </a>
            </div>
            <p style={{ color: '#555', textAlign: 'left', lineHeight: '1.7', fontSize: '14px' }}>
              The Shomoukh for Early Childhood Education at Al Mouj Campus is a high-class early childhood education center of excellence, setting the benchmark for preschools across the MENA region. Renowned for its award-winning sustainable initiatives and innovative educational programs, it provides a world-class learning environment tailored to foster creativity, growth, and holistic development.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
