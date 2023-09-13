import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [detail, setDetail] = useState([]);

  let { id } = useParams();

  //? ---- GET NOW PLAYING MOVIES ----
  const getDetail = async (id) => {
    const APIKEY = "88c2dc365e81dfa09090f76e5767cd58";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
    );
    const data = await response.json();
    setDetail(data);
    // setDetail(data.results);
  };

  useEffect(() => {
    getDetail(id);
  }, []);
  console.log("🚀 ~ file: GroupCards.jsx:8 ~ GroupCards ~ detail:", detail);
  //? ----------------------

  let size = "w500";
  //* ---------------------------
  return (
    <section className="bg-white dark:bg-gray-900 h-screen ">
        <img className="w-full  opacity-5 object-cover absolute" src={`https://image.tmdb.org/t/p/${size}/${detail.backdrop_path}`} alt="piratas del caribe" />
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center ml-4 w-full  rounded-lg  w-[500px] h-[750px]"
            src={`https://image.tmdb.org/t/p/${size}/${detail.poster_path}`}
            alt="imagen de pelicula"
          />
          <div className="">
            <div className="flex">
              <div className=" mt-8 lg:w-2/3 lg:px-6 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                  {detail.title}
                </h1>

                <h3 className="mt-6 text-3xl font-medium text-blue-500">
                  {detail.vote_average}
                </h3>
                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-300 ">
                  {detail.overview}
                </p>

                <div className="items-center justify-between mt-6 lg:justify-start">
                  <div className="flex mb-2">
                    <p className="text-gray-600 dark:text-gray-300 pr-2">
                      Estreno:
                    </p>
                    <p className="text-gray-600 dark:text-gray-500 pr-2">
                      {detail.release_date}
                    </p>
                  </div>
                  <div className="flex mb-2">
                    <p className="text-gray-600 dark:text-gray-300 pr-2">
                      Genero:
                    </p>
                    <ul>
                      {detail?.genres?.map((genre) => (
                        <li key={genre.id} className="inline-block mr-2">
                          <p className="text-gray-600 dark:text-gray-500">
                            {genre.name},
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex mb-2">
                    <p className="text-gray-600 dark:text-gray-300 pr-2">
                      Language:
                    </p>

                    <ul>
                      {detail?.spoken_languages?.map((language, index) => (
                        <li key={index} className="inline-block mr-2">
                          <p className="text-gray-600 dark:text-gray-500">
                            {language.english_name},
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:w-1/3 lg:px-6 lg:mt-0 bg-gray-800 mr-6 py-8 rounded-lg flex flex-col items-center text-center">
                <p className="text-gray-600  dark:text-gray-200 ">
                  Companias :
                </p>
                {detail?.production_companies?.map((company) => (
                  <p
                    key={company.id}
                    className="text-gray-600 dark:text-gray-500 pl-4"
                  >
                    {company.name}
                  </p>
                ))}

                <p className=" text-gray-600 dark:text-gray-200 mt-4">
                  Presupuesto :
                </p>
                <p className="text-gray-600 dark:text-gray-500 pl-4">
                  ${detail?.budget}
                </p>

                <p className="text-gray-600 dark:text-gray-200 mt-4">
                  Ganancia :
                </p>
                <p className="text-gray-600 dark:text-gray-500 pl-4">
                  ${detail?.revenue}
                </p>

                <p className="text-gray-600 dark:text-gray-200 mt-4">
                  Duracion :
                </p>
                <p className="text-gray-600 dark:text-gray-500 pl-4">
                  {detail?.runtime} minutos
                </p>
              </div>
            </div>

            <hr className="mt-4 mx-4 border-gray-200 dark:border-gray-600" />
            <h1 className="text-2xl font-light italic text-gray-800 dark:text-white lg:text-4xl lg:w-96 ml-6 mt-8">
              {detail?.tagline}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
