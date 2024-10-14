import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function PS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/plumber.png" alt="Plumbing Service" />
        </div>
      </Carousel>
    );
  }
  
  export default PS;
  