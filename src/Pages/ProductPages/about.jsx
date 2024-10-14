import React from 'react';
import './index.css'; // Importing the CSS file
import Navbar from "../../Components/Navbar";
import Footer from '../../Pages/Footer'; // Correct path



const About = () => {
  return (

    <main> <Navbar/> 
    <div className="about-container">

            
      <h1>About Us</h1> <br/>
      <p>
        Welcome to Allexpressservice, your trusted partner in providing a wide range of services since 2004. <br/>We are dedicated to delivering exceptional service quality and customer satisfaction.
      </p><br/>
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service-card">
          <h3>1. Real Estate Service</h3>
          <p>Expert guidance in buying, selling, and renting properties.</p>
        </div>
        <div className="service-card">
          <h3>2. Security Service</h3>
          <p>Professional security solutions for homes and businesses.</p>
        </div>
        <div className="service-card">
          <h3>3. Cab Service</h3>
          <p>Reliable transportation services for your convenience.</p>
        </div>
        <div className="service-card">
          <h3>4. Housekeeping Service</h3>
          <p>Comprehensive cleaning solutions tailored to your needs.</p>
        </div>
        <div className="service-card">
          <h3>5. Home Care Service</h3>
          <p>Compassionate care for you and your loved ones.</p>
        </div>
        <div className="service-card">
          <h3>6. Plumbing Service</h3>
          <p>Expert plumbing solutions for all your needs.</p>
        </div>
        <div className="service-card">
          <h3>7. Electric Service</h3>
          <p>Safe and reliable electrical installations and repairs.</p>
        </div>
        <div className="service-card">
          <h3>8. All Electronics Service</h3>
          <p>Repairs and maintenance for all electronic devices.</p>
        </div>
        <div className="service-card">
          <h3>9. Color Service</h3>
          <p>Professional painting services to enhance your space.</p>
        </div>
        <div className="service-card">
          <h3>10. Packers and Movers Service</h3>
          <p>Seamless relocation services for a stress-free move.</p>
        </div>
        <div className="service-card">
          <h3>11. Pop Gypsum Service</h3>
          <p>Expert plastering and false ceiling solutions.</p>
        </div>
        <div className="service-card">
          <h3>12. Gardening Service</h3>
          <p>Professional landscaping and gardening services.</p>
        </div>
        <div className="service-card">
          <h3>13. Renovation Service</h3>
          <p>Transform your space with our renovation services.</p>
        </div>
        <div className="service-card">
          <h3>14. Fabrication Service</h3>
          <p>Custom fabrication solutions for your needs.</p>
        </div>
        <div className="service-card">
          <h3>15. Furniture Service</h3>
          <p>Quality furniture solutions for homes and offices.</p>
        </div>
        <div className="service-card">
          <h3>16. CCTV Camera Service</h3>
          <p>Advanced security camera installations for safety.</p>
        </div>
        <div className="service-card">
          <h3>17. All Travel Booking Service</h3>
          <p>Hassle-free travel booking solutions.</p>
        </div>
        <div className="service-card">
          <h3>18. All India Hotel Booking Service</h3>
          <p>Find the best hotels across India at competitive rates.</p>
        </div>
        <div className="service-card">
          <h3>19. Society Management Service</h3>
          <p>Efficient management solutions for residential societies.</p>
        </div>
        <div className="service-card">
          <h3>20. Event Management Service</h3>
          <p>Comprehensive planning and execution for successful events.</p>
        </div>
      </div>

    </div>
    <div className="ft">
        <Footer />
      </div>
    </main>
  );
};

export default About;
