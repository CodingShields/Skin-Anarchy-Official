import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import skinAwardsLogo from "../../assets/images/skinAwardsLogo.png";
import verticalSheetsWaving from "../../assets/video/verticalSheetsWaving.mp4";
import topPicksBGVIDEO from "../../assets/video/topPicksBGVIDEO.mp4";
import TabBar from "./comp/tabBar";
import testData from "../../assets/data/topPicks/test/testData";

const TopPicksPage = () => {
	const [bGLoaded, setBGLoaded] = useState(false);
	const [prodState, setProdState] = useState({
		prodHover: false,
		prodClicked: false,
	});

	useEffect(() => {
		// Delay setting videoLoaded to true to make the video load slowly
		const timer = setTimeout(() => {
			setBGLoaded(true);
		}, 500); // Adjust the delay time as needed (in milliseconds)

		return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
	}, []);

	return (
		<div className='w-full h-full animate-fadeIn bg-black inherit'>
			<TabBar />

			<div className='grid grid-cols-4 w-full h-full gap-2 '>
				{testData.map((item, index) => {
					return (
						<div className=' h-11/12 w-full col-span-1 flex justify-center' key={index}>
							<div className='group w-2/4 h-fit my-auto justify-start bg-white overflow-hidden rounded-lg transition-all opacity-50 hover:opacity-100 duration-500 ease-in-out hover:shadow-black hover:shadow-2xl  hover:scale-125 hover:translate-y-10 hover:m-y-auto hover:h-2/5 hover:w-1/6  hover:absolute '>
								<p className='text-black text-center font-bold mb-4'>{item.brand}</p>
								<div className='aspect-w-4 aspect-h-3'>
									<div className='w-full h-full '>
										<img className='object-contain  w-full h-full' src={item.image} alt='product' />
										<p className='text-center text-black font-bold bg-white  h-1/6'>{item.description}</p>
										<div className='flex justify-center'>
											<button className='bg-black  text-white font-bold py-2 px-4  border-black border-lg rounded-lg '>trackable click link</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopPicksPage;
