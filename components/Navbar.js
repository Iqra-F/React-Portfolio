import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-between bottom-0 items-center gap-4  sm:bg-gray-300 sm:rounded-3xl w-screen h-[8vh] sm:w-[40px] sm:h-[40vh] sm:flex-col absolute sm:top-[30%]  sm:right-0 p-4">
      <NavLink
        to="/Section1"
        className={(e) => {
          return e.isActive ? "text-black" : "text-gray-500";
        }}
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/Section2"
        className={(e) => {
          return e.isActive ? "text-black" : "text-gray-500";
        }}
      >
        <FaUser />
      </NavLink>
      <NavLink
        to="/Section3"
        className={(e) => {
          return e.isActive ? "text-gray-950" : "text-gray-500";
        }}
      >
        <GrProjects />
      </NavLink>
      <NavLink
        to="/Section4"
        className={(e) => {
          return e.isActive ? "text-gray-950" : "text-gray-500";
        }}
      >
        <TfiEmail />
      </NavLink>
    </div>
  );
};

export default Navbar;
