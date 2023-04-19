import React from "react";
import styles from "../Css/Product.module.css";
const Product = (props) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
        width={220}
        height={300}
      />
    </div>
  );
};

export default Product;
