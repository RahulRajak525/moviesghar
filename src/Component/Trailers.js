import React, { Suspense } from "react";
import Carousel from "react-multi-carousel";
import styles from "../Css/Trailers.module.css";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { useSelector } from "react-redux";

const Trailers = () => {
  const TrendingMovies = useSelector((state) => state.movies.TrailersList);
  const trailers = TrendingMovies.map((item, index) => {
    return <Product poster_path={item.poster_path} key={index} />;
  });
  return (
    <div className={styles.trailer}>
      <h2 style={{ color: "white" }}>Tranding Trailers</h2>
      <Suspense fallback={<h1>Loadiing....</h1>}>
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
              items: 5.5,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {trailers}
        </Carousel>
      </Suspense>
    </div>
  );
};

export default Trailers;
