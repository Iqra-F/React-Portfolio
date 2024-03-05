import React from "react";
import Skills from "./Skills";
import { useState } from "react";
import Data from "./Data";

const Section2 = () => {
  const [skills] = useState(Data);
  return (
    <>
      <div className=" h-[82vh] w-[88%] flex md:flex-row justify-center m-auto gap-5 items-center flex-col overflow-scroll scroll-style shadow-sm shadow-slate-400 ">
        <div className=" flex flex-col items-center gap-4 justify-center p-2 m-1  ">
          <h1 className="text-4xl font-bold inline border-b-4 border-red-500 ">
            So, who am I ?
          </h1>
          <p className=" text-xl text-center p-2 ">
            Lorem . Sed sit cupiditate autem, veritatis accusamus, impedit,rem .
            Sed sit cupiditate autem, veritatis accusamus, impedi consequatur
            libero quis aat pariatur natus. it, consequatur libero quis aat
            pariatur nat
          </p>
          <a className="">
            <button className="rounded  bg-red-500 font-bold  text-white p-2 md:font-bold  hover:scale-105 hover:bg-gray-700  duration-500 md:text-xl">
              Contact Me
            </button>
          </a>
        </div>

        <div className="w-full  p-3 my-auto">
          <div className="">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="grid grid-cols-2  gap-3 ">
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
