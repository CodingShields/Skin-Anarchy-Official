import { BarsArrowDownIcon, ChevronDoubleRightIcon, BookmarkIcon, BookmarkSlashIcon, StarIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
const EpisodeCardButton = (props) => {
	const { children, onClick, data, image, icon, open, index } = props;
	console.log(open);
	return (
		<div key={index} onClick={onClick} className='w-fit h-full flex flex-col justify-center items-center space-y-6 px-2 text-white '>
			<ChevronDoubleRightIcon
				className={`w-8 h-8 ${!open ? "-rotate-180 " : "text-red-200"}  hover:text-green-500   transition-all hover:scale-150 duration-500 ease-in-out cursor-pointer`}
			/>
			<BookmarkIcon
				className={`w-8 h-8  transition-all duration-500  hover:fill-blue-200 hover:scale-150 cursor-pointer ease-in-out ${open ? "visible stroke-blue-600" : "hidden"}`}
			/>
			<StarIcon
				className={`w-8 h-8 transition-all duration-500  hover:fill-yellow-100 hover:scale-150 cursor-pointer ease-in-out ${open ? "visible text-yellow-400" : "hidden"}`}
			/>
		</div>
	);
};

export default EpisodeCardButton;
