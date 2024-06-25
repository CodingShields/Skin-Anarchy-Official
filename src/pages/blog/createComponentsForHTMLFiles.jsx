import React from "react";
import fs from "fs"; // Assuming you're using Node.js

// Function to dynamically create React components for HTML files in a folder
const createComponentsForHTMLFiles = (folderPath) => {

	



	return (
		<div className='bg-white h-[200px] w-[800px] mx-auto relative hover:h-[500px] transition-all duration-300 ease-in-out group'>
			<iframe srcDoc={folderPath} className='w-full h-full flex z-20' />
		</div>
	);
}

export default createComponentsForHTMLFiles

