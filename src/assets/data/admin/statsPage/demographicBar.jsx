import React from "react";

const FilledBar = ({ value }) => {
  // Calculate the width of the filled bar based on the value
  const filledWidth = `${value}%`;

  // Define the style for the filled bar
  const filledBarStyle = {
    width: filledWidth,
    height: "2px", // You can adjust the height as needed
 // Set the desired background color
  };

  return (
    <div className="w-full h-fit flex flex-row justify-start items-center">
      <div className="bg-gray-400" style={filledBarStyle}></div>
          <h1
          className="text-sm font-medium text-gray-400 truncate uppercase ml-8"
          >{value}%</h1>
    </div>
  );
};

export default FilledBar;
