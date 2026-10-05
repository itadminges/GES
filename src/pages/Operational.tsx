import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Operational: React.FC = () => {
  const bulbs = [
    {
      img: '/assets/img/operational/o-1.png',
      bg: '/assets/img/operational/o-pub.svg',
      title: 'Fully aligned curriculum with country standards'
    },
    {
      img: '/assets/img/operational/o-2.png',
      bg: '/assets/img/operational/o-pub.svg',
      title: 'Advanced software systems to enhance operational efficiency'
    },
    {
      img: '/assets/img/operational/o-6.png',
      bg: '/assets/img/operational/o-pub.svg',
      title: 'Ongoing academic quality control through computerized monitoring'
    },
    {
      img: '/assets/img/operational/o-3.png',
      bg: '/assets/img/operational/o-pub.svg',
      title: 'Concept-focused, well-researched educational materials'
    },
    {
      img: '/assets/img/operational/o-4.png',
      bg: '/assets/img/operational/o-pub.svg',
      title: 'Recruitment and professional development for educators'
    },
    {
      img: '/assets/img/operational/o-5.png',
      bg: '/assets/img/operational/o-pub2.svg',
      title: 'Cutting-edge research and development methods designed to optimize results'
    },
    {
      img: '/assets/img/operational/o-7.png',
      bg: '/assets/img/operational/o-pub2.svg',
      title: 'Extensive business management and support services'
    },
    {
      img: '/assets/img/operational/o-8.png',
      bg: '/assets/img/operational/o-pub2.svg',
      title: 'Participation in annual regional events for administrators'
    },
    {
      img: '/assets/img/operational/o-9.png',
      bg: '/assets/img/operational/o-pub2.svg',
      title: 'Regular visits from experienced teams of education and business professionals'
    },
    {
      img: '/assets/img/operational/o-10.png',
      bg: '/assets/img/operational/o-pub2.svg',
      title: 'Networking opportunities with other GES Network schools'
    }
  ];

  const pillars = [
    {
      img: '/assets/img/operational/s-1.jpg',
      title: 'PRIVATE SCHOOLS',
      reverse: false,
      desc: 'GES operates premium-quality Pre-K/K-12 schools and training institutes, designed to meet and exceed international academic standards. With a focus on excellence, these institutions undergo rigorous internal and external quality assurance reviews to maintain a globally competitive edge. GES fosters a student-centered approach that prioritizes innovation, high expectations, and holistic development, ensuring each school meets the highest benchmarks in education.'
    },
    {
      img: '/assets/img/operational/s-2.jpg',
      title: 'PUBLIC-PRIVATE PARTNERSHIPS (PPP)',
      reverse: true,
      desc: 'As a leader in public-private partnerships, GES leverages Oman’s newly adopted PPP framework to create impactful opportunities for educational investment and development. These initiatives drive national economic diversification, promote innovation in education, and support the delivery of high-quality learning experiences aligned with global standards.'
    },
    {
      img: '/assets/img/operational/s-3.jpg',
      title: 'LICENSED SCHOOLS',
      reverse: false,
      desc: 'The GES licensing program enables schools to integrate its proven operational model and intellectual property within their unique management structure. This partnership ensures schools benefit from GES’s expertise while retaining their distinct identity, fostering innovation and excellence in education delivery.'
    },
    {
      img: '/assets/img/operational/s-4.jpg',
      title: 'MASTER FRANCHISE',
      reverse: true,
      desc: 'GES offers exclusive master franchise opportunities, granting partners the authority to manage all franchising activities within a specified territory or country. This model ensures consistent quality, operational excellence, and the strategic expansion of the GES brand while empowering franchisees to lead in their respective regions.'
    }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Our Operational</h1>
            <h1>Models</h1>
            <h2>World Class Facilities</h2>
            <h3>Improving Education</h3>
          </div>
          <object id="svg1" data="/assets/img/banners/operational.svg" type="image/svg+xml" aria-label="Operational Models Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Quest for Excellence */}
        <section className="about aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <h1>Quest for Excellence</h1>
          <p>
            Global Education Services Company Schools signing a complete management agreement with GES® benefit from a wide range of educational products and services designed for Pre-K/K-12 schools.
          </p>
        </section>

        {/* Complete Management */}
        <section className="opertional-sec aos-item aos-init aos-animate container text-center" data-aos="fade-in" data-aos-delay="100">
          <img
            src="/assets/img/operational/banner.jpg"
            alt="Complete Educational Management Banner"
            width="1110"
            height="450"
            loading="lazy"
            decoding="async"
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
          />
          <br />
          <h3 style={{ marginTop: '25px', color: '#888' }}>Complete</h3>
          <h1 style={{ color: '#1F265A', fontWeight: 'bold' }}>Management</h1>
          <p style={{ maxWidth: '850px', margin: '15px auto', lineHeight: '1.8' }}>
            Schools signing a complete management agreement with Global Education Services (GES®) gain access to a comprehensive suite of educational products and services tailored for Pre-K/K-12 schools.
          </p>
        </section>

        {/* 10 Bulbs Section */}
        <section className="container o-modules aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100" style={{ padding: '40px 15px' }}>
          <div className="row col-12 no-padding no-margin">
            <div className="pulbs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
              {bulbs.map((bulb, idx) => (
                <div 
                  className="pulb text-center" 
                  key={idx}
                  style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    className="pulb-icon"
                    style={{
                      backgroundImage: `url(${bulb.bg})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px'
                    }}
                  >
                    <img
                      src={bulb.img}
                      alt={bulb.title}
                      width="42"
                      height="42"
                      loading="lazy"
                      decoding="async"
                      style={{ maxWidth: '42px', maxHeight: '42px' }}
                    />
                  </div>
                  <h5 style={{ fontSize: '13px', lineHeight: '1.5', color: '#1F265A', fontWeight: '600' }}>
                    {bulb.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Operations Pillars */}
        <section className="operations">
          <ul className="aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100" style={{ listStyle: 'none', padding: 0 }}>
            {pillars.map((pillar, idx) => (
              <li className={pillar.reverse ? 'r-o-shap' : ''} key={idx} style={{ marginBottom: '60px' }}>
                <div className="o-shap">
                  <img
                    src={pillar.img}
                    alt={`${pillar.title} - GES Operational Model`}
                    width="550"
                    height="380"
                    loading="lazy"
                    decoding="async"
                  />
                  <span dangerouslySetInnerHTML={{ __html: pillar.title.replace(' ', '<br>') }}></span>
                </div>
                <p style={{ lineHeight: '1.8' }}>
                  {pillar.desc}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};
