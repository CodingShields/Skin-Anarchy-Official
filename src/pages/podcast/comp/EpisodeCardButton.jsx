import { BarsArrowDownIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import {useState, useEffect} from 'react'
const EpisodeCardButton = (props) => {
	const { children, onClick, data, image, icon, open, index } = props;

	return (
		<div
			key={index}
			onClick={onClick}
			className='w-fit h-full flex flex-col justify-center items-center   text-white hover:bg-white group transition-all duration-700 ease-in-out cursor-pointer'
		>
			<ChevronDoubleRightIcon
				className={`w-8 h-8 ${!open ? "rotate-180 " : "-rotate-180 "} group-hover:text-black transition-all duration-700 ease-in-out`}
			/>
		</div>
	);
};

export default EpisodeCardButton;
