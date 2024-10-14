import React from 'react';
import './index.css';
import Navbar from '../../Components/Navbar';
import { FS } from '../Craousel/fs'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid, Container, Heading, Divider } from "@chakra-ui/react";

const FabricationService = () => {
  const Call = () => {
    window.location.href = 'tel:8160248669';
  };

  return (
    <div style={{ paddingTop: 5 }}>
      <header>
        <Navbar />
        <Container maxW="full" p={4}>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }} justifyContent="center" alignItems="center">
            <Box>
              <Heading>Fabrication Service</Heading>
            </Box>
            <Box>
              <FS />
            </Box>
          </Grid>
          <Divider borderWidth="2px" />
        </Container>
        <h1>How it works</h1>
        <p>Learn about our Fabrication service process</p>
      </header>

      <main>
        <section className="steps" style={{ paddingTop: 50 }}>
          <div className="step">
            <h2>Step 1: Initial Consultation</h2>
            <p>Learn about our Fabrication service process</p>
          </div>
          <br />
          <div className="step">
            <h2>Step 2: Design</h2>
            <p>We'll design the fabrication based on your requirements</p>
          </div>
          <br />
          <div className="step">
            <h2>Step 3: Fabrication</h2>
            <p>Our experts will handle the fabrication process</p>
          </div>
          <br />
          <div className="step" onClick={Call} style={{ cursor: 'pointer', backgroundColor: '#efc785' }}>
            <FontAwesomeIcon icon={faPhone} />
            <p>Click to Call</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FabricationService;
