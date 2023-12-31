import { useState } from "react";
import { nanoid } from "nanoid";
import earthIcon from "../../../assets/icons/earthIcon.svg";
import flaskIcon from "../../../assets/icons/flaskIcon.svg"
import trophyIcon from "../../../assets/icons/trophyIcon.svg";

const FactsBar = () => {
	const barData = [
		{
			id: nanoid(),
			title: "FACTS ONLY",
			text: "Professional interviews focused on the science and facts around skin health and wellness, without the fluff of marketing.",
			icon: flaskIcon,
		},
		{
			id: nanoid(),
			title: "GLOBALLY RECOGNIZED",
			text: "Skincare Anarchy is streamed in over 100 countries and has been ranked in the top 50 Beauty/Fashion Podcasts in the largest geographical regions representing beauty consumers.",
			icon: earthIcon,
		},
		{
			id: nanoid(),
			title: "INDUSTRY ACCLAIMED",
			text: "We are committed to bringing you the latest scientific research and information from the industry’s leading experts.",
			icon: trophyIcon,
		},
	];

	return (
		<div className='flex h-fit w-full items-center content-center justify-center grid-cols-3 py-10 bg-black '>
			{barData.map((item) => (
				<div key={item.id} className='flex flex-row content-start justify-center w-full h-full py-12'>
					<div className='flex flex-col items-center w-2/3 h-2/3'>
						<img className='w-20 h-20 pt-0' src={item.icon} />
						<h3 className='mt-2 text-2xl font-bold text-center text-gray-600 hover:text-white'>{item.title}</h3>
						<p className='mt-2 text-xl text-center text-gray-400'>{item.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};
export default FactsBar;
