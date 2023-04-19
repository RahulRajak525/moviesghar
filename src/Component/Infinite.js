import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import InfinitePhotos from "./InfinitePhotos";
const PAGE_NUMBER = 1;
const Infinite = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=84dfffc3b37cb52533d1ab1bdab9d2ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&include_page=${page}&include_per_page=20`
      );

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <InfinitePhotos photos={data} />
    </div>
  );
};

export default Infinite;
