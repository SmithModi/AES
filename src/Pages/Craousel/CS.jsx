import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import '../../index.css';


export function CS() {

    return (
      <div>
      <Carousel className="carousel-img"> 
        <div>
          <img  src="./icons/cab.png" alt="Cab Service" />
        </div>
        <div>
          <img src="./icons/cab.png" alt="Cab Service" />
        </div>
        <div>
          <img src="./icons/cab.png" alt="Cab Service" />
        </div>
      </Carousel>
      </div>
    );
  }
  
  export default CS;
  