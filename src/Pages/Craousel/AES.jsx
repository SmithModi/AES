import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function AES() {
  return (
    <Carousel>
      <div>
        <img src="./icons/electronics.png" alt="All Electronics Service" />
      </div>
    </Carousel>
  );
}

export default AES;
