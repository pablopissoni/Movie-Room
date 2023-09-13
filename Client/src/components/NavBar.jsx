import React from "react";
import { SerchBar } from "./SerchBar";
import movieLogo from "../assets/images/movie_logo.jpg"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className=" bg-blue-400">

      <div className="flex justify-center items-center bg-blue-200 dark:bg-gray-900 text-gray-300  gap-4">
        <img className="h-10" src={movieLogo} alt="" />
        <Link to={"/"} className="cursor-pointer hover:text-cyan-600">Home</Link>
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
