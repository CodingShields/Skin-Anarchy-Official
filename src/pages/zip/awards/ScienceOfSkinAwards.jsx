import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import skinanarchyaward4 from "../../assets/video/skinanarchyaward4.mp4";
import scienceOfSkinAwards from "../../assets/images/scienceOfSkinAwards.png";
const ScienceOfSkinAwards = () => {
	return (
		<div className='h-full w-full bg-black'>
			<div className='h-full w-full bg-transparent flex flex-col justify-center  '>
				<video className='w-full h-full bg-black z-10' autoPlay muted loop id='video'>
					<source src={skinanarchyaward4} type='video/mp4' />
				</video>
				<img src={scienceOfSkinAwards} className=' absolute w-2/6 left-60 top-40 mx-60 z-10' />
				<div className='absolute w-1/4 h-2/5 bg-black  bg-opacity-40 rounded-xl right-80 top-60 z-10'>
					<p className='text-white text-2xl font-bold text-center pt-10'>2023 Winner</p>
				</div>
				<div className='w-full h-full bg-black bg-opacity-95 z-10'>
					<p className='text-white text-2xl font-bold text-center pt-10'>Past Winners</p>
					<div className='flex flex-row h-full  bg-black justify-center space-x-10 pt-10 '>
						<div className='w-1/4 h-full'>
							<p className='text-white text-2xl font-bold text-center pt-10'>2022 Winner</p>
							<div></div>
						</div>
						<div className='w-1/4 h-full '>
							<p className='text-white text-2xl font-bold text-center pt-10'>2021 Winner</p>
							<div className='h-96'></div>
						</div>
						<div className='w-1/4 h-full '>
							<p className='text-white text-2xl font-bold text-center pt-10'>2020 Winner</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScienceOfSkinAwards;
