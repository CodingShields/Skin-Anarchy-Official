import { useState, useEffect } from "react";
import Tabs from "./tabs";
import doubleChevUp from "../../assets/icons/doubleChevUp.svg";
import fadedCircle from "../../assets/images/fadedCircle.svg";

const SectionOne = () => {
  const [tabsActive, setTabsActive] = useState(false);

  const handleTabsActive = () => {
    setTabsActive(!tabsActive);
  };
  return (
    <div
      className={`w-full h-full justify-center items-center transition-opacity flex flex-col delay-900
    ${
      tabsActive
        ? "bg-gradient-to-r bg-clip  bg-transparentnimate-backgroundColor ease-in duration-700 opacity-100"
        : "bg-white transition-colors ease-in delay-500 duration-700 opacity-100"
    }
    
    `}
    >
      <div className="flex flex-col h-full justify-center items-center content-center text-center">
        <p className="text-6xl py-3">Welcome to my portfolio!</p>
        <div
          className={` transition-opacity flex flex-col delay-750
      ${
        tabsActive
          ? "ease-in duration-1000 opacity-100"
          : "ease-out duration-1000 opacity-0 "
      }`}
        >
          <p className=" text-4xl animate-pulse py-4">I am ...</p>
          <div
            className="flex flex-row justify-center items-center content-center font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-800 via-violet-500 to-indigo-200
            animate-text
            py-8  "
          >
            <p className="text-4xl ">Mikey Shields</p>
          </div>
          <div className=" relative h-fit w-3/4 flex items-center justify-center">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <p className="h-full text-4xl ">
            and I love to build cool things on the web.
          </p>
        </div>
      </div>
      <div
        className={` flex flex-row transition-opacity 
      ${
        tabsActive
          ? "ease-in duration-700 opacity-100"
          : "ease-out duration-700 opacity-0 "
      }`}
      >
        <Tabs />
      </div>

      <div onClick={handleTabsActive}>
        <svg
          className="w-auto h-10 animate-pulse mb-4 mt-2 hover:cursor-pointer hover:stroke-green-500 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <div></div>
      </div>
    </div>
  );
};

export default SectionOne;
