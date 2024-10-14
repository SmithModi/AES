import React from 'react';
import './index.css'; // Ensure this CSS file exists
import Navbar from '../../Components/Navbar';
import Carousels from "../Craousel/Crasousel"; // Adjust the import path as needed
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

const HomeCleaningService = () => {
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
              <Heading>Home Cleaning Services</Heading>
            </Box>
            <Box>
              <Carousels />
            </Box>
          </Grid>
          <Divider borderWidth="2px" />
        </Container>
        <h1>How It Works</h1>
        <p>Learn about our Home Cleaning service process</p>
      </header>

      <main>
        <section className="steps" style={{ paddingTop: 50 }}>
          <div className="step" onClick={handleClick}>
            <h2>Step 1: Initial Consultation</h2>
            <p>We assess your cleaning needs and discuss your preferences.<br />
              Action Items<br />
              Schedule a meeting (link to calendar).<br />
              Gather necessary details about your home.
            </p>
            <i className="fas fa-calendar-alt" />
          </div>
          <br />
          <div className="step" onClick={handleClick}>
            <h2>Step 2: Cleaning Plan</h2>
            <p>We'll create a customized cleaning plan based on your requirements.</p>
            <i className="fas fa-file-alt" />
          </div>
          <div className="step" onClick={handleClick}>
            <h2>Step 3: Execution</h2>
            <p>Our trained professionals will clean your home thoroughly and efficiently.</p>
            <i className="fas fa-broom" />
          </div>

          <br />

          <div className="step" onClick={Call} style={{ cursor: 'pointer', backgroundColor: '#efc785' }}>
            <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
            <p>Click to Call</p>
          </div>
        </section>
      </main>
    </div>
  );
};

// Exporting the HomeCleaningService component
export default HomeCleaningService;
