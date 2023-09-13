import React from "react";
import imgPirata from "../assets/images/pirates-of-the-caribbean.jpg";

export const SerchBar = () => {
  return (
    <div className="relative  w-2/3 mx-auto h-[300px] bg-gray-900 rounded-b-lg ">
      <img className="w-full h-full opacity-25 rounded-b-2xl object-cover" src={imgPirata} alt="piratas del caribe" />
     
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-2xl">
          Bienvenidos. Millones de películas, programas de televisión y personas por descubrir. Explora ahora.
        </h1>
        <input
          className="mt-4 p-2 w-[400px] rounded-full border border-gray-200 shadow-lg"
          placeholder="Busca una película o programa de TV"
          type="text"
        />
      </div>
    </div>
  );
};
