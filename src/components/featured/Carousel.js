import React from "react";

import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true
  };
  return (
    <div
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
      className="carousel_wrapper">
      <Slider {...settings}>
        <div>
          <div
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
            className="carousel_image"></div>
        </div>
        <div>
          <div
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
            className="carousel_image"></div>
        </div>
        <div>
          <div
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
            className="carousel_image"></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
