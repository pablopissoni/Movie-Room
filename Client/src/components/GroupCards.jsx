import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const GroupCards = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  //? ---- GET NOW PLAYING MOVIES ----
  const getNowPlayingMovies = async (page = 1) => {
    const APIKEY = "88c2dc365e81dfa09090f76e5767cd58";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    setNowPlayingMovies(data.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  console.log(
    "🚀 ~ file: GroupCards.jsx:8 ~ GroupCards ~ nowPlayingMovies:",
    nowPlayingMovies
  );

  //? ----------------------

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {nowPlayingMovies?.map((movie, index) => (
          <Card
            key={movie.id}
            name={movie.original_title}
            fecha={movie.release_date}
            puntaje={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
