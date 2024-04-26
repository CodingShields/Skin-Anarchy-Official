import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HighLightMenuComp from "./HighLightMenuComp";
import NoHighLightMenuComp from "./NoHighLightMenuComp";
export default function MenuDropdown({ data, highlight, openHl, openNoHL }) {
	const [menuData, setMenuData] = useState([]);
	const [highlightMenu, setHighlightMenu] = useState([]);
	useEffect(() => {
		setMenuData([]);
		setHighlightMenu([]);
		setMenuData(data);
		setHighlightMenu(highlight);
	}, [data, highlight]);
	console.log(openNoHL);
	console.log(openHl);
	return (
		<>
			<HighLightMenuComp open={openHl}>
				<div className='flex flex-row py-8 bg-char-900 w-[80%] mx-auto rounded-b-xl'>
					<div className='flex flex-col justify-start w-1/4 items-center text-center px-6'>
						<h2 className='text-4xl font-montserrat text-white text-left uppercase underline underline-offset-8 decoration-0 pb-6 tracking-widest	'>
							Categories
						</h2>
						<div className='space-y-8 pt-6'>
							{menuData?.map((item, index) => {
								return (
									<div key={index} className='w-full '>
										<h1 className='text-right underlineAnimate text-xl font-montserrat text-white whitespace-nowrap tracking-widest'>
											<a href={item.link} target='_blank' rel='noreferrer'>
												{item.name}
											</a>
										</h1>
									</div>
								);
							})}
						</div>
					</div>

					<div className='w-full inline-flex justify-center items-center space-x-24 py-10'>
						{highlightMenu?.map((item, index) => {
							return (
								<div key={index} className='flex flex-col justify-center items-center space-y-6'>
									<a href={item.link} target='_blank' rel='noreferrer'>
										<img src={item.image} className='w-[400px] shadow-xl shadow-black' />
										<h1 className='text-white font-montserrat text-2xl tracking-widest text-center py-6'>{item.name}</h1>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</HighLightMenuComp>
			<NoHighLightMenuComp open={openNoHL}>
				<div className='w-fit h-24 mx-auto bg-char-900 rounded-b-lg flex flex-row relative'>
					{menuData?.map((item, index) => {
						return (
							<div key={index} className='my-auto px-24'>
								<h1 className='text-xl font-montserrat text-white whitespace-nowrap tracking-widest '>
									<a href={item.link} target='_blank' rel='noreferrer'>
										{item.name}
									</a>
								</h1>
							</div>
						);
					})}
				</div>
			</NoHighLightMenuComp>
		</>
	);
}
MenuDropdown.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	data: PropTypes.array.isRequired,
	highlight: PropTypes.array.isRequired,
	openHl: PropTypes.bool.isRequired,
	openNoHL: PropTypes.bool.isRequired,
};
