import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({children, slidesToShow, arrowsScroll, autoplay, autoplayScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay={autoplay} autoplayScroll={autoplayScroll}>
        {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
