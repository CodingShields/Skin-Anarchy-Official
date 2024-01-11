import React from "react";

const FilledBar = ({ value }) => {
	// Calculate the width of the filled bar based on the value
	const filledWidth = `${value}%`;

	// Define the style for the filled bar
	const filledBarStyle = {
		width: filledWidth,
 // You can adjust the height as needed
		// Set the desired background color
	};

	return (
		<div className='w-full h-auto flex flex-row justify-start items-center '>
			<div className='bg-gray-400 h-1 hover:bg-white hover:cursor-pointer hover:animate-pulse' style={filledBarStyle}></div>
			<h1 className='text-sm font-medium text-gray-400 truncate uppercase ml-8 over:animate-pulse'>{value}%</h1>
		</div>
	);
};

export default FilledBar;
