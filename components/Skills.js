import React from "react";

const Skills = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img src={skill.image} className="w-10 m-auto" alt="" />
            <p className="my-4 text-xl text-center">{skill.Name}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default Skills;
