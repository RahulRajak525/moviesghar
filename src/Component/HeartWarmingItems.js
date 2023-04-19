import React from "react";
import styles from "../Css/HeartWarming.module.css";
import { useSelector } from "react-redux";

const HeartWarmingItems = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default HeartWarmingItems;
