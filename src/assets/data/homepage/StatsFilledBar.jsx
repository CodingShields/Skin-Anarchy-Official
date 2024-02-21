import React from "react";

const StatsFilledBar = ({ value }) => {
	// Calculate the width of the filled bar based on the value
	const filledWidth = `${value}%`;

	// Define the style for the filled bar
	const filledBarStyle = {
		width: filledWidth,
 // You can adjust the height as needed
		// Set the desired background color
	};

	return (
		<div className='w-full h-auto flex flex-row justify-start items-center group '>
			<div
				className='bg-gray-400 h-1  group-hover:cursor-pointer group-hover:animate-pulse group-hover:bg-violet-500'
				style={filledBarStyle}
			></div>
			<h1 className='text-sm font-medium text-gray-400 truncate uppercase ml-8 group-hover:text-violet-500 group-hover:scale-125 group-hover:animate-pulse'>
				{value}%
			</h1>
		</div>
	);
};

export default StatsFilledBar;
