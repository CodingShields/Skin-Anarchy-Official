import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import footerDataArray from "../../assets/data/footer/footerDataArray";
import socialNav from "../../assets/data/socialNav";
import codingShieldsLogo from "../../assets/images/codingShieldsLogo.png";

import arrow from "../../assets/icons/arrow.svg";

const Footer = () => {
	return (
		<div className='w-full bg-black flex flex-row justify-evenly pt-36 pb-12'>
			<div className='w-3/4 h-[500px] '>
				<div className=' w-1/2 mx-auto'>
					<h1 className='text-white font-semibold font-montserrat text-2xl py-4 '>News Letter</h1>
					<p className='text-white font-montserrat text-lg'>Be the first to recieve updates about new episodes, ground breaking science, and more.</p>
					<div className='w-[90%] inline-flex justify-end items-center py-8 text-left'>
						<input
							className='w-full h-12  text-white bg-black/20 rounded-lg py-4 placeholder:text-left z-20'
							placeholder='Email Address'
							type='text'
						/>
						<img src={arrow} className='w-10 h-10  absolute mr-4 z-10' />
					</div>
				</div>
				<div className='grid grid-cols-3 justify-center items-center w-1/2 mx-auto '>
					{socialNav.map((item, id) => (
						<div key={id} className='group'>
							<a key={item.name} href={item.link} className='hover:cursor-pointer' target='_blank' rel='noreferrer'>
								{/* <span className='sr-only'>{item.name}</span> */}
								<img
									className='h-12 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 '
									src={item.icon}
								/>
							</a>
						</div>
					))}
				</div>
				<div className='w-1/2 mx-auto grid grid-cols-1 text-white mt-4'>
					<h1 className='font-thin text-6xl tracking-widest font-montserrat py-2'>Skin Anarchy</h1>
					<p className='font-thin font-montserrat text-xl  py-2 whitespace-nowrap'>Copyright © 2022 Skin Anarchy. All rights reserved.</p>
				</div>
			</div>
			<div className='flex flex-row justify-center items-start text-white w-full   h-fit space-x-18 my-auto'>
				<div>
					<h1 className='font-semibold text-3xl font-montserrat py-4'>Episodes</h1>
					<div className='font-thin font-montserrat font-2xl space-y-4'>
						{" "}
						<p>Current Episode</p>
						<p>Top Make Up Artists</p>
						<p>Top Doctors</p>
						<p>Brand Founders</p>
						<p>Thought Leaders</p>
						<p>Editors and Journalists</p>
						<p>Celebrities</p>
					</div>
				</div>
				<div>
					<h1 className='font-semibold text-3xl font-montserrat  py-4'>Blog</h1>
					<div className='font-thin font-montserrat font-2xl space-y-4'>
						<p>Beauty Culture</p>
						<p>Fragrance</p>
						<p>Podcast Summaries</p>
						<p>Science of Skin</p>
					</div>
				</div>
				<div>
					<h1 className='font-semibold text-3xl font-montserrat  py-4'>Awards</h1>
					<div className='font-thin font-montserrat font-2xl space-y-4'>
						<p>Science of Skin Awards</p>
						<p>Top Picks</p>
					</div>
				</div>
				<div>
					<h1 className='font-semibold text-3xl font-montserrat  py-4'>Connect</h1>
					<div className='font-thin font-montserrat font-2xl space-y-4'>
						<p>SkinAnarchy@gmail.com</p>
						<p>Get Featured On Our Show</p>
						<p>Become A Sponsor</p>
						<p>Join Our Team</p>
					</div>
				</div>
			</div>
			{/* <p className='mt-8 pb-4 text-[12px] font-openSans tracking-widest	 text-center text-gray-500'>
				&copy; 2020 SkinAnarchy, Inc. All rights reserved.
			</p> */}
		</div>
	);
};

export default Footer;
