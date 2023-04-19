import React from "react";
import "../Component/MovieCard.css";
const MovieCard = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`}
          alt={title}
        />
      </div>
      <div className="card_info">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
