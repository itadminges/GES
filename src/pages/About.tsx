import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useModal } from '../context/ModalContext';

export const About: React.FC = () => {
  const { openModal } = useModal();
  const [memberIndex, setMemberIndex] = useState(2); // Center on CEO by default

  const members = [
    {
      name: 'Ms. Sarah Saeed',
      role: 'Head of Academics',
      img: '/assets/img/members/Sarah.jpg'
    },
    {
      name: 'Sheikha Jinan Salim Hamood Al Hashmi',
      role: 'Managing Director',
      img: '/assets/img/members/jinan.jpg'
    },
    {
      name: 'Sheikha Janat Salim Hamood Al Hashmi',
      role: 'Chief Executive Officer',
      img: '/assets/img/members/Jannat.jpg'
    },
    {
      name: 'Sheikh Julanda Salim Hamood Al Hashmi',
      role: 'Vice President',
      img: '/assets/img/members/julanda.jpg'
    },
    {
      name: 'Mr. Shanmuganand Hariharan',
      role: 'Director of Finance & Accounts',
      img: '/assets/img/members/Heri.jpg'
    },
    {
      name: 'Ms. Randa Al Ahmadieh',
      role: 'Head of Administration',
      img: '/assets/img/members/Randa.jpg'
    }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Inside</h1>
            <h2>Our Commuinty</h2>
            <h3>A definitive statement of excellence in quality education</h3>
          </div>
          <object id="svg1" data="/assets/img/banners/about.svg" type="image/svg+xml" aria-label="About GES Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Narrative Section */}
        <section className="about aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <h1>ABOUT GES QUALITY EDUCATION</h1>
          <p>
            Global Education Services L.L.C. (GES Quality Education) was established as Oman’s premier private education group, recognized internationally for its commitment to technology, knowledge, and innovation. Leveraging Oman’s stability, GES attracts, develops, and retains top talent from the region and beyond.
            <br /><br />
            Over the years, GES has built a team of experienced experts specializing in opening new schools, revitalizing struggling institutions, and enhancing existing ones. Guided by long-term investment strategies and sustainable education policies, GES is committed to supporting Oman’s Vision 2040 and global educational goals.
            <br /><br />
            As GES celebrates 13 years of excellence in 2025, it remains dedicated to fostering productive learning environments, ensuring equitable resource allocation, and delivering effective leadership to meet the needs of all learners.
          </p>
        </section>

        {/* Leadership Section */}
        <section className="chairman chairman-internal aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
          <h1>Our Management Team</h1>
        </section>

        {/* Members Carousel */}
        <section className="members aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100" style={{ padding: '20px 0 50px' }}>
          <div className="container text-center">
            <div className="row justify-content-center" style={{ gap: '20px' }}>
              {members.map((m, idx) => (
                <div 
                  key={idx} 
                  className="col-lg-3 col-md-4 col-sm-6"
                  style={{
                    marginBottom: '30px'
                  }}
                >
                  <div 
                    className="card border-0 py-4 px-3" 
                    style={{
                      borderRadius: '16px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                      background: '#fff',
                      height: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <div className="row justify-content-center">
                      <img
                        src={m.img}
                        alt={`${m.name} - ${m.role}`}
                        width="140"
                        height="140"
                        loading="lazy"
                        decoding="async"
                        className="img-fluid profile-pic mb-4 mt-3"
                        style={{
                          width: '140px',
                          height: '140px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '4px solid #f0f4f8'
                        }}
                      />
                    </div>
                    <div className="content mb-2 mx-2">
                      <h6 className="mb-2 mt-2" style={{ fontWeight: 'bold', color: '#1F265A', fontSize: '16px' }}>
                        {m.name}
                      </h6>
                      <div style={{ color: '#E53238', fontSize: '13px', fontWeight: '500' }}>
                        {m.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reopen / Campuses */}
        <section className="reopen aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
          <div className="container text-center">
            <img
              src="/assets/img/project-1.jpg"
              alt="GES Quality Education Campus Doors"
              width="1110"
              height="600"
              loading="lazy"
              decoding="async"
              className="project-img"
              style={{ maxWidth: '100%', borderRadius: '15px' }}
            />
            <h1>OUR DOORS</h1>
            <h3>WE ARE ALWAYS OPEN TO LEARNERS</h3>
            <p>
              GES Quality Education is a leading private education group, established in 2012 by visionary Omani entrepreneurs. With a focus on technology, innovation, and knowledge, GES delivers world-class education across K-12 schools, preschools, and early learning centers, contributing to Oman’s Vision 2040 and global educational excellence.
            </p>

            <div className="row projects col-sm-12" style={{ marginTop: '40px' }}>
              {/* Campus 1 */}
              <div className="col-lg-4 col-md-4 col-sm-12 project">
                <div className="img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src="/assets/img/about/s1.jpg"
                    alt="Al Shomoukh International Private School Campus"
                    width="350"
                    height="220"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ minHeight: '50px', marginTop: '15px' }}>Al Shomoukh International Private School</h3>
                <a
                  href="#details"
                  className="more"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('school-sips');
                  }}
                  style={{ cursor: 'pointer', display: 'inline-block' }}
                >
                  View Details
                </a>
              </div>

              {/* Campus 2 */}
              <div className="col-lg-4 col-md-4 col-sm-12 project">
                <div className="img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src="/assets/img/about/c1.jpg"
                    alt="Shomoukh Early Childhood Education Al Qurum Campus"
                    width="350"
                    height="220"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ minHeight: '50px', marginTop: '15px' }}>Shomoukh ECE <br /> Al Qurum Campus</h3>
                <a
                  href="#details"
                  className="more"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('school-qurum');
                  }}
                  style={{ cursor: 'pointer', display: 'inline-block' }}
                >
                  View Details
                </a>
              </div>

              {/* Campus 3 */}
              <div className="col-lg-4 col-md-4 col-sm-12 project">
                <div className="img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src="/assets/img/about/m1.jpg"
                    alt="Shomoukh Early Childhood Education Al Mouj Campus"
                    width="350"
                    height="220"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ minHeight: '50px', marginTop: '15px' }}>Shomoukh ECE <br /> Al Mouj Campus</h3>
                <a
                  href="#details"
                  className="more"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('school-mouj');
                  }}
                  style={{ cursor: 'pointer', display: 'inline-block' }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
