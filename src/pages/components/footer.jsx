import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.png";
import youtubeIcon from "../../assets/icons/youtubeIcon.svg";

const Footer = () => {
	const navigation = {
		main: [
			{ name: "Home", href: "#" },
			{ name: "About", href: "#" },
			{ name: "Connect", href: "#" },
			{ name: "Podcast", href: "#" },
			{ name: "Top Picks", href: "#" },
			{ name: "Blog", href: "#" },
			{ name: "Science of Skin Awards", href: "#" },
			{name: "Privacy Policy", href: "#"},
		],
		social: [
			{
				name: "Facebook",
				href: "#",
				icon: facebookIcon,
			},
			{
				name: "Instagram",
				href: "#",
				icon: instagramIcon,
			},
			{
				name: "Twitter",
				href: "#",
				icon: twitterIcon,
			},
			{
				name: "YouTube",
				href: "#",
				icon:youtubeIcon,
			},
		],
	};

	return (
		<div className=' flex h-fit bottom-0 bg-black bg-opacity-95 content-center justify-center w-full pt-4 '>
			<div className='max-w-full px-0 py-0  h-fit'>
				<nav className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12' aria-label='Footer'>
					{navigation.main.map((item) => (
						<div key={item.name} className='pt-4 pb-6'>
							<a href={item.href} className='text-sm leading-6 text-gray-400 hover:text-white'>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className='flex justify-center mt-8 space-x-14'>
					{navigation.social.map((item) => (
						<a key={item.name} href={item.href} className='grayscale ease-in-out hover:grayscale-0 hover:-translate-y-1 hover:duration-300'>
							{/* <span className='sr-only'>{item.name}</span> */}
							<img className="h-8 " src={item.icon} />
						</a>
					))}
				</div>
				<p className='mt-8 pb-4 text-sm leading-5 text-center text-white'>
					&copy; 2020 SkinAnarchy, Inc. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
