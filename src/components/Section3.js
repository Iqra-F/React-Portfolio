// import React from 'react'
// import {motion} from 'framer-motion'

// const Section3 = () => {
//   return (
//     <div className='h-[77vh] bg-primary/30 py-36 flex items-center w-full '>
//        <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-x-8">
//           <div className="text-center flex  xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
//             <motion.h2
//             variants={fadeIn('up',0.2)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='h-2 xl:mt-8'
//             >
//               My Projects <span className="text-accent">.</span>

//             </motion.h2>
//             <motion.p
//              variants={fadeIn('up',0.4)}
//              initial='hidden'
//              animate='show'
//              exit='hidden'
//              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
//             >
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illum magni dolore tenetur harum debitis commodi incidunt qui aperiam non esse culpa repudiandae minus, dignissimos quo, facilis vero, doloremque nemo.
//             </motion.p>
//           </div>
//            {/* slider */}
//            <motion.div
//             variants={fadeIn('down',0.6)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='w-full xl:max-w-[65%]'
//            >

//            </motion.div>
//         </div>
//        </div>

//     </div>
//   )
// }

// export default Section3

import React from "react";
import bg from "../images/bg.avif";

const Section3 = () => {
  return (
    <div className="h-[77vh]  w-[88%] mx-auto md:h-screen  shadow-sm shadow-slate-400 text-gray-400 bg-transparent ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <h2 className="text-4xl font-bold border-b-4  inline text-black border-red-500">
            My Projects
          </h2>
          <p className="py-6 text-black">
            Here are some projects I worked on during my learning phase of
            front-end development.
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 overflow-y-scroll  md:grid-cols-3 gap-4 pb-2 scroll-style">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2   bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md   flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md   flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2   bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2   bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="shadow-md shadow-slate-400 group container rounded-md   flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className=" opacity-5 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  tracking-wider">
                React.js Application
              </span>
              <div className=" pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg p-3 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
