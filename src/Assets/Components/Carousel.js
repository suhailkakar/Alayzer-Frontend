import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Image1 from '../Images/Logos/1.png'
import Image2 from '../Images/Logos/2.png'
import Image3 from '../Images/Logos/3.png'
import Image4 from '../Images/Logos/4.png'
import Image5 from '../Images/Logos/5.png'
import Image6 from '../Images/Logos/6.png'
import Image7 from '../Images/Logos/7.png'
import Image8 from '../Images/Logos/8.png'

export default function CarouselMain() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div style={{marginLeft: '7%'}}> 
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={100}
        keyBoardControl={true}
        // autoPlay={true}

        arrows={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <img className="logo" src={Image1} />
        <img className="logo" src={Image6} />
        <img className="logo" src={Image7} />
        <img className="logo" src={Image2} />
        <img className="logo" src={Image8} />
        <img className="logo" src={Image5} />

        <img className="logo" src={Image3} />

      </Carousel>
      ;
    </div>
  );
}
