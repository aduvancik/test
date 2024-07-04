import React, { useState, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Arrow } from "./Arrow";

export default function Slidere({ listPhotoSrc }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });


  const keys = useMemo(() => listPhotoSrc.map((_, index) => index), [listPhotoSrc]);

  return (
    <div className="slider__container w-2/3 mx-auto bg-white p-2">
      <div className="navigation-wrapper relative">
        <div key={`${keys[0]}${keys.length}`} ref={sliderRef} className="keen-slider">
          {listPhotoSrc.map((src, index) => (
            <img
              key={keys[index]}
              src={src}
              alt={`slide-${index}`}
              className="object-contain	max-h-[400px] keen-slider__slide w-[90%] number-slide flex items-center justify-center  font-medium text-white"
            />
          ))}
        </div>
        {loaded && listPhotoSrc.length > 1 && instanceRef && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              right
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>

        )}
      </div>
      {loaded && listPhotoSrc.length > 1 && instanceRef && (
        <div className="dots flex justify-center pt-2.5 gap-2">
          {keys.map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.moveToSlideRelative(idx)}
              className={`dot ${currentSlide === idx ? "active bg-black" : "bg-gray-400"} w-[10px] h-[10px] rounded-full `}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
