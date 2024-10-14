import React from 'react';
import './index.css'; // Ensure this CSS file exists
import Navbar from '../../Components/Navbar';
import CS from "../Craousel/CS";
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

const CabService = () => {
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
              <Heading>Cab Service</Heading>
            </Box>
            <Box>
              <CS />
            </Box>
          </Grid>
          <Divider borderWidth="2px" />
        </Container>
        <h1>How it Works</h1>
        <p>Learn about our Cab service process</p>
      </header>

      <main>
        <section className="steps" style={{ paddingTop: 50 }}>
          <div className="step" onClick={handleClick}>
            <h2>Step 1: Initial Booking</h2>
            <p>Request a ride through our app or website.</p>
            <i className="fas fa-car" />
          </div>
          <br />
          <div className="step" onClick={handleClick}>
            <h2>Step 2: Confirm Your Ride</h2>
            <p>We'll confirm your booking and provide details.</p>
            <i className="fas fa-check-circle" />
          </div>
          <div className="step" onClick={handleClick}>
            <h2>Step 3: Enjoy Your Ride</h2>
            <p>Your driver will arrive promptly at your location.</p>
            <i className="fas fa-user" />
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

// Exporting the main component
export default CabService;
