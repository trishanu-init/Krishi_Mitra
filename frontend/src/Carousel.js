import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
  };

  return (
    <div className="carousel-container block md:hidden">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
