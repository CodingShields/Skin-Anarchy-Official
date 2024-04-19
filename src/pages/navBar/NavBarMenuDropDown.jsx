import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function NavBarMenuDropDown({ children, open, data, text, title }) {
	NavBarMenuDropDown.propTypes = {
		children: PropTypes.node,
		open: PropTypes.bool, // Add the missing 'open' prop
		data: PropTypes.array,
		text: PropTypes.string,
		title: PropTypes.string,
	};
	const [highlightData, setHighlightData] = useState(null);

	useEffect(() => {
		setHighlightData(data);
	}, [data]);

	return open ? (
		<div className='absolute left-0 mt-4 text-white flex flex-row animate-fadeIn bg-[#565656] py-4 px-4 w-full h-fit '>
			<div className={highlightData && highlightData.length > 0 ? "flex flex-col " : "inline-flex w-full items-stretch	 "}>
				{/* <h1 className='text-white lg:text-2xl text-3xl text-end underline underline-offset-8 decoration-1 font-thin h-24 pt-4 '>{title}</h1> */}
				{/* {children.map((child, index) => {
					return (
						<h1 className='text-black lg:text-lg text-2xl px-6 font-thin lg:text-end cursor-pointer items-stretch relative' key={index}>
							{child}
						</h1>
					);
				})} */}
				{children}
			</div>
			<div
				className={
					highlightData && highlightData.length > 0
						? "grid grid-cols-1 items-center w-full h-1/2  font-thin"
						: "grid grid-cols-3 items-center w-full h-1/2  font-thin"
				}
			>
				{highlightData &&
					highlightData.map((item, index) => (
						<div
							className={
								highlightData && highlightData.length > 0
									? "flex flex-row  justify-center items-center ml-12 text-3xl text-wrap w-fit lg:px-2 px-4 mt-4 "
									: "flex flex-col  justify-center items-center ml-12 text-3xl text-wrap w-fit lg:px-2 px-4 mt-12 "
							}
							key={index}
						>
							<a href={item.link} target='_blank' rel='noreferrer'>
								<img src={item.image} className=' mx-auto grayscale lg:w-48' alt='image' />
							</a>{" "}
							<h1 className='text-start h-12 py-4 pl-4'>
								{item.guest}
								<p className='text-white text-xl font-thin h-48 w-auto whitespace-normal capitalize '>{item.description}</p>
							</h1>
						</div>
					))}
			</div>
		</div>
	) : (
		<div className='animate-fadeOut duration-500 ease-in-out absolute left-0 mt-4 text-white z-20 flex flex-row bg-char-900/70 py-4 px-4 w-full h-[700px]'></div>
	);
}
