import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function FS() {
    return (
      <Carousel>
        <div>
          <img src="./icons/Fabrication.png" alt="Fabrication Service" />
        </div>
      </Carousel>
    );
  }

  export default FS;
