import React from "react";
import { SerchBar } from "./SerchBar";
import movieLogo from "../assets/images/movie_logo.jpg"

export const NavBar = () => {
  return (
    <div className=" bg-blue-400">

      <div className="flex justify-center items-center bg-blue-200  gap-4">
        <img className="h-10" src={movieLogo} alt="" />
        <p className="cursor-pointer hover:text-cyan-600">Peliculas</p>
        <p className="cursor-pointer hover:text-cyan-600">Programa de television</p>
        <p className="cursor-pointer hover:text-cyan-600">Personas</p>
      </div>

      {/* <div>
        <SerchBar />
      </div> */}
    </div>
  );
};
