import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";
import makeup from "../../../assets/images/interviewCategories/makeup.jpg";
import thoughtLeaders from "../../../assets/images/interviewCategories/thoughtLeaders.png";
import journalists from "../../../assets/images/interviewCategories/journalists.png";
import brandFounders from "../../../assets/images/interviewCategories/brandFounders.jpg";
import celebs from "../../../assets/images/interviewCategories/celebs.jpg";
import topDoctor from "../../../assets/images/interviewCategories/topDoctor.jpg";
const InterviewCategoryContainer = () => {
	const [openBar, setOpenBar] = useState(false);
	const handleHoverOver = () => {
		setOpenBar(!openBar);
	};

	const handleMouseLeave = () => {
		setOpenBar(!openBar);
	};

	return (
		<div className='w-full h-fit bg-black pb-24 mt-36 '>
			<div>
				<h1 className='text-white text-4xl font-bold text-center py-12'>Interview Categories</h1>
			</div>

			<div onMouseOver={handleHoverOver} onMouseLeave={handleMouseLeave} className='w-full mx-auto relative'>
				<div className='grid grid-cols-6 w-[80%] mx-auto transition-all duration-500 ease-in-out h-[700px]'>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30  '>TOP DOCTORS</h2>

						<img src={topDoctor} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - DR. MICHELLE HENRY</p>
						</div>
					</div>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30 whitespace-nowrap  '>MAKEUP ARTISTS</h2>

						<img src={makeup} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/3pANYulwWzBc6Ife0vZoZ5?si=KxvboZZyQiW5Wi7KV6Nhew ' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - Mario Dedivanovic</p>
						</div>
					</div>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30'>THOUGHT LEADERS</h2>

						<img src={thoughtLeaders} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/1gWgVM9R3jINVcNgAobCj7?si=2Z0QaaNST_SNO0YNu390dA ' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - Jessica Cruel</p>
						</div>
					</div>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30  '>BRAND FOUNDERS</h2>

						<img src={brandFounders} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/7dZVBWXPC09ssig7cKcbUb?si=ycA9WzxFQAqRA3W86uTajw ' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - Dr. Yannis Alexandrides </p>
						</div>
					</div>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30  '>EDITORS AND JOURNALISTS</h2>

						<img src={journalists} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/1gWgVM9R3jINVcNgAobCj7?si=2Z0QaaNST_SNO0YNu390dA' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - Jessica Cruel</p>
						</div>
					</div>
					<div className='relative group mx-auto '>
						<h2 className='text-white underline text-center z-30  '>CELEBRITIES</h2>
						<img src={celebs} className='w-64 h-96 object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-700 group' />
						<div className='flex flex-col items-center justify-center bg-opacity-80 bg-white absolute top-1/2 ml-6 mt-8 w-[350px] z-50 overflow-visible rounded-md group-hover:animate-fadeIn animate-fadeOut '>
							<div className='inline-flex items-center space-x-4 text-[12px] text-char-900 cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-6 h-6 text-char-900'
								>
									<path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
									/>
								</svg>
								<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' target='_blank' rel='noreferrer'>
									<p className='text-char-900 text-lg '>Play Episode</p>
								</a>
							</div>

							<p className='text-char-900'>FEATURED - Tia Mowry</p>
						</div>
					</div>
				</div>
			</div>
			<h1 className='text-white text-4xl font-bold text-center py-12'>#SkinAnarchy</h1>
		</div>
	);
};

export default InterviewCategoryContainer;
