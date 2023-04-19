import React from "react";
import styles from "../Css/Product.module.css";

const HeartWarmingItems = (props) => {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
        width={150}
        height={200}
      />
    </div>
  );
};

export default HeartWarmingItems;
