import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function GS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/Gardening.png" alt="Gardening Service" />
        </div>
      </Carousel>
    );
  }
  
  export default GS;
  