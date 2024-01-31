import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
// import './sliderss.css';

function Trends({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log("selected index: ", selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon changed"
        />
      }
    >
      {slides.map((slide) => (
        <Carousel.Item
          key={slide.sub}
          interval={slide.interval}
          style={{ maxHeight: "650px" }}
        >
          <img className="d-block w-100" src={slide.sub} alt="First slide" />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Trends;
