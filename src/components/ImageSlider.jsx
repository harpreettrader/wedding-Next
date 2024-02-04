import React from "react";
import Carousel from "../components/Carousel.jsx";
function ImageSlider() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg">
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
