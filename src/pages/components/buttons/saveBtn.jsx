import React from "react";
import { useButtonStateActions } from "../../../stateStore/saveBtnStateStore.jsx";
import { useButtonState } from "../../../stateStore/saveBtnStateStore.jsx";

const SaveBtn = ({ onClick }) => {
  const { setButtonState } = useButtonStateActions();
  const { buttonState } = useButtonState();
  const handleOnClick = () => {
    setButtonState(!buttonState);
    onClick();
    console.log("Clicked");
    console.log(buttonState);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-x-2 w-full h-full group">
      <button
        onClick={handleOnClick}
        type="button"
        className="inline-flex w-1/4 items-center gap-x-1.5 rounded-md bg-indigo-500 px-4 py-2 text-lg font-semibold text-white shadow-sm active:translate-y-2 group-hover:text-green-500 duration-400 bg-gradient-to-t transition-all ease-in-out"
      >
        Save
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            "w-12 h-12  group-hover:stroke-green-500 group-hover:text-green-500 transition-all ease-in-out group-hover:duration-400 "
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SaveBtn;
