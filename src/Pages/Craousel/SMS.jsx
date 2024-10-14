import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Society Management Service
export function SMS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/society.png" alt="Society Management Service" />
        </div>
      </Carousel>
    );
  }
  
  export default SMS;
  