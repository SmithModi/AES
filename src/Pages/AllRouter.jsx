import React from "react";
import { Route, Routes } from "react-router-dom";

// Main Page Import
import Home from "./Home";

// Product Pages Import
import RealEstate from './ProductPages/realestate'; 
import SecuritySystemService from "./ProductPages/SecuritySystemService"; 
import CabService from './ProductPages/CabService';
import HousekeepingService from "./ProductPages/HousekeepingService"; 
import HomeCareService from "./ProductPages/HomeCareService"; 
import PlumbingService from "./ProductPages/PlumbingService"; 
import ElectricService from './ProductPages/ElectricService';

import ElectronicsService from './ProductPages/ElectronicsService'; 
import ColorService from './ProductPages/ColorService'; 
import PackersAndMoversService from './ProductPages/PackersAndMoversService'; 
import PopGypsumService from "./ProductPages/PopGypsumService"; 
import GardeningService from './ProductPages/GardeningService'; 
import RenovationService from "./ProductPages/RenovationService"; 
import FabricationService from './ProductPages/FabricationService'; 
import FurnitureService from './ProductPages/FurnitureService'; 
import CCTVService from './ProductPages/CCTVService'; 
import TravelBookingService from './ProductPages/TravelBookingService'; 
import HotelBookingService from './ProductPages/HotelBookingService'; 
import SocietyManagementService from './ProductPages/SocietyManagementService'; 
import EventManagementService from './ProductPages/EventManagementService'; 
import Blog from './ProductPages/blog'; // Correct import statement
import About from './ProductPages/about'; // Adjust the path as necessary
import Contact from './ProductPages/contact';




export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RealEstate" element={<RealEstate />} />
      <Route path="/security-system" element={<SecuritySystemService />} />
      <Route path="/cab-service" element={<CabService />} />
      <Route path="/housekeeping" element={<HousekeepingService />} />
      <Route path="/home-care" element={<HomeCareService />} />
      <Route path="/plumbing" element={<PlumbingService />} />
      <Route path="/electric-service" element={<ElectricService />} />
      <Route path="/electronics" element={<ElectronicsService />} />
      <Route path="/color-service" element={<ColorService />} />
      <Route path="/packers-and-movers" element={<PackersAndMoversService />} />
      <Route path="/pop-gypsum" element={<PopGypsumService />} />
      <Route path="/gardening" element={<GardeningService />} />
      <Route path="/renovation" element={<RenovationService />} />
      <Route path="/fabrication" element={<FabricationService />} />
      <Route path="/furniture" element={<FurnitureService />} />
      <Route path="/cctv-camera" element={<CCTVService />} />
      <Route path="/travel-booking" element={<TravelBookingService />} />
      <Route path="/hotel-booking" element={<HotelBookingService />} />
      <Route path="/society-management" element={<SocietyManagementService />} />
      <Route path="/event-management" element={<EventManagementService />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />



    </Routes>
  );
}
