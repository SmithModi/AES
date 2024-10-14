import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function HS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/housekeeping.png" alt="Housekeeping Service" />
        </div>
      </Carousel>
    );
  }
  
  export default HS;
  