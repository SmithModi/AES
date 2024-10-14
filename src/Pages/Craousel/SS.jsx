import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Security Service
export function SS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/security.png" alt="Security Service" />
        </div>
      </Carousel>
    );
  }
  
  export default SS;
  