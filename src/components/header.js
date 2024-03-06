import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const header = () => {
  return (
    <div className="h-[11vh] w-full flex sticky flex-col sm:flex-row items-center justify-center  sm:gap-x-60  gap-y-5 bg-transparent">
      <h3 className="text-gray-400 font-bold text-4xl flex gap-2  ">
        Iqra<h3 className="text-red-500 font-bold text-4xl">Fatima.</h3>
      </h3>
      {/* links */}
      <div className="flex items-center gap-4  text-gray-500">
        <a href="https://www.linkedin.com/in/iqra-fatima-290903286/" className="">
          <FaLinkedin />
        </a>
        <a
          href=""
          className=""
        >
          <FaFileAlt />
        </a>
      </div>
    </div>
  );
};

export default header;
