import React from "react";
import { useButtonStateActions } from "../../../stateStore/saveBtnStateStore.jsx";
import { useButtonState } from "../../../stateStore/saveBtnStateStore.jsx";
import CheckCircleGreen from "../../../assets/icons/checkCircleGreen.svg";

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
    <div className="flex flex-row justify-center items-center gap-x-2 w-full h-24  ">
      <button
        disabled={buttonState ? true : false}
        onClick={handleOnClick}
        type="button"
        className="inline-flex w-44 h-fit items-center justify-center gap-x-1.5 rounded-md shadow-lg shadow-black bg-indigo-500 px-4 py-2 text-lg font-semibold hover:border-4 text-black  active:translate-y-2  transition-all hover:text-white hover:border-white ease-in-out duration-400"
      >
        Save
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={!buttonState ? "w-12 h-12 " : " w-12 h-12 stroke-green-500"}
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
