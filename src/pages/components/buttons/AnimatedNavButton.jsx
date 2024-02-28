import React, { useEffect, useState } from "react";
import "../../../scienceOfSkin.css";

const AnimatedNavButton = ({ onClick }) => {
	const [openNavBar, setOpenNavBar] = useState(false);


	useEffect(() => {
		setOpenNavBar(false);
	}
	, []);
	const handleClick = () => {
		setOpenNavBar(!openNavBar);
		if (onClick) {
			onClick(); // Call the onClick prop if it's provided
		}
	};

	return (
		<div className='z-20 mt-2 py-4'>
			<button
				onClick={handleClick}
				className={
					openNavBar
						? "px-1 py-1 border-2 hover:scale-125 hover:text-gold-500 focus:translate-y-1 text-white animate-pulse hover:cursor-pointer transition-all duration-500 ease-in-out"
						: "text-lg px-1 py-1 border-2 hover:scale-125 hover:text-gold-500 focus:translate-y-1 text-gold-500 animate-pulse hover:cursor-pointer transition-all duration-500 ease-in-out"
				}
				id='navBarButton'
			>
				{!openNavBar ? "Open" : "Close"}
				<span> </span>
			</button>
		</div>
	);
};

export default AnimatedNavButton;
