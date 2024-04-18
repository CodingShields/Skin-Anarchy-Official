import { useState, useEffect } from "react";

export default function NavBarMenuDropDown({ children, open, data, text, title }) {
	const [highlightData, setHighlightData] = useState(null);

	useEffect(() => {
		setHighlightData(data);
	}, [data]);

	return open ? (
		<div className='absolute left-0 mt-4 text-white flex flex-row animate-fadeIn bg-[#565656] py-4 px-4 w-full h-auto '>
			<div className='flex flex-col '>
				<h1 className='text-white text-3xl text-center underline underline-offset-8 decoration-1 font-thin h-24 pt-4'>{title}</h1>
				{children}
			</div>
			<div className='grid grid-cols-3 items-center w-full h-full font-thin '>
				{highlightData &&
					highlightData.map((item, index) => (
						<div className='flex flex-col  justify-center items-center ml-12 text-3xl text-wrap w-[500px] px-4 mt-12 ' key={index}>
							<a href={item.link} target='_blank' rel='noreferrer'>
								<img src={item.image} className=' mx-auto grayscale ' alt='image' />
								<h1 className='text-center h-12 py-4'>{item.guest}</h1>
							</a>
							<p className='text-white text-xl font-thin h-48 w-auto whitespace-normal capitalize py-12'>{item.description}</p>
						</div>
					))}
			</div>
		</div>
	) : (
		<div className='animate-fadeOut duration-500 ease-in-out absolute left-0 mt-4 text-white z-20 flex flex-row bg-char-900/70 py-4 px-4 w-full h-[700px]'></div>
	);
}
