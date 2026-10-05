import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSubmissions } from '../context/SubmissionsContext';

export const Contact: React.FC = () => {
  const { addSubmission } = useSubmissions();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [inquiryType, setInquiryType] = useState<'Meeting Request' | 'Complaint' | 'Suggestion' | 'Question'>('Meeting Request');
  const [meetingDate, setMeetingDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('09:30');
  const [timeTo, setTimeTo] = useState('11:00');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    addSubmission({
      type: inquiryType,
      name: fullName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      message: message.trim(),
      date: inquiryType === 'Meeting Request' ? meetingDate : undefined,
      timeFrom: inquiryType === 'Meeting Request' ? timeFrom : undefined,
      timeTo: inquiryType === 'Meeting Request' ? timeTo : undefined,
      page: 'Contact Us'
    });

    setSubmitted(true);
    setErrorMessage('');
    
    // Clear form
    setFullName('');
    setEmail('');
    setMobile('');
    setMessage('');
    setMeetingDate('');
  };

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>24/7</h1>
            <h2>Effective Support</h2>
            <h3>Contact Us</h3>
          </div>
          <object id="svg1" data="/assets/img/banners/contact.svg" type="image/svg+xml" aria-label="Contact Banner"></object>
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Locations Section */}
        <div className="locations">
          <section className="container aos-item aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 location margin-auto">
              {/* Google Maps Embed */}
              <iframe
                className="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116968.89056255978!2d58.1937326253568!3d23.630219279205765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfd4a44e64fc5%3A0xd0208a49cf260e7f!2sGlobal%20Education%20Services%20Company%20(GES)!5e0!3m2!1sen!2som!4v1603011169349!5m2!1sen!2som"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px', marginBottom: '30px' }}
                allowFullScreen={false}
                loading="lazy"
                title="GES Location Map"
              />

              <div className="row">
                <div className="col-sm-8 margin-auto text-center">
                  <h1 style={{ color: '#1F265A', fontSize: '32px', marginBottom: '15px' }}>Location</h1>
                  <h3 style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                    Postal Office Box: 1756, Airport Heights, Postal Code: 111 <br />
                    Muscat, Sultanate Of Oman
                  </h3>

                  <div className="d-flex justify-content-center flex-wrap" style={{ gap: '30px', marginBottom: '30px' }}>
                    {/* Phone */}
                    <div className="dialing d-flex align-items-center">
                      <div className="icon" style={{ marginRight: '10px' }}>
                        <img
                          src="/assets/img/dialing.png"
                          alt="Telephone Icon"
                          width="32"
                          height="32"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <a href="tel:+96824554422" style={{ color: '#1F265A', fontWeight: 'bold', fontSize: '16px' }}>
                          +968 24554422
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mailing d-flex align-items-center">
                      <div className="icon" style={{ marginRight: '10px' }}>
                        <img
                          src="/assets/img/mailing.png"
                          alt="Email Icon"
                          width="32"
                          height="32"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <a href="mailto:info@ges.om" style={{ color: '#1F265A', fontWeight: 'bold', fontSize: '16px' }}>
                          info@ges.om
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="row social-location col-12 justify-content-center mb-4">
                    <div className="d-flex justify-content-center" style={{ gap: '20px' }}>
                      <a href="https://www.facebook.com/GES-Global-Education-Services-109478385115626" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook" style={{ fontSize: '20px', color: '#1F265A' }}></i>
                      </a>
                      <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                        <i className="fab fa-youtube" style={{ fontSize: '20px', color: '#1F265A' }}></i>
                      </a>
                      <a href="https://www.instagram.com/ges.education/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram" style={{ fontSize: '20px', color: '#1F265A' }}></i>
                      </a>
                      <a href="https://twitter.com/GES_education" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <i className="fa-brands fa-x-twitter" style={{ fontSize: '20px', color: '#1F265A' }}></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin" style={{ fontSize: '20px', color: '#1F265A' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      {/* Interactive Contact Form */}
      <section className="container-fluid email" style={{ padding: '60px 0' }}>
        <div className="container" id="contact-form">
          <div className="row no-padding no-margin justify-content-center">
            <form
              onSubmit={handleSubmit}
              className="col-lg-8 col-md-10 col-sm-12"
              style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
              }}
            >
              <h2 style={{ color: '#1F265A', textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>
                Get In Touch
              </h2>

              {submitted && (
                <div
                  style={{
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    border: '1px solid #c3e6cb'
                  }}
                >
                  <h5 style={{ margin: '0 0 5px', fontWeight: 'bold' }}>✓ Submission Successfully Received!</h5>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    Thank you, your inquiry has been recorded and routed to the GES Administration team.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    marginBottom: '25px'
                  }}
                >
                  {errorMessage}
                </div>
              )}

              {/* Row 1: Full Name & Email */}
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user"></i></div>
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-paper-plane"></i></div>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Mobile & Inquiry Category */}
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-mobile-alt"></i></div>
                    </div>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-edit"></i></div>
                    </div>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      aria-label="Inquiry Category"
                      className="custom-select form-control"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as any)}
                    >
                      <option value="Meeting Request">Meeting Request</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Question">Question</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Conditional Row: Meeting Request Date & Time */}
              {inquiryType === 'Meeting Request' && (
                <div className="form-row" style={{ backgroundColor: '#f9fbfe', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="meetingDate" style={{ fontSize: '13px', fontWeight: 'bold', color: '#1F265A' }}>Preferred Date</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                      </div>
                      <input
                        id="meetingDate"
                        name="meetingDate"
                        type="date"
                        aria-label="Preferred Date"
                        className="form-control"
                        value={meetingDate}
                        onChange={(e) => setMeetingDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-3 mb-2">
                    <label htmlFor="timeFrom" style={{ fontSize: '13px', fontWeight: 'bold', color: '#1F265A' }}>From</label>
                    <input
                      id="timeFrom"
                      name="timeFrom"
                      type="time"
                      aria-label="Meeting Time From"
                      className="form-control"
                      min="09:00"
                      max="14:30"
                      value={timeFrom}
                      onChange={(e) => setTimeFrom(e.target.value)}
                    />
                  </div>

                  <div className="col-md-3 mb-2">
                    <label htmlFor="timeTo" style={{ fontSize: '13px', fontWeight: 'bold', color: '#1F265A' }}>To</label>
                    <input
                      id="timeTo"
                      name="timeTo"
                      type="time"
                      aria-label="Meeting Time To"
                      className="form-control"
                      min="09:30"
                      max="15:00"
                      value={timeTo}
                      onChange={(e) => setTimeTo(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Message Textarea */}
              <div className="form-row mb-3">
                <div className="col-12">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-align-left"></i></div>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="form-control"
                      placeholder="Your message or details..."
                      aria-label="Your message or details"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center" style={{ marginTop: '25px' }}>
                <button
                  type="submit"
                  className="more"
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    padding: '12px 40px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </div>
  );
};
