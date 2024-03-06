import React from "react";
import { TfiEmail } from "react-icons/tfi";

const handleSubmit = () => {};

const Section4 = () => {
  return (
    <div className="flex flex-col  gap-x-2  h-[77vh] w-[95%] mx-auto  sm:flex-row sm:flex-wrap xl:px-20 pt-2 px-2 justify-center bg-transparent">
      <div className=" sm:w-3/6 h-full  w-full ">
        <form
          method="POST"
          action="https://getform.io/f/wbrdvgyb"
          onSubmit={handleSubmit}
          className="bg-gray-200 p-3  shadow-md shadow-slate-400 rounded"
        >
          <h1 className="text-5xl text-center font-bold">Let's Connect.</h1>
          <div className="flex flex-col gap-y-3 p-1 my-2  justify-between ">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              required
              className=" rounded p-2 focus:text-xl focus:outline-blue-400 "
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              className="rounded p-2 focus:text-xl focus:outline-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              required
              className="rounded p-2 focus:text-xl focus:outline-blue-400"
            />
            <textarea
              type="text"
              placeholder="Message"
              name="Textarea"
              required
              rows={5}
              className="rounded p-1 resize-none focus:ring-black focus:text-xl focus:outline-blue-400"
            />
            <button
              type="submit"
              className="p-2 bg-red-500 m-auto text-xl mt-1 text-white font-bold rounded-md"
            >
              let's Talk
            </button>
          </div>
        </form>
      </div>
      <div className=" shadow-md shadow-slate-400 hidden sm:w-2/6 h-auto lg:h-56 lg:w-1/5 p-2 md:my-auto  mx-16 sm:block rounded bg-gray-200  ">
        <div className="flex flex-col justify-between items-center py-2 px-0 gap-y-5 rounded  bg-gray-200">
          <span className=" text-center  text-4xl text-black font-bold  lg:text-3xl">
            <TfiEmail />
          </span>
          <p className="text-center text-sm text-black font-bold xl:text-lg">
            iqraf683@gmail.com
          </p>
          <button className="p-2 bg-red-500 m-auto text-xl text-white font-bold rounded-md lg:text-xl">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
