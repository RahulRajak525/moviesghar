import React from "react";
import "../Component/InfinitePhotos.css";
import MovieCard from "./MovieCard";
const InfinitePhotos = (props) => {
  return (
    <>
      <h2 style={{ color: "white" }}>More Movies</h2>
      <div className="movie_list">
        {props.photos.map((data, index) => {
          return (
            <MovieCard
              key={index}
              image={data.poster_path}
              title={data.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default InfinitePhotos;
