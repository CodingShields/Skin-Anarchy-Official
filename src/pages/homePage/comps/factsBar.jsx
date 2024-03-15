import { useState } from "react";
import { nanoid } from "nanoid";
import earthIcon from "../../../assets/icons/earthIcon.svg";
import flaskIcon from "../../../assets/icons/flaskIcon.svg";
import trophyIcon from "../../../assets/icons/trophyIcon.svg";

const FactsBar = () => {
	const factsBarData = [
		{
			id: 0,
			title: "FACTS ONLY",
			text: "Professional interviews focused on the science and facts around skin health and wellness, without the fluff of marketing.",
			icon: flaskIcon,
		},
		{
			id: 1,
			title: "GLOBALLY RECOGNIZED",
			text: "Skincare Anarchy is streamed in over 100 countries and has been ranked in the top 50 Beauty/Fashion Podcasts in the largest geographical regions representing beauty consumers.",
			icon: earthIcon,
		},
		{
			id: 2,
			title: "INDUSTRY ACCLAIMED",
			text: "We are committed to bringing you the latest scientific research and information from the industry’s leading experts.",
			icon: trophyIcon,
		},
	];

	return (
		<div className='flex flex-row justify-center w-full h-fit py-12  lg:justify-evenly mt-36 bg-black'>
			{factsBarData.map((item) => (
				<div key={item.id} className='flex flex-col items-center lg:w-96  h-fit'>
					<img className='w-20 lg:h-18 xxl:h-24 pt-0 ' src={item.icon} />
					<h3 className='mt-2 lg:text-xl xxl:text-2xl text-center text-white hover:text-white transition-all ease-in-out duration-200 font-playfair font-thin	'>
						{item.title}
					</h3>
					<p className='mt-2 lg:text-lg xxl:text-xl text-center text-gray-400 font-glacialRegular font-100'>{item.text}</p>
				</div>
			))}
		</div>
	);
};
export default FactsBar;
