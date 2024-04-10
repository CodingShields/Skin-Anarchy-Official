import React from "react";

const StatsFilledBar = ({ value }) => {
	// Calculate the width of the filled bar based on the value
	const filledWidth = `${value}%`;


	const begin = 0;
	
	

	// Define the style for the filled bar
	const filledBarStyle = {
		width: filledWidth,
 // You can adjust the height as needed
		// Set the desired background color
	};

	return (
		<div className='w-full h-auto flex flex-row justify-start items-center group '>
			<div
				className='bg-black h-[2px] animate-pulse'
				style={filledBarStyle}
			></div>
			<h1 className='text-[16px] font-glacial text-gray-400 truncate uppercase ml-8 animate-pulse'>
				{value}%
			</h1>
		</div>
	);
};

export default StatsFilledBar;
