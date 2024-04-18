import React, { useState, useEffect } from "react";

export default function NavBarMenuDropDown({ children, open, data, text, title }) {
	const [highlightData, setHighlightData] = useState(null);
	console.log(text);
	console.log(data);
	console.log(highlightData);
	useEffect(() => {
		setHighlightData(data);
	}, [data]);

	return open ? (
		<div className='absolute left-0 mt-4 text-white z-20 flex flex-row animate-fadeIn bg-char-900/70 py-4 px-4 w-full h-[700px]'>
			<div className='grid grid-cols-1   ml-12 pt-4 w-1/4 mr-4'>
				<h1 className='text-white text-3xl underline '>{title}</h1>

				{children}
			</div>
			<div className='block'>
				<div className='grid grid-cols-3 border-l-2 border-white w-full h-full font-thin'>
					{highlightData &&
						highlightData.map((item, index) => (
							<div className='block ml-12 text-3xl text-wrap' key={index}>
								<a href={item.link} target='_blank' rel='noreferrer'>
									<img src={item.image} className=' h-32' alt='image' />
									<h1>{item.guest}</h1>
								</a>
								<p className='text-white text-xl font-thin underline text-start text-wrap '>{item.description}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	) : (
			<div
			className="animate-fadeOut duration-500 ease-in-out absolute left-0 mt-4 text-white z-20 flex flex-row bg-char-900/70 py-4 px-4 w-full h-[700px] text-center"
			>

			</div>
	);
}
