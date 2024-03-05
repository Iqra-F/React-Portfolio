import React, { useState, useEffect } from "react";
import Bg from "../images/bg.avif";

const Section1 = () => {
  const items = ["Responsive Web Designer", "Front-end Web Developer"];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState("");

  useEffect(() => {
    let typingTimeout;

    const typeNextItem = () => {
      // Clear previous typing timeout
      clearTimeout(typingTimeout);

      // Calculate next item index
      const nextIndex = (currentItemIndex + 1) % items.length;

      // Start typing next item after 3 seconds
      typingTimeout = setTimeout(() => {
        setCurrentItemIndex(nextIndex);
        setCurrentItem("");
      }, 2000);
    };

    const typingInterval = setInterval(() => {
      setCurrentItem((prevItem) => {
        // If currentItem fully typed, move to the next item
        if (prevItem === items[currentItemIndex]) {
          typeNextItem();
          clearInterval(typingInterval);
          return prevItem;
        }

        // Otherwise, continue typing
        return items[currentItemIndex].substring(0, prevItem.length + 1);
      });
    }, 100); // Adjust typing speed here

    // Cleanup function
    return () => {
      clearInterval(typingInterval);
      clearTimeout(typingTimeout);
    };
  }, [currentItem, currentItemIndex, items]);
  return (
    <>
      <div className="sm:flex-row sm:justify-center flex flex-col sm:items-center w-[88%] h-[77vh] shadow-sm shadow-slate-400 m-auto p-3 bg-transparent gap-2">
        <div className="flex flex-col  justify-center gap-5 w-[88%] mt-10  mx-auto items-center ">
          <h1 className="text-black-100 text-center font-extrabold  text-2xl md:text-3xl ">
            Transforming Ideas Into{" "}
            <span className="text-red-500 font-extrabold">Digital Reality</span>
          </h1>

          <p className="text-slate-700 font-bold  text-start sm:mx-1 w-[30vw]  lg:text-2xl ">
            Hi there! I'm Iqra Fatima, a{" "}
            <span className="typed">
              {currentItem}
              <span className="">|</span>
            </span>
          </p>
          <div className="flex gap-2">
            <a href="" className="">
              <button className="rounded bg-black mt-10 font-bold text-white p-2 sm:p-2 md:font-bold md:text-xl">
                Download CV
              </button>
            </a>
            <a href="/Section4" className="">
              <button className="rounded bg-red-500 mt-10 font-bold text-white p-2 sm:p-2 md:font-bold md:text-xl">
                Let's Talk
              </button>
            </a>
          </div>
        </div>

        <div className=" flex  justify-center items-center my-auto  ">
          <img src={Bg} alt="" className="rounded-full " />
        </div>
      </div>
    </>
  );
};

export default Section1;
