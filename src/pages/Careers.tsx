import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Careers: React.FC = () => {
  const steps = [
    { num: '01', title: 'You Complete the Online Application', img: '/assets/img/careers/step-1.png', top: true },
    { num: '02', title: 'We Review the Resume', img: '/assets/img/careers/step-2.png', top: false },
    { num: '03', title: 'We assess your application for job fit', img: '/assets/img/careers/step-3.png', top: true },
    { num: '04', title: 'We contact you for preliminary interview', img: '/assets/img/careers/step-4.png', top: false },
    { num: '05', title: 'We contact you for a second interview', img: '/assets/img/careers/step-5.png', top: true },
    { num: '06', title: 'Job Offer Made to the successful candidate', img: '/assets/img/careers/step-6.png', top: false }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Build Your</h1>
            <h1>Career</h1>
            <h2>@ GES Network</h2>
            <a href="https://careers.ges.om" target="_blank" rel="noreferrer" className="more">
              Apply Online
            </a>
          </div>
          <object id="svg1" data="/assets/img/banners/careers.svg" type="image/svg+xml" aria-label="Careers Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Narrative Section */}
        <section className="about aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <p>
            GES is an internationally accredited education management organization, ensuring compliance with global best practices in quality assurance and continuous advancement. We manage schools, offering complete management, licensing agreements, public-private partnerships, and charter school agreements.
            <br /><br />
            A high-caliber academic and administrative team is key to our success. GES recruits top professionals globally and provides continuous professional development to maintain the highest standards. A structured appraisal system ensures accountability, mentoring, and performance-based career growth.
            <br /><br />
            Through strategic leadership and internationally recognized best practices, GES empowers institutions to deliver world-class education and shape the future of learning.
          </p>
          <a href="https://careers.ges.om" target="_blank" rel="noreferrer" className="more" style={{ marginTop: '20px', display: 'inline-block' }}>
            Apply Online
          </a>
        </section>

        {/* Timeline Section */}
        <section className="careers ps-timeline-sec text-center" style={{ padding: '60px 0' }}>
          <h1 style={{ color: '#1F265A', marginBottom: '50px' }}>WHAT TO EXPECT</h1>
          <div className="container">
            <ol className="ps-timeline" style={{ listStyle: 'none', padding: 0 }}>
              {steps.map((step, idx) => (
                <li key={idx}>
                  {step.top ? (
                    <>
                      <div className="img-handler-top">
                        <img
                          src={step.img}
                          alt={`Step ${step.num}: ${step.title}`}
                          width="120"
                          height="120"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ps-bot">
                        <p>{step.title}</p>
                      </div>
                      <span className="ps-sp-top">{step.num}</span>
                    </>
                  ) : (
                    <>
                      <div className="img-handler-bot">
                        <img
                          src={step.img}
                          alt={`Step ${step.num}: ${step.title}`}
                          width="120"
                          height="120"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ps-top">
                        <p>{step.title}</p>
                      </div>
                      <span className="ps-sp-bot">{step.num}</span>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
