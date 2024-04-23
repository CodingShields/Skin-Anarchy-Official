import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
NavBarMenuDropDown.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool, // Add the missing 'open' prop
	data: PropTypes.array,
	text: PropTypes.string,
	title: PropTypes.string,
};
export default function NavBarMenuDropDown({ children, open, data, title }) {
	const [highlightData, setHighlightData] = useState(null);
	useEffect(() => {
		setHighlightData(data);
	}, [data]);
	return open ? (
		<div className='absolute left-0 mt-4 text-white flex flex-row animate-fadeIn bg-char-900 py-4 px-4 w-[85%] rounded-b-lg h-fit '>
			<div className={highlightData && highlightData.length > 0 ? "flex flex-col " : "inline-flex w-full 	 "}>
				<h1 className='text-white lg:text-2xl text-3xl text-end underline underline-offset-8 decoration-1 font-thin h-24 pt-4 font-montserrat'>
					{title}
				</h1>
				{React.Children.map(children, (child, index) => (
					<h1
						className='text-black lg:text-lg text-2xl px-6 font-thin lg:text-end cursor-pointer items-stretch relative hover:animate-bounce'
						key={index}
					>
						{child}
					</h1>
				))}
			</div>
			<div className='flex flex-row  justify-center items-center ml-12 text-3xl text-wrap w-full lg:px-2 px-4 mt-12 '>
				{highlightData &&
					highlightData.map((item, index) => (
						<div
							onMouseEnter={console.log("test")}
							className='flex flex-col justify-center items-center ml-12 text-3xl text-wrap w-full lg:px-2 px-4 mt-12 '
							key={index}
						>
							<a href={console.log(item.link)} target='_blank' rel='noreferrer'>
								<img src={item.image} className=' mx-auto grayscale w-[400px]' alt='image' />
							</a>{" "}
							<h1 className='text-start text-lg h-12 py-4 pl-4 font-montserrat'>{item.guest}</h1>
						</div>
					))}
			</div>
		</div>
	) : (
		<div className='animate-fadeOut duration-500 ease-in-out absolute left-0 mt-4 text-white z-20 flex flex-row bg-char-900/70 py-4 px-4 w-full h-[700px]'></div>
	);
}
