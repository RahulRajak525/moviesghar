import React from "react";
import { useSelector } from "react-redux";
import LanguageItems from "./LanguageItems";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Languages = () => {
  const LanguageListt = useSelector((state) => state.movies.LanguagesList);
  const language = LanguageListt.map((item, index) => {
    return <LanguageItems language={item.english_name} key={index} />;
  });
  return (
    <div>
      <h2 style={{ color: "white" }}>Watch In Your Languages</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 8.5,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 3,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 5,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {language}
      </Carousel>
    </div>
  );
};

export default Languages;
