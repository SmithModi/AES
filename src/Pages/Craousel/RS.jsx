import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function RS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/Renovation.png" alt="Renovation Service" />
        </div>
      </Carousel>
    );
  }
  
  export default RS;
  