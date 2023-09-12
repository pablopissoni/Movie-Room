import React, { useState, useEffect } from "react";
import { Card } from "./Card";

//*--------- SWIPER -----------
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
//*--------- SWIPER -----------

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

      <h2 className="text-center text-2xl font-bold my-4">Tendencias</h2>

      <div className="mx-10 ">
        <Swiper
          slidesPerView={8}
          navigation={true}
          spaceBetween={1}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          {nowPlayingMovies?.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <Card
                // className="p-10"
                id={movie.id}
                name={movie.original_title}
                // fecha={movie.release_date}
                puntaje={movie.vote_average}
                poster={movie.poster_path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
