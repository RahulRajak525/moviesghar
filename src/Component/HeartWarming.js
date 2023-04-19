import React from "react";
import { useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import HeartWarmingItems from "./HeartWarmingItems";
const HeartWarming = () => {
  const HeartWarming = useSelector((state) => state.movies.HeartWarmingList);
  const HeartWarmingTv = HeartWarming.map((item) => {
    return <HeartWarmingItems poster_path={item.poster_path} />;
  });
  return (
    <>
      <h3 style={{ color: "white" }}>Heart Warming Originals</h3>
      <div>
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
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
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
          {HeartWarmingTv}
        </Carousel>{" "}
      </div>
    </>
  );
};

export default HeartWarming;
