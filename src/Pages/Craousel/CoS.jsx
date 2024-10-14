import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function CoS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/color.png" alt="Color Service" />
        </div>
      </Carousel>
    );
  }
  
  export default CoS;
  