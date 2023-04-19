import React from "react";
import styles from "../Css/Product.module.css";
import { useSelector } from "react-redux";
const Product = (props) => {
  const isLoading = useSelector((state) => state.movies.Trailersloading);
  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading... </h1>
        </div>
      ) : (
        <div className={styles.card}>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
            loading="lazy"
          />
        </div>
      )}
    </>
  );
};

export default Product;
