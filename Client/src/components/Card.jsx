import React from "react";

export const Card = ({ name, fecha, puntaje, poster }) => {
  return (
    <div className="h-auto w-[150px] bg-fuchsia-200 rounded-t-2xl ">
      <div >
        <img className="rounded-t-2xl" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
      </div>

      <div className="flex flex-col items-center pt-2">
        <p className="">{name}</p>
        <p>{fecha}</p>
        <p>{puntaje}</p>
      </div>
    </div>
  );
};
