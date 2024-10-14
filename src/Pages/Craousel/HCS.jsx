import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function HCS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/homecare.png" alt="Home Care Service" />
        </div>
      </Carousel>
    );
  }
  
  export default HCS;
  