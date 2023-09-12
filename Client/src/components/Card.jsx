import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ id, name, fecha, puntaje, poster }) => {
  return (
    <div className="h-[400px] w-[180px] mt-6 mb-8 shadow-xl rounded-2xl hover:scale-110">
      <Link to={`/detail/${id}`} >
        <img className="rounded-t-2xl object-cover cursor-pointer " src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
      </Link>

      <div className="flex flex-col items-center pt-2">
      <Link to={`/detail/${id}`} >
        <p className="font-bold text-center hover:text-blue-700 cursor-pointer">{name}</p>
      </Link>
        <p>{fecha}</p>
        <p>{puntaje}</p>
      </div>
    </div>
  );
};
