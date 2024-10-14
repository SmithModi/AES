import React from 'react';
import './Home.css'; // Ensure the CSS file is in the same directory

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="footer-container">
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/RealEstate">Real Estate</a></li>
            <li><a href="/cab-service">Cab Service</a></li>
            <li><a href="/housekeeping">Housekeeping</a></li>
            <li><a href="/home-care">Home Care</a></li>
            <li><a href="/plumbing">Plumbing</a></li>
            <li><a href="/electric-service">Electric Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> </li>
            <li>  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> </li>
            <li>  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> </li>
            <li>  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Express Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
