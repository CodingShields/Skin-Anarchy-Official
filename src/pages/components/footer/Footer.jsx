import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import footerDataArray from "../../../assets/data/footer/footerDataArray";
import socialNav from "../../../assets/data/socialNav";
// import codingShieldsLogo from "../../assets/images/codingShieldsLogo.png";

import arrow from "../../../assets/icons/arrow.svg";

const Footer = () => {
	return (
		<div className='w-full  h-fit  bg-black relative pt-4'>
			<div className='w-full h-full bg-black flex flex-row justify-evenly  '>
				<div className='w-3/4 h-fit '>
					<div className=' w-1/2 mx-auto'>
						<h1 className='text-white font-normal font-montserrat text-3xl py-4 uppercase'>NewsLetter</h1>
						<p className='text-white font-montserrat text-lg font-thin '>
							Be the first to receive updates about new episodes, ground breaking science, and more.
						</p>
						<div className='w-[90%] inline-flex justify-end items-center py-8 text-left'>
							<input
								className='w-full h-12  text-white bg-black/20 rounded-lg py-4 placeholder:text-left z-20'
								placeholder='Email Address'
								type='text'
							/>
							<img src={arrow} className='w-10 h-10  absolute mr-4 z-10' />
						</div>
					</div>
					<div className='flex flex-row justify-evenly items-center w-1/2 mx-auto space-x-12'>
						{socialNav.map((item, id) => (
							<div key={id} className='w-[100px]'>
								<a key={item.name} href={item.link} className='hover:cursor-pointer' target='_blank' rel='noreferrer'>
									{/* <span className='sr-only'>{item.name}</span> */}
									<img
										className='h-8 w-8 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 hover:scale-125 '
										src={item.icon}
									/>
								</a>
							</div>
						))}
					</div>
					<div className='w-1/2 mx-auto block text-white mt-4 bg-black h-fit'>
						<h1 className=' text-6xl tracking-widest font-montserrat py-2 whitespace-nowrap font-light uppercase'>Skin Anarchy</h1>
						<p className='font-thin font-montserrat text-lg text-center  py-2 whitespace-nowrap'>Copyright © 2022 Skin Anarchy. All rights reserved.</p>
					</div>
				</div>
				<div className='flex flex-row space-x-8  text-white w-3/4  h-fit gap-4'>
					<div className='w-fit'>
						<h1 className='font-normal text-3xl font-montserrat py-4 uppercase -indent-2'>Episodes</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid '>
							{" "}
							<NavLink
								to='podcast/current-podcast-episode'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Current Episode
							</NavLink>
							<NavLink
								to='podcast/top-make-up-artists-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Make Up Artists
							</NavLink>
							<NavLink
								to='podcast/top-doctors-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Doctors
							</NavLink>
							<NavLink
								to='podcast/brand-founders-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Brand Founders
							</NavLink>
							<NavLink
								to='podcast/thought-leaders-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Thought Leaders
							</NavLink>
							<NavLink
								to='podcast/editors-and-journalists-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Editors and Journalists
							</NavLink>
							<NavLink
								to='podcast/celebrity-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Celebrities
							</NavLink>
						</div>
					</div>
					<div className='w-fit'>
						<h1 className='font-normal text-3xl font-montserrat py-4 uppercase -indent-2'>Blog</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid '>
							<NavLink
								to='skin-anarchy-blog/beauty-culture'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Beauty Culture
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/fragrance'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Fragrance
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/podcast-summaries'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Podcast Summaries
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/science-of-skin'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Science of Skin
							</NavLink>
						</div>
					</div>
					<div className='w-fit'>
						<h1 className='font-normal text-3xl font-montserrat py-4 uppercase -indent-2'>Awards</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid '>
							<NavLink
								to='awards/science-of-skin-awards'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Science of Skin Awards
							</NavLink>
							<NavLink
								to='awards/top-picks'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Picks
							</NavLink>
							<NavLink
								to='awards/master-class'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Master Class
							</NavLink>
						</div>
					</div>
					<div className='w-fit'>
						<h1 className='font-normal text-3xl font-montserrat py-4 uppercase -indent-2'>Connect</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid '>
							<p>pr@skincareanarchypodcast.com</p>
							<p>Get Featured On Our Show</p>
							<p>Become A Sponsor</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
