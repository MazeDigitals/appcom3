import React, { useRef } from "react";
import Slider from "react-slick";

const CommentSlider = (props) => {
  const { children } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <img src="/svg/arrow_right.svg" />,
    prevArrow: <img src="/svg/arrow_left.svg" />,
    slidesToScroll: 1,
  };

  console.log(children);

  return (
    <>
      <Slider {...settings} className="comment_slider">
        {children}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div> */}
      </Slider>
    </>
  );
};

export default CommentSlider;
