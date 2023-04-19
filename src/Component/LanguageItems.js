import React from "react";
import styles from "../Css/Language.module.css";
const LanguageItems = (props) => {
  return (
    <div className={styles.card}>
      <h4>{props.language}</h4>
    </div>
  );
};

export default LanguageItems;
