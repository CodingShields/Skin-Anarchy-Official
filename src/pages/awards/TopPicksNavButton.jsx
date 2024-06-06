import React from "react";

const TopPicksNavButton = ({ name, subMenu, active, onClick, children }) => {
	const handleClick = () => {
		onClick(name, subMenu);
	};
console.log(active);
	return (
		<div className='relative space-x-4'>
			<button
				className={` ${active === name ? "text-white font-montserrat uppercase px-4 py-2 text-xl tracking-widest underline underline-offset-8" : "text-gray-400 hover:text-white underlineAnimate font-montserrat uppercase px-4 py-2 text-xl tracking-widest"}`}
				onClick={handleClick}
			>
				{name}
			</button>
			{active === name && <div className='absolute top-full left-0 w-fit z-10 '>{children}</div>}
		</div>
	);
};

export default TopPicksNavButton;
