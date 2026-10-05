import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useModal } from '../context/ModalContext';

export const Partner: React.FC = () => {
  const { openModal } = useModal();

  const accreditations = [
    { img: '/assets/img/partners/p-1.jpg', url: 'https://home.moe.gov.om/?GetLang=en', name: 'Ministry of Education' },
    { img: '/assets/img/partners/p-2.jpg', url: 'https://www.manpower.gov.om/', name: 'Ministry of Manpower' },
    { img: '/assets/img/partners/p-3.jpg', url: 'http://www.mosd.gov.om/', name: 'Ministry of Social Development' },
    { img: '/assets/img/partners/p-4.jpg', url: 'https://www.cognia.org', name: 'Cognia' },
    { img: '/assets/img/partners/p-5.jpg', url: 'https://www.ecis.org', name: 'ECIS' }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Partner with Us</h1>
            <h2>Discover Opportunities</h2>
            <h3>Investment</h3>
            <a
              href="#be-partner"
              className="more"
              onClick={(e) => {
                e.preventDefault();
                openModal('partner');
              }}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              Be A Partner
            </a>
          </div>
          <object id="svg1" data="/assets/img/banners/partner.svg" type="image/svg+xml" aria-label="Partner Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Intro Section */}
        <section className="about aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <p>
            GES aims to expand and establish a network of schools, nurseries and training institutes both in Oman and outside. Schools signing a complete management agreement with GES benefit from a wide range of educational products and services designed for Pre-K/K-12 schools.
          </p>
        </section>

        {/* Partner Video Background Section */}
        <section className="patner-se aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <div className="row no-padding no-margin">
            <div className="container-fluid partner-video" style={{ position: 'relative' }}>
              <img
                src="/assets/img/partners/partner-bg.jpg"
                alt="Partner With GES Quality Education"
                width="1200"
                height="400"
                loading="lazy"
                decoding="async"
                className="mask-svg"
                style={{ width: '100%' }}
              />
              <div className="partner-detials">
                <h1>Partner with GES</h1>
                <p>
                  GES is an educational management organization that manages schools and learning centers in both the private and public sectors. We offer a number of management options including complete management, license agreements, public-private partnerships, and franchise.
                  <br /><br />
                  If you are interested in bringing a GES operational model in your area, please contact us at{' '}
                  <a href="mailto:info@ges.om" style={{ color: '#E53238', fontWeight: 'bold' }}>
                    info@ges.om
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands & Partners */}
        <section className="partners text-center aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100" style={{ padding: '60px 0 30px' }}>
          <div className="container">
            <h1 style={{ color: '#1F265A', marginBottom: '40px' }}>Our Brands & Partners</h1>
            <div className="partners-logos row justify-content-center" style={{ gap: '40px' }}>
              <div className="col-sm-4 text-center">
                <a href="http://www.alshomoukh.com/" target="_blank" rel="noreferrer">
                  <img
                    src="/assets/img/about/sis-logo.jpg"
                    alt="Al Shomoukh International Private School Logo"
                    width="180"
                    height="90"
                    loading="lazy"
                    decoding="async"
                    style={{ maxHeight: '90px', maxWidth: '100%', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))' }}
                  />
                </a>
              </div>
              <div className="col-sm-4 text-center">
                <a href="http://www.alshomoukhnursery.com/" target="_blank" rel="noreferrer">
                  <img
                    src="/assets/img/about/sis-nur-logo.jpg"
                    alt="Al Shomoukh Early Childhood Education Center Logo"
                    width="180"
                    height="90"
                    loading="lazy"
                    decoding="async"
                    style={{ maxHeight: '90px', maxWidth: '100%', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="partners text-center aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100" style={{ padding: '30px 0 60px' }}>
          <div className="container">
            <h1 style={{ color: '#1F265A', marginBottom: '40px' }}>Accreditation</h1>
            <div className="partners-logos row justify-content-center align-items-center" style={{ gap: '30px' }}>
              {accreditations.map((item, idx) => (
                <div className="col" key={idx} style={{ minWidth: '130px', textAlign: 'center' }}>
                  <a href={item.url} target="_blank" rel="noreferrer" title={item.name}>
                    <img
                      src={item.img}
                      alt={`${item.name} Accreditation`}
                      width="120"
                      height="65"
                      loading="lazy"
                      decoding="async"
                      style={{
                        maxHeight: '65px',
                        maxWidth: '120px',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Support */}
        <section className="partners-support" style={{ padding: '60px 0', backgroundColor: '#f9fbfe' }}>
          <div className="container text-center aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
            <h1 style={{ color: '#1F265A', marginBottom: '20px' }}>Our Support</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.8', color: '#555' }}>
              GES have the experience needed in different markets to develop and operate educational institutions. Our experienced and trained team will always be available for training and support as well as liaison with our international links to make sure that the highest standards are being utilized.
            </p>
            <Link to="/contact" className="more">
              Find Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
