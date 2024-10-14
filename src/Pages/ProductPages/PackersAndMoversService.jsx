import React from 'react';
import './index.css'; // Ensure this CSS file exists
import Navbar from '../../Components/Navbar';
import PMS from "../Craousel/PMS";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import {
  Box,
  Grid,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";

const PackersAndMoversService = () => {
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
              <Heading>Packers and Movers Service</Heading>
            </Box>
            <Box>
              <PMS />
            </Box>
          </Grid>
          <Divider borderWidth="2px" />
        </Container>
        <h1>How it works</h1>
        <p>Learn about our Packers and Movers service process</p>
      </header>

      <main>
        <section className="steps" style={{ paddingTop: 50 }}>
          <div className="step" onClick={() => alert('Step 1: Initial Consultation')}>
            <h2>Step 1: Initial Consultation</h2>
            <p>Learn about our Packers and Movers process</p>
            <i className="fas fa-calendar-alt" />
          </div>
          <br />
          <div className="step" onClick={() => alert('Step 2: Scheduling')}>
            <h2>Step 2: Scheduling</h2>
            <p>We'll schedule a time that works for you</p>
            <i className="fas fa-clock" />
          </div>
          <div className="step" onClick={() => alert('Step 3: Service')}>
            <h2>Step 3: Service</h2>
            <p>Our professional team will handle your moving needs</p>
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
export default PackersAndMoversService;
