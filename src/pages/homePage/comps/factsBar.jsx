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
		<div className='flex flex-col h-fit w-full items-center content-center justify-center grid-cols-3 space-y-20 bg-black pb-40'>
			<div className='w-full h-fit py-20'>
				<h1 className=' lg:text-2xl xxl:text-4xl font-bold text-center text-white mt-20 mb-6'>
					“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND FACTS, NOT TRENDS”
				</h1>
				<h1 className=' text-2xl font-bold text-center text-white mt-20 mb-6'>– DR. EKTA YADAV MD MBA MS</h1>
			</div>

			<div className='flex flex-row content-start justify-center w-full h-full py-12  lg:justify-evenly '>
				{factsBarData.map((item) => (
					<div key={item.id} className='flex flex-col items-center lg:w-96  h-2/3 '>
						<img className='w-20 lg:h-20 xxl:h-24 pt-0 ' src={item.icon} />
						<h3 className='mt-2 lg:text-xl xxl:text-2xl font-bold text-center text-gray-600 hover:text-white transition-all ease-in-out duration-200'>{item.title}</h3>
						<p className='mt-2 lg:text-lg xxl:text-xl text-center text-gray-400'>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default FactsBar;
