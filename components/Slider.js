import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center capitalize p-4">gallery</h1>
      <div className="relative flex justify-center p-4">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0 "
              }
            >
              <FaArrowCircleLeft
                onClick={() => prevSlide()}
                size={50}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
              {index === current && (
                <Image
                  src={slide.img}
                  alt="#"
                  width="1440"
                  height="600"
                  className="rounded-2xl new-img"
                />
              )}
              <FaArrowCircleRight
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                onClick={() => nextSlide()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
