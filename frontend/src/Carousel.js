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
    autoplaySpeed:2000,
  };

  return (
    <div className="carousel-container block md:hidden">
      <Slider {...settings}>
        <div>
          <img src="/banner_1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/banner_2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/banner_3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/banner_4.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/banner_5.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
