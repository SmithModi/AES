import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export function PGS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/pop.png" alt="Pop Gypsum Service" />
        </div>
      </Carousel>
    );
  }
  
  export default PGS;
  