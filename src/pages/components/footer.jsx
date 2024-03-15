import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import footerDataArray from "../../assets/data/footer/footerDataArray";
import socialNav from "../../assets/data/socialNav";
import codingShieldsLogo from "../../assets/images/codingShieldsLogo.png";

const Footer = () => {
	return (
		<div className='w-full h-fit bg-black'>
			{/* <div className='inline-flex justify-center items-center space-x-2'>
					<h1 className=' transition-all duration-500 ml-4 group-hover:text-white text-start text-gray-600 text-sm whitespace-nowrap font-glacialRegular '>
						Powered and Designed by: CodingShields
					</h1>
					<img src={codingShieldsLogo} className='w-8 h-8 inline-block grayscale-1' />
				</div> */}
			<div className='w-1/2 mx-auto '>
				<nav className='grid grid-cols-3 gap-4'>
					{footerDataArray.navBar.map((item, id) => (
							<a key={id} href={item.href} className='text-[12px]  h-fit text-gray-400 w-14px hover:cursor-pointer text-center hover:scale-150 hover:text-gold-500 transition-all duration-300 ease-in-out'>
								{item.name}
							</a>
					))}
				</nav>
				<div className='w-full flex justify-center mt-8 space-x-14 py-4'>
					{socialNav.map((item, id) => (
						<div key={id} className='group'>
							<a key={item.name} href={item.link} className='hover:cursor-pointer' target='_blank'>
								{/* <span className='sr-only'>{item.name}</span> */}
								<img
									className='h-4 hover:scale-150 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 '
									src={item.icon}
								/>
							</a>
						</div>
					))}
				</div>
				<p className='mt-8 pb-4 text-[12px] font-openSans tracking-widest	 text-center text-gray-500'>
					&copy; 2020 SkinAnarchy, Inc. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
