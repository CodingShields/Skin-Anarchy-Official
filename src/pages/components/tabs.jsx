import { useState } from "react";

const Tabs = () => {
  const tabsList = ["About", "Projects", "Contact", "Resume", "Education"];

  // const activeButton =

  return (
    <div className="bg-black rounded-3xl mb-8">
      <div className="w-fit rounded-2xl py-2 px-10 shadow-2xl ease-out duration-700  hover:ease-in hover:duration-700 hover:shadow-green-600  hover:ring-4 hover:ring-violet-400">
        {tabsList.map((item, index) => {
          return (
            <button
              key={index}
              className="button ease-out duration-200 mx-8 text-gray-400 hover:animate-pulse hover:text-green-500 hover:ease-in hover:duration-400 hover:-translate-y-1 hover:delay-100"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
