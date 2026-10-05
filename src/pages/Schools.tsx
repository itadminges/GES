import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Schools: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const schools = [
    {
      name: 'Al Shomoukh International Private School (SIPS)',
      location: 'Hay Al Hail, Al Jadeed Al Hail South, Muscat – Oman',
      website: 'http://www.alshomoukh.com/',
      websiteDisplay: 'www.alshomoukh.com',
      mainImg: '/assets/img/about/s1.jpg',
      logo: '/assets/img/about/sis-logo.jpg',
      desc: 'Al Shomoukh International Private School (SIPS) is one of Oman’s top educational schools, renowned for delivering exceptional academic excellence through the National English Curriculum (British) for K-12 students. Established in 2015 alongside a bilingual stream for students seeking a diverse academic pathway, SIPS offers a world-class learning environment that welcomes students from diverse cultural and national backgrounds, fostering inclusivity and global citizenship.\n\nWith a strong reputation for academic excellence across Oman, SIPS has consistently achieved outstanding outcomes, earning its place among the leading private schools in the country.',
      gallery: [
        '/assets/img/about/s2.jpg',
        '/assets/img/about/s3.jpg',
        '/assets/img/about/s4.jpg',
        '/assets/img/about/s5.jpg',
        '/assets/img/about/s6.jpg',
        '/assets/img/about/s7.jpg',
        '/assets/img/about/s8.jpg'
      ]
    },
    {
      name: 'Shomoukh for Early Childhood Education Al Qurum Campus',
      location: 'Al Saruj St., Shatti Al Qurum, Muscat - Oman',
      website: 'http://www.shomoukh.com/',
      websiteDisplay: 'www.shomoukh.com',
      mainImg: '/assets/img/about/c1.jpg',
      logo: '/assets/img/about/sis-nur-logo.jpg',
      desc: 'Shomoukh Early Childhood Education Center at Al Qurum Campus is one of Oman’s leading early childhood education centers, providing exceptional care in a purpose-built environment designed for children aged one to four. With a wide range of programs and a curriculum inspired by the Reggio Emilia Approach, the center fosters creativity, critical thinking, and holistic development.\n\nOur highly qualified educators and state-of-the-art facilities ensure children are nurtured, engaged, and well-prepared for future learning. Trusted by families across Oman, Shomoukh ECE is a second home for children, offering a safe and inspiring space to thrive.',
      gallery: [
        '/assets/img/about/c2.jpg',
        '/assets/img/about/c3.jpg',
        '/assets/img/about/c4.jpg',
        '/assets/img/about/c5.jpg'
      ]
    },
    {
      name: 'Shomoukh for Early Childhood Education Al Mouj Campus',
      location: 'Al Mouj, Muscat – Oman',
      website: 'http://www.shomoukh.com/',
      websiteDisplay: 'www.shomoukh.com',
      mainImg: '/assets/img/about/m1.jpg',
      logo: '/assets/img/about/sis-nur-logo.jpg',
      desc: 'The Shomoukh for Early Childhood Education at Al Mouj Campus is a high-class early childhood education center of excellence, setting the benchmark for preschools across the MENA region. Renowned for its award-winning sustainable initiatives and innovative educational programs, it provides a world-class learning environment tailored to foster creativity, growth, and holistic development.\n\nServing a diverse student body, the center is committed to preparing young learners for a bright future through its cutting-edge curriculum and dedication to excellence. Families trust Al Shomoukh Nursery for its unmatched standards, making it a leader in early childhood education across the region.',
      gallery: [
        '/assets/img/about/m2.jpg',
        '/assets/img/about/m3.jpg',
        '/assets/img/about/m4.jpg',
        '/assets/img/about/m5.jpg',
        '/assets/img/about/m6.jpg',
        '/assets/img/about/m7.jpg',
        '/assets/img/about/m8.jpg',
        '/assets/img/about/m9.jpg',
        '/assets/img/about/m10.jpg'
      ]
    }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Our Activities</h1>
            <h2>Our Schools</h2>
            <h3>Quality Education</h3>
          </div>
          <object id="svg1" data="/assets/img/banners/schools.svg" type="image/svg+xml" aria-label="Schools Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Schools Section */}
        <section className="schools" style={{ padding: '60px 0' }}>
          <div className="container">
            {/* Navigation Tabs */}
            <div
              role="tablist"
              aria-label="Schools and Campuses"
              style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}
            >
              {schools.map((school, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={activeSlide === idx}
                  aria-controls={`school-panel-${idx}`}
                  id={`school-tab-${idx}`}
                  onClick={() => setActiveSlide(idx)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    backgroundColor: activeSlide === idx ? '#1F265A' : '#f0f4f8',
                    color: activeSlide === idx ? '#ffffff' : '#1F265A',
                    boxShadow: activeSlide === idx ? '0 4px 15px rgba(31, 38, 90, 0.3)' : 'none'
                  }}
                >
                  {school.name.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* School Details Card */}
            {(() => {
              const current = schools[activeSlide];
              return (
                <div
                  className="detials"
                  role="tabpanel"
                  id={`school-panel-${activeSlide}`}
                  aria-labelledby={`school-tab-${activeSlide}`}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    padding: '40px 30px',
                    position: 'relative'
                  }}
                >
                  <div className="row align-items-center mb-4">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                      <div
                        style={{
                          position: 'relative',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          cursor: 'pointer'
                        }}
                        onClick={() => setSelectedPhoto(current.mainImg)}
                      >
                        <img
                          src={current.mainImg}
                          alt={current.name}
                          width="450"
                          height="340"
                          loading="lazy"
                          decoding="async"
                          style={{ width: '100%', height: 'auto', maxHeight: '340px', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '15px',
                            right: '15px',
                            background: 'rgba(0,0,0,0.6)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '12px'
                          }}
                        >
                          <i className="fa fa-search-plus" style={{ marginRight: '6px' }}></i> Zoom
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6 text-left">
                      <div className="school-logo mb-3">
                        <img
                          src={current.logo}
                          alt={`${current.name} Logo`}
                          width="180"
                          height="70"
                          loading="lazy"
                          decoding="async"
                          style={{ maxHeight: '70px', width: 'auto' }}
                        />
                      </div>
                      <h2 style={{ color: '#1F265A', fontSize: '26px', fontWeight: 'bold', marginBottom: '10px' }}>
                        {current.name}
                      </h2>
                      <h3 style={{ color: '#777', fontSize: '15px', marginBottom: '15px' }}>
                        <i className="fas fa-map-marker-alt" style={{ color: '#E53238', marginRight: '8px' }}></i>
                        {current.location}
                      </h3>
                      <div className="link mb-3" style={{ fontSize: '14px' }}>
                        <strong>Visit Our Website: </strong>
                        <a href={current.website} target="_blank" rel="noreferrer" style={{ color: '#3365B0', fontWeight: 'bold' }}>
                          {current.websiteDisplay}
                        </a>
                      </div>
                      <p style={{ color: '#555', lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '14px' }}>
                        {current.desc}
                      </p>
                    </div>
                  </div>

                  {/* Campus Gallery */}
                  <div style={{ marginTop: '30px', borderTop: '1px solid #f0f0f0', paddingTop: '25px' }}>
                    <h4 style={{ color: '#1F265A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>
                      Campus Photo Gallery
                    </h4>
                    <div className="row" style={{ gap: '15px', margin: 0 }}>
                      {current.gallery.map((photo, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => setSelectedPhoto(photo)}
                          style={{
                            width: '100px',
                            height: '75px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <img
                            src={photo}
                            alt={`${current.name} - Facility view ${pIdx + 1}`}
                            width="100"
                            height="75"
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Lightbox for Gallery Photos */}
        {selectedPhoto && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedPhoto(null)}
          >
            <div style={{ position: 'relative', maxWidth: '900px', maxHeight: '85vh' }}>
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close zoomed view"
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
              <img
                src={selectedPhoto}
                alt="Enlarged Campus Facility View"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 5px 30px rgba(0,0,0,0.5)' }}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
