import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { useSubmissions } from '../context/SubmissionsContext';

export const Footer: React.FC = () => {
  const { openModal } = useModal();
  const { addSubmission } = useSubmissions();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showCookiePolicy, setShowCookiePolicy] = useState(true);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    addSubmission({
      type: 'Newsletter',
      email: email.trim(),
      page: window.location.pathname
    });

    setSubmitted(true);
    setError('');
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer>
      <div className="row aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
        {/* Quick Links */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h1>Quick Links</h1>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About GES</Link></li>
            <li><Link to="/operational">Our Operational Models</Link></li>
            <li><Link to="/schools">Our Schools</Link></li>
            <li><Link to="/partner">Partner With Us</Link></li>
            <li><Link to="/news">In the News</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Downloads */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h1>Downloads</h1>
          <ul>
            <li>
              <a
                href="#achieving-success"
                onClick={(e) => {
                  e.preventDefault();
                  openModal('downloads');
                }}
              >
                Achieving Success
              </a>
            </li>
            <li>
              <a
                href="/assets/downloads/GES Corporate Broucher.pdf"
                target="_blank"
                rel="noreferrer"
              >
                GES Corporate Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h1>Newsletter</h1>
          <a
            href="downloads.php"
            onClick={(e) => {
              e.preventDefault();
              openModal('downloads');
            }}
          >
            Download Latest Newsletter <i className="fa fa-arrow-down"></i>
          </a>

          <h1>Subscribe to our Newsletters</h1>

          <form className="form-inline" onSubmit={handleSubscribe}>
            <div className="form-group mx-sm-3 mb-2 col-sm-10">
              <input
                type="email"
                className="form-control"
                id="emailtxt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your e-mail"
                aria-label="Email address for newsletter subscription"
                required
              />
            </div>
            <button type="submit" className="btn btn-default mb-2" aria-label="Subscribe">
              <i className="fa fa-arrow-right"></i>
            </button>
          </form>

          {submitted && (
            <div style={{ color: '#28a745', fontSize: '13px', margin: '5px 0 0 15px', fontWeight: 'bold' }}>
              ✓ Thank you for subscribing to our newsletter!
            </div>
          )}
          {error && (
            <div style={{ color: '#dc3545', fontSize: '13px', margin: '5px 0 0 15px' }}>
              {error}
            </div>
          )}

          <h1>Follow Us</h1>
          <div className="row no-margin no-padding">
            <div className="col-12 d-flex justify-content-between no-margin no-padding f-social">
              <a href="https://www.facebook.com/GES-Global-Education-Services-109478385115626" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/ges.education/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/GES_education" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Policy Notification Banner with exact Close button matching ges.om */}
      {showCookiePolicy && (
        <div className="noti-policy">
          <div 
            className="close" 
            onClick={() => setShowCookiePolicy(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowCookiePolicy(false);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close cookie policy notification"
            style={{ cursor: 'pointer' }}
          >
            X
          </div>
          <p>
            We use cookies to help give you the best experience on our website.
            By continuing without changing your cookie settings, we assume you
            agree to this. Please read{' '}
            <a 
              className="venobox" 
              data-vbtype="inline" 
              href="#inline-4"
              onClick={(e) => {
                e.preventDefault();
                openModal('cookies');
              }}
            >
              our cookie policy
            </a>{' '}
            to find out more.
          </p>
        </div>
      )}

      {/* Privacy links and Copyright */}
      <div className="privacy">
        <a
          className="venobox"
          data-vbtype="inline"
          href="#inline-2"
          onClick={(e) => {
            e.preventDefault();
            openModal('terms');
          }}
        >
          Terms & Conditions
        </a>
        {' '}|{' '}
        <a
          className="venobox"
          data-vbtype="inline"
          href="#inline-3"
          onClick={(e) => {
            e.preventDefault();
            openModal('privacy');
          }}
        >
          Privacy Policy
        </a>
        {' '}|{' '}
        <a
          className="venobox"
          data-vbtype="inline"
          href="#inline-4"
          onClick={(e) => {
            e.preventDefault();
            openModal('cookies');
          }}
        >
          Cookies Policy
        </a>
        <div>All Copyrights @ Copyrights 2025 Reserved to GES Quality Education</div>
      </div>
    </footer>
  );
};
