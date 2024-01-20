import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import footerDataArray from "../../assets/data/footer/footerDataArray";
import socialNav from "../../assets/data/socialNav";
import codingShieldsLogo from "../../assets/images/codingShieldsLogo.png";

const Footer = () => {
	return (
		<div className=' flex flex-row h-fit w-full bottom-0 bg-black bg-opacity-95 justify-center pt-4 group'>
			<div className='flex flex-row w-full justify-center items-center space-y-2 hover:scale-125 hover:-translate-y-50 transition-all duration-700 hover:animate-pulse hover:translate-x-50 group hover:cursor-pointer '>
				<div className='flex flex-col items-start justify-center w-full h-full'>
					<h1 className=' transition-all duration-500 ml-4 group-hover:scale-105 group-hover:text-white text-start text-gray-600 text-sm font-bold '>
						This Website was designed and powered by: CodingShields
					</h1>
				</div>
			</div>
			<div className='w-full px-0 py-2 h-fit'>
				<nav className='-mb-6 columns-2 flex space-x-12' aria-label='Footer'>
					{footerDataArray.navBar.map((item, id) => (
						<div key={id} className='w-fit '>
							<a href={item.href} className='text-sm  h-fit text-gray-400 whitespace-nowrap hover:cursor-pointer'>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className='w-full flex justify-center mt-8 space-x-14 py-4'>
					{socialNav.map((item, id) => (
						<div key={id} className='group'>
							<a key={item.name} href={item.link} target='_parent'>
								{/* <span className='sr-only'>{item.name}</span> */}
								<img
									className='h-8 hover:scale-150 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 '
									src={item.icon}
								/>
							</a>
						</div>
					))}
				</div>
				<p className='mt-8 pb-4 text-sm leading-5 text-center text-gray-500'>&copy; 2020 SkinAnarchy, Inc. All rights reserved.</p>
			</div>
			<div className='flex flex-row items-center justify-center w-full '></div>
		</div>
	);
};

export default Footer;
