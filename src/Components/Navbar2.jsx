import { Box, Center,Text,Grid,Image} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


let arr = [
  {
    ID: "0",
    image: "./icons/house.png",
    title: "Real Estate Service"
  },
  {
    ID: "1",
    image: "./icons/security.png",
    title: "Security Service"
  },
  {
    ID: "2",
    image: "./icons/cab.png",
    title: "Cab Service"
  },
  {
    ID: "3",
    image: "./icons/housekeeping.png",
    title: "Housekeeping Service"
  },
  {
    ID: "4",
    image: "./icons/homecare.png",
    title: "Home Care Service"
  },
  {
    ID: "5",
    image: "./icons/plumber.png",
    title: "Plumbing Service"
  },
  {
    ID: "6",
    image: "./icons/electric.png",
    title: "Electric Service"
  },
  {
    ID: "7",
    image: "./icons/electronics.png",
    title: "All Electronics Service"
  },
  {
    ID: "8",
    image: "./icons/color.png",
    title: "Color Service"
  },
  {
    ID: "9",
    image: "./icons/Packers.png",
    title: "Packers and Movers Service"
  },
  {
    ID: "10",
    image: "./icons/pop.png",
    title: "Pop Gypsum Service"
  },
  {
    ID: "11",
    image: "./icons/Gardening.png",
    title: "Gardening Service"
  },
  {
    ID: "12",
    image: "./icons/Renovation.png",
    title: "Renovation Service"
  },
  {
    ID: "13",
    image: "./icons/Fabrication.png",
    title: "Fabrication Service"
  },
  {
    ID: "14",
    image: "./icons/Furniture.png",
    title: "Furniture Service"
  },
  {
    ID: "15",
    image: "./icons/CCTV.png",
    title: "CCTV Camera Service"
  },
  {
    ID: "16",
    image: "./icons/Travel.png",
    title: "All Travel Booking Service"
  },
  {
    ID: "17",
    image: "./icons/booking.png",
    title: "All India Hotel Booking Service"
  },
  {
    ID: "18",
    image: "./icons/society.png",
    title: "Society Management Service"
  },
  {
    ID: "19",
    image: "./icons/event.png",
    title: "Event Management Service"
  },
];


export default function Navbar2() {
    


    return (
      <Grid
        gap="6"
        justifyContent="center"
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
        bg="#fcebce	"
        p={{ base: 3, lg: 6 }}
        m="40"
        borderRadius={20}
        boxShadow="2xl"
      >
<Link to={"/RealEstate"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[0].ID}>
    <Center>
      <Image src={arr[0].image} alt="Real Estate Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[0].title}</Text>
  </Box>
</Link>

<Link to={"/security-system"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[1].ID}>
    <Center>
      <Image src={arr[1].image} alt="Security Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[1].title}</Text>
  </Box>
</Link>

<Link to={"/cab-service"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[2].ID}>
    <Center>
      <Image src={arr[2].image} alt="Cab Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[2].title}</Text>
  </Box>
</Link>

<Link to={"/housekeeping"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[3].ID}>
    <Center>
      <Image src={arr[3].image} alt="Housekeeping Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[3].title}</Text>
  </Box>
</Link>

<Link to={"/home-care"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[4].ID}>
    <Center>
      <Image src={arr[4].image} alt="Home Care Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[4].title}</Text>
  </Box>
</Link>

<Link to={"/plumbing"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[5].ID}>
    <Center>
      <Image src={arr[5].image} alt="Plumbing Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[5].title}</Text>
  </Box>
</Link>

<Link to={"/electric-service"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[6].ID}>
    <Center>
      <Image src={arr[6].image} alt="Electric Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[6].title}</Text>
  </Box>
</Link>

<Link to={"/electronics"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[7].ID}>
    <Center>
      <Image src={arr[7].image} alt="All Electronics Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[7].title}</Text>
  </Box>
</Link>

<Link to={"/color-service"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[8].ID}>
    <Center>
      <Image src={arr[8].image} alt="Color Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[8].title}</Text>
  </Box>
</Link>

<Link to={"/packers-and-movers"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[9].ID}>
    <Center>
      <Image src={arr[9].image} alt="Packers and Movers Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[9].title}</Text>
  </Box>
</Link>

<Link to={"/pop-gypsum"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[10].ID}>
    <Center>
      <Image src={arr[10].image} alt="Pop Gypsum Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[10].title}</Text>
  </Box>
</Link>

<Link to={"/gardening"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[11].ID}>
    <Center>
      <Image src={arr[11].image} alt="Gardening Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[11].title}</Text>
  </Box>
</Link>

<Link to={"/renovation"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[12].ID}>
    <Center>
      <Image src={arr[12].image} alt="Renovation Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[12].title}</Text>
  </Box>
</Link>

<Link to={"/fabrication"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[13].ID}>
    <Center>
      <Image src={arr[13].image} alt="Fabrication Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[13].title}</Text>
  </Box>
</Link>

<Link to={"/furniture"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[14].ID}>
    <Center>
      <Image src={arr[14].image} alt="Furniture Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[14].title}</Text>
  </Box>
</Link>

<Link to={"/cctv-camera"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[15].ID}>
    <Center>
      <Image src={arr[15].image} alt="CCTV Camera Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[15].title}</Text>
  </Box>
</Link>

<Link to={"/travel-booking"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[16].ID}>
    <Center>
      <Image src={arr[16].image} alt="All Travel Booking Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[16].title}</Text>
  </Box>
</Link>

<Link to={"/hotel-booking"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[17].ID}>
    <Center>
      <Image src={arr[17].image} alt="All India Hotel Booking Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[17].title}</Text>
  </Box>
</Link>

<Link to={"/society-management"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[18].ID}>
    <Center>
      <Image src={arr[18].image} alt="Society Management Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[18].title}</Text>
  </Box>
</Link>

<Link to={"/event-management"}>
  <Box w="100%" p={{ base: 0, lg: 2 }} _hover={{ bg: "#E2E8F0" }} variant="ghost" key={arr[19].ID}>
    <Center>
      <Image src={arr[19].image} alt="Event Management Service" w={{ base: "18%", lg: "30%" }} />
    </Center>
    <Text mt="15px">{arr[19].title}</Text>
  </Box>
</Link>

        
      </Grid>
    );
}



// w={
//                 id == 2
//                   ? { base: "15%", lg: "24%" }
//                   : { base: "18%", lg: "30%" } && id == 8
//                   ? { base: "25%", lg: "40%" }
//                   :w= {{ base: "18%", lg: "30%" }}
//               }