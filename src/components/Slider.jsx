import { React } from "react";
import { Carousel } from "react-bootstrap";
import semia from "./semia.jpg";
import ptime from "./ptime.jpg";
import lion from "./lion.jpg";

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100 v-100" src={semia} alt="First slide" />
        <Carousel.Caption>
          <h3>Semia - is important thing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            nesciunt nobis quo?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100 v-100" src={ptime} alt="Second slide" />
        <Carousel.Caption>
          <h3>Personal time - is important thing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            nesciunt nobis quo?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100 v-100" src={lion} alt="Third slide" />
        <Carousel.Caption>
          <h3>Braveness - is important thing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            nesciunt nobis quo?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
