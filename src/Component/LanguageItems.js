import React from "react";

const LanguageItems = (props) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "grey",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        color: "white",
        boxShadow: "2px 1px 8px 2px white",
        cursor: "pointer",
        marginBottom: "50px",
        marginTop: "20px",
      }}
    >
      <h3>{props.path}</h3>
    </div>
  );
};

export default LanguageItems;
