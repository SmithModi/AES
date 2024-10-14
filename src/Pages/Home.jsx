import {
  Heading,
  Box,
  Flex,
  Text,
  Grid,
  Container,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import "./Home.css";
import Footer from './Footer'; // Correct path






let arr4 = [
  {
    ID: "12",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png",
    title: "Geyser",
  },
  {
    ID: "13",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
    title: "Water Purifier",
  },
  {
    ID: "14",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    title: "Air Purifier",
  },
];



export default function Home() {
  return (
    <div className="total">
      <div className="Body">
        <div className="Navbar">
          <Navbar />
          <Heading p={2} mt={20} size={["25px", "xl", "2xl"]} noOfLines={1}>
            Home Services, on demand.
          </Heading>
        </div>
        <div className="color_overlay"></div>
      </div>

      {/* -----------Services------------ */}
      <Flex justifyContent="center" gap="10%" alignItems="center" bg="white" mt={5}>
        <Navbar2 />
      </Flex>

      
 {/* Appliances */}
 <Flex mt="20px" bg="white" p={8} justifyContent="center" alignItems="center">
        <Container maxW="1000px">
          <Heading p={8}>Appliances</Heading>
          <Text fontSize="sm">Servicing, Repairing, Installation & Uninstallation</Text>
          <Grid templateColumns="repeat(3, 1fr)" p={9}>
            {arr4.map((el) => (
              <Box key={el.ID} className="product-card" p={{ base: 0, lg: 2 }}>
                <Link>
                  <Center>
                    <Image
                      boxSize="200px"
                      objectFit="cover"
                      src={el.image}
                      alt={el.title}
                      className="product-image"
                    />
                  </Center>
                </Link>
                <Text mt="15px" className="product-title">{el.title}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Flex>

      {/* Appliances */}
      <Flex mt="20px" bg="white" p={8} justifyContent="center" alignItems="center">
        <Container maxW="1000px">
          <Heading p={8}>Appliances</Heading>
          <Text fontSize="sm">Servicing, Repairing, Installation & Uninstallation</Text>
          <Grid templateColumns="repeat(3, 1fr)" p={9}>
            {arr4.map((el) => (
              <Box key={el.ID} className="product-card" p={{ base: 0, lg: 2 }}>
                <Link>
                  <Center>
                    <Image
                      boxSize="200px"
                      objectFit="cover"
                      src={el.image}
                      alt={el.title}
                      className="product-image"
                    />
                  </Center>
                </Link>
                <Text mt="15px" className="product-title">{el.title}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Flex>

       {/* Appliances */}
       <Flex mt="20px" bg="white" p={8} justifyContent="center" alignItems="center">
        <Container maxW="1000px">
          <Heading p={8}>Appliances</Heading>
          <Text fontSize="sm">Servicing, Repairing, Installation & Uninstallation</Text>
          <Grid templateColumns="repeat(3, 1fr)" p={9}>
            {arr4.map((el) => (
              <Box key={el.ID} className="product-card" p={{ base: 0, lg: 2 }}>
                <Link>
                  <Center>
                    <Image
                      boxSize="200px"
                      objectFit="cover"
                      src={el.image}
                      alt={el.title}
                      className="product-image"
                    />
                  </Center>
                </Link>
                <Text mt="15px" className="product-title">{el.title}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Flex>

       {/* Appliances */}
       <Flex mt="20px" bg="white" p={8} justifyContent="center" alignItems="center">
        <Container maxW="1000px">
          <Heading p={8}>Appliances</Heading>
          <Text fontSize="sm">Servicing, Repairing, Installation & Uninstallation</Text>
          <Grid templateColumns="repeat(3, 1fr)" p={9}>
            {arr4.map((el) => (
              <Box key={el.ID} className="product-card" p={{ base: 0, lg: 2 }}>
                <Link>
                  <Center>
                    <Image
                      boxSize="200px"
                      objectFit="cover"
                      src={el.image}
                      alt={el.title}
                      className="product-image"
                    />
                  </Center>
                </Link>
                <Text mt="15px" className="product-title">{el.title}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Flex>
      <Footer/>
      </div>
  );
}
