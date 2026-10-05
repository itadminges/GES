import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useModal } from '../context/ModalContext';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [chairmanExpanded, setChairmanExpanded] = useState(false);
  const [visionIndex, setVisionIndex] = useState(0);
  const { openModal } = useModal();

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev % 4) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 4 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;
    // Register horizontal swipe if horizontal distance > vertical and > 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const videoItems = [
    {
      thumb: '/assets/img/video-thumb-1.jpg',
      title: 'Ceremony Class of 2024\nSIPS',
      url: 'https://www.youtube.com/watch?v=GDsGSM-k0Yg'
    },
    {
      thumb: '/assets/img/video-thumb-2.jpg',
      title: 'Shomoukh Early Childhood Education\nCeremony',
      url: 'https://www.youtube.com/watch?v=X8Yx03ZguBY'
    },
    {
      thumb: '/assets/img/video-thumb-3.jpg',
      title: 'Sports Day 2024\nSIPS',
      url: 'https://www.youtube.com/watch?v=IFpNJ7AsHWc'
    },
    {
      thumb: '/assets/img/video-thumb-4.jpg',
      title: 'The 48th Oman National Day Celebration 2018',
      url: 'https://youtu.be/NCjXL99py_k'
    },
    {
      thumb: '/assets/img/video-thumb-7.jpg',
      title: 'S.I.P.S Art Exhibition',
      url: 'https://www.youtube.com/watch?v=Z5MQgE0t08w'
    },
    {
      thumb: '/assets/img/video-thumb-6.jpg',
      title: 'Our Student Story\nSIPS',
      url: 'https://youtu.be/KNIyYtQRaXo'
    }
  ];

  const visionCards = [
    {
      title: 'Vision',
      content: 'To empower a generation of innovative leaders equipped with the knowledge, skills, and values to thrive in a globalized world and contribute to the advancement of society.'
    },
    {
      title: 'Mission',
      content: 'To provide exceptional education that inspires curiosity, fosters lifelong learning, and prepares students to achieve their full potential and make a positive impact on the world.'
    },
    {
      title: 'Values',
      content: 'ELEVATE Framework – Our Commitment to Education (Excellence): Striving for the highest academic and ethical standards. (Leadership): Empowering students to take initiative and inspire change. (Equity): Ensuring inclusive, personalized learning for all. (Vision): Driving innovation and future-focused education. (Adaptability): Embracing change and continuous growth. (Technology): Utilizing advanced tools for effective learning. (Empowerment): Cultivating responsible, globally minded individuals.'
    },
    {
      title: 'Innovation and Research',
      content: 'We lead in educational innovation by offering world-class curricula and forging partnerships with top institutions. Our focus is on creating a dynamic learning environment where students can explore their talents, pursue excellence, and contribute to the future of knowledge and society.'
    }
  ];

  return (
    <div className="container-fluid no-margin no-padding">
      <header>
        {/* Navigation is positioned inside header exactly as in ges.om */}
        <Header isInternal={false} />

        {/* CSS Slider Wrapper */}
        <div
          className="css-slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <input
            type="radio"
            name="slider"
            className="slide-radio1"
            checked={currentSlide === 1}
            onChange={() => setCurrentSlide(1)}
            id="slider_1"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio2"
            checked={currentSlide === 2}
            onChange={() => setCurrentSlide(2)}
            id="slider_2"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio3"
            checked={currentSlide === 3}
            onChange={() => setCurrentSlide(3)}
            id="slider_3"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio4"
            checked={currentSlide === 4}
            onChange={() => setCurrentSlide(4)}
            id="slider_4"
          />

          {/* Slider Pagination */}
          <div className="slider-pagination" role="group" aria-label="Slider Pagination">
            <label htmlFor="slider_1" className="page1" aria-label="Go to slide 1: Quest for Excellence" onClick={() => setCurrentSlide(1)}></label>
            <label htmlFor="slider_2" className="page2" aria-label="Go to slide 2: Meeting Request" onClick={() => setCurrentSlide(2)}></label>
            <label htmlFor="slider_3" className="page3" aria-label="Go to slide 3: Inside GES Community" onClick={() => setCurrentSlide(3)}></label>
            <label htmlFor="slider_4" className="page4" aria-label="Go to slide 4: 24Hour Effective Support" onClick={() => setCurrentSlide(4)}></label>
          </div>

          {/* Slider #1 */}
          <div className="slider slide-1">
            <img
              src="/assets/img/banner/ch-1.png"
              alt="Quest for Excellence - GES Quality Education"
              className="slide-img"
              width="900"
              height="689"
              fetchPriority="high"
              decoding="async"
              style={{
                width: 'auto',
                maxWidth: '60vw',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
            <div className="moving-circles"></div>
            <div className="slider-content">
              <h4>Quest</h4>
              <h2>For Excellence</h2>
              <Link to="/operational" className="more2">Find Out More</Link>
            </div>
            <div className="number-pagination">
              <span>1</span>
            </div>
            <div className="bottom-bg"></div>
          </div>

          {/* Slider #2 */}
          <div className="slider slide-2">
            <img
              src="/assets/img/banner/ch-2.png"
              alt="Request a Meeting with GES Administration"
              className="slide-img"
              width="901"
              height="690"
              loading="lazy"
              decoding="async"
              style={{
                width: 'auto',
                maxWidth: '60vw',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
            <div className="moving-circles2"></div>
            <div className="slider-content">
              <h4>Meeting</h4>
              <h2>Request</h2>
              <Link to="/contact" className="more2">Request Now</Link>
            </div>
            <div className="number-pagination">
              <span>2</span>
            </div>
            <div className="bottom-bg"></div>
          </div>

          {/* Slider #3 */}
          <div className="slider slide-3">
            <img
              src="/assets/img/banner/ch-3.png"
              alt="Inside GES Quality Education Community"
              className="slide-img"
              width="700"
              height="536"
              loading="lazy"
              decoding="async"
              style={{
                width: 'auto',
                maxWidth: '60vw',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
            <div className="moving-circles3"></div>
            <div className="slider-content">
              <h4>Inside GES</h4>
              <h2>Our Commuinty</h2>
              <Link to="/about" className="more2">Explore</Link>
            </div>
            <div className="number-pagination">
              <span>3</span>
            </div>
            <div className="bottom-bg"></div>
          </div>

          {/* Slider #4 - 24Hour Effective Support */}
          <div className="slider slide-4">
            <img
              src="/assets/img/banner/ch-4.png"
              alt="24-Hour Effective Educational Support"
              className="slide-img"
              width="900"
              height="689"
              loading="lazy"
              decoding="async"
              style={{
                width: 'auto',
                maxWidth: '60vw',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
            <div className="moving-circles4"></div>
            <div className="slider-content">
              <h4>24Hour</h4>
              <h2>Effective Support</h2>
              <Link to="/contact" className="more2">Be Contact</Link>
            </div>
            <div className="number-pagination">
              <span>4</span>
            </div>
            <div className="bottom-bg"></div>
          </div>
        </div>

        {/* News ticker */}
        <div className="news">
          <h1>Our Impact</h1>
          <span>
            <div id="slideshow">
              <div>
                <a href="/assets/downloads/awards.pdf" target="_blank" rel="noreferrer">
                  Empowering Minds Through Execellence, Innovation and Knowledge<sup></sup>
                </a>
              </div>
            </div>
          </span>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* About GES Section */}
        <section className="about aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
          <h1>About GES Quality Education</h1>
          <p>
            <b>Global Education Services Company “GES” Quality Education</b> is a leading private education group in the Sultanate of Oman, dedicated to delivering world-class K-12 premium schools, preschools, and early learning centers. Since our founding in 2012, GES has been committed to nurturing young minds and empowering them with the knowledge, skills, and values needed to thrive in an ever-changing world.
            <br /><br />
            As a homegrown Omani brand, GES is the lifelong dream of the Al Hashmi family, who envisioned a transformative educational journey for the children of Oman. Our mission is to provide quality education that inspires innovation, fosters leadership, and cultivates a lifelong love for learning.
          </p>
          <Link to="/about" className="more">Read More</Link>

          {/* Radius Statistics */}
          <div className="container padding-100">
            <div className="raduis">
              <img
                src="/assets/img/student.png"
                alt="5000+ Enrolled Students"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                className="blob-icon aos-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <h1>+5000</h1>
              <h2>STUDENTS</h2>
            </div>

            <div className="raduis">
              <img
                src="/assets/img/emp.png"
                alt="700+ Qualified Employees"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                className="blob-icon aos-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <h1>+700</h1>
              <h2>EMPLOYEES</h2>
            </div>

            <div className="raduis">
              <img
                src="/assets/img/grad.png"
                alt="100+ Graduated Alumni"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                className="blob-icon aos-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <h1>+100</h1>
              <h2>ALUMNI</h2>
            </div>

            <div className="raduis">
              <img
                src="/assets/img/schools.png"
                alt="4 Premium Campuses and Schools"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                className="blob-icon aos-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <h1>4</h1>
              <h2>SCHOOLS</h2>
            </div>
          </div>
        </section>

        {/* Grade Section */}
        <section className="grade aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="400">
          <div className="links">
            <ul>
              <li><Link to="/careers">JOIN OUR TEAM</Link></li>
              <li><Link to="/partner">PARTNER WITH US</Link></li>
            </ul>
          </div>
          <div className="title">
            <div className="aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
              <h1>Smarter</h1>
              <h1>Educational Services</h1> <br />
            </div>
          </div>
        </section>

        {/* Chairman Section */}
        <section className="chairman">
          <div className="aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
            <h3>A FEW WORDS BY</h3>
            <h1>Chairman</h1>
            <img
              src="/assets/img/chirman.png"
              alt="Honorable Sheikh Salim Hamood Al Hashmi - Chairman"
              width="220"
              height="220"
              loading="lazy"
              decoding="async"
            />
            <p>
              We believe that every child, when given the right opportunities and access to quality education, can learn, achieve, and make a meaningful difference in their lives and the world around them. Every child is unique, and with the right guidance, support, and encouragement, they can unlock their full potential and become agents of positive change.
              {!chairmanExpanded && <span id="dots">...</span>}
              {chairmanExpanded && (
                <span id="more">
                  <br /><br />
                  This belief drives us to provide our students with a safe, supportive, and positive school environment that understands and addresses their individual needs. By incorporating diverse teaching methods and learning styles, we ensure that every student is given the opportunity to succeed and thrive.
                  <br /><br />
                  Education is a collaborative effort. When schools, families, and communities work together, students become more successful, aware of their surroundings, and equipped to contribute to the growth and well-being of their communities. This is why we actively encourage parental involvement in their children’s education and seize every opportunity to engage with the broader community.
                  <br /><br />
                  Our mission is to instill in students the importance of receiving a high-quality education and to nurture them into lifelong learners who are curious, adaptable, and driven to continuously learn and grow. We aim to prepare them not only to thrive in an ever-changing world but also to lead with confidence, empathy, and innovation.
                </span>
              )}
            </p>

            <small>Honorable Shiehk Salim Hamood Al Hashmi</small>
            <a
              onClick={() => setChairmanExpanded(!chairmanExpanded)}
              id="myBtn"
              className="chairman-more more"
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              {chairmanExpanded ? 'Read less ' : 'Read More '}
              <i className={`fa fa-long-arrow-${chairmanExpanded ? 'up' : 'down'}`}></i>
            </a>

            {/* Vision Rotating Cards */}
            <div className="vision-rotate">
              <div className="rt-container">
                <div className="col-rt-12">
                  <div className="demo-container">
                    <div className="carousel">
                      {/* Controls */}
                      <div className="carousel__controls">
                        <label
                          className="carousel__control carousel__control--forward right"
                          onClick={() => setVisionIndex((prev) => (prev === visionCards.length - 1 ? 0 : prev + 1))}
                          style={{ cursor: 'pointer' }}
                          role="button"
                          tabIndex={0}
                          aria-label="Next vision statement"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setVisionIndex((prev) => (prev === visionCards.length - 1 ? 0 : prev + 1));
                            }
                          }}
                        >
                          <i className="fa fa-angle-right"></i>
                        </label>
                      </div>
                      <div className="carousel__controls">
                        <label
                          className="carousel__control carousel__control--backward left"
                          onClick={() => setVisionIndex((prev) => (prev === 0 ? visionCards.length - 1 : prev - 1))}
                          style={{ cursor: 'pointer' }}
                          role="button"
                          tabIndex={0}
                          aria-label="Previous vision statement"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setVisionIndex((prev) => (prev === 0 ? visionCards.length - 1 : prev - 1));
                            }
                          }}
                        >
                          <i className="fa fa-angle-left"></i>
                        </label>
                      </div>

                      <div className="carousel__screen">
                        <div className="carousel__track">
                          <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" style={{ opacity: 1, position: 'relative' }}>
                            <div className="div-item">
                              <h4>{visionCards[visionIndex].title}</h4>
                              <h5>{visionCards[visionIndex].content}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inside GES Stories */}
        <section className="inside">
          <div className="aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
            <h3>Our Stories</h3>
            <h1>INSIDE <span>GES</span></h1>
            <div className="container">
              <div className="scroller">
                {videoItems.map((item, idx) => (
                  <div className="item" key={idx}>
                    <a
                      className="venobox inside-item"
                      data-vbtype="video"
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        openModal('video', item.url);
                      }}
                      aria-label={`Watch story: ${item.title.replace('\n', ' ')}`}
                    >
                      <div
                        className="circle"
                        style={{ background: `url(${item.thumb}) center center / cover no-repeat` }}
                      >
                        <div className="circle__spin">
                          <svg>
                            <circle cx="50%" cy="50%" r="67px"></circle>
                          </svg>
                        </div>
                      </div>
                      <br />
                      <span style={{ whiteSpace: 'pre-line' }}>{item.title}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
