import React from 'react';
import './index.css'; // Ensure this CSS file exists
import Navbar from '../../Components/Navbar';
import SS from "../Craousel/SS";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
// Import Chakra UI components
import {
  Box,
  Grid,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";

const HowItWorks = () => {
  // Add onclick event listener inside React component
  const handleClick = (event) => {
    const step = event.currentTarget;
    step.classList.add('active');
    setTimeout(() => {
      step.classList.remove('active');
    }, 500);
  };
  const Call = () => {
    window.location.href = 'tel:8160248669'; // Opens the dialer with the number
  };
  return (
    <div style={{ paddingTop: 5 }}>
      <header>
        <Navbar />
        <Container maxW="full" p={4}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Heading>Real Estate Service</Heading>
            </Box>
            <Box>
              <SS />
            </Box>
          </Grid>
          <Divider borderWidth="2px" />
        </Container>
        <h1>How it works</h1>
        <p>Learn about our Real Estate Service process</p>
      </header>

      <main>
        <section className="steps" style={{ paddingTop: 50 }}>
          <div className="step" onClick={handleClick}>
            <h2>Step 1: Initial Consultation</h2>
            <p>Explain the importance of understanding client needs. <br/>
          Action Items<br/>
          Schedule a meeting (link to calendar).<br/>
          Gather client requirements (form or checklist).
</p>
            <i className="fas fa-calendar-alt" />
          </div>
          <br />
          <div className="step" onClick={handleClick}>
            <h2>Step 2: Scheduling</h2>
            <p>We'll schedule a time that works for you</p>
            <i className="fas fa-clock" />
          </div>
          <div className="step" onClick={handleClick}>
            <h2>Step 3: Service</h2>
            <p>Our expert professionals will arrive at your doorstep</p>
            <i className="fas fa-user" />
            <i class="fa-solid fa-phone"></i> 
          </div>

          <br />

      <div className="step" onClick={Call} style={{ cursor: 'pointer', backgroundColor : '#efc785'}}>
        <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
        <p>Click to Call</p>
      </div>

          
        </section>

      </main>
    </div>
  );
};

export default HowItWorks;