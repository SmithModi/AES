import React from 'react';
import '../Home.css';
import Navbar from "../../Components/Navbar";
import Footer from '../../Pages/Footer'; // Correct path

const Contact = () => {
  return (
    <main id="main">
      <Navbar/>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 info-item">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>83 Ambika Complex, Ground Floor, N/r Bhusan Electronics,Raiya Circle, <br />150 Feet Ring Road, Rajkot
              360007</p>
            </div>

            <div className="col-lg-3 col-md-6 info-item">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>info@allexpressservice.com<br /></p>
            </div>

            <div className="col-lg-3 col-md-6 info-item">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91 9512340041</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4958174276574!2d70.80215901422534!3d22.297314348171623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cae073c5dc45%3A0x8b8544d42be8cf88!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714240349101!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Rajkot, Gujarat"
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form id="contactForm" className="contact-form">
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" className="form-control" placeholder="Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-send">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Contact;
