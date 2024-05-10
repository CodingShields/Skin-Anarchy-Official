import { useState, useEffect } from "react";
import skinAwardsLogo from "../../assets/images/skinAwardsLogo.png";
import topPicksBGVIDEO from "../../assets/video/topPicksBGVIDEO.mp4";
import TabBar from "./comp/tabBar";
import testData from "../../assets/data/topPicks/test/testData";

const TopPicksPage = () => {
	const [bGLoaded, setBGLoaded] = useState(false);

	useEffect(() => {
		// Delay setting videoLoaded to true to make the video load slowly
		const timer = setTimeout(() => {
			setBGLoaded(true);
		}, 500); // Adjust the delay time as needed (in milliseconds)

		return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
	}, []);

	return (
		<div className='w-full h-full z-50 relative text-white'>
			<div
				className={`flex flex-col relative  items-center h-fit w-full transition-opacity duration-1000 ease-in-out transform scale-100 
				${bGLoaded ? "opacity-100" : "opacity-0"}`}
			>
				{/* <video className='w-full h-lg md:object-center' autoPlay muted loop id='video'>
					<source src={topPicksBGVIDEO} type='video/mp4' />
				</video> */}
				{/* <img className='absolute w-3/6 mt-20 z-20' src={skinAwardsLogo} alt='skinAwardsLogo' /> */}
				{/* <svg className='absolute bottom-70  w-full h-full opacity-90 z-10' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='50' cy='51.5' r='21' />
				</svg> */}
				{/* <TabBar /> */}
			</div>
			<div className='bg-black bg-opacity-50 w-full h-screen   justify-center	'>
				<div>
					<h1 className='text-white text-4xl text-center'>Top Picks</h1>
				</div>
				<div className='grid grid-cols-4 w-full h-full gap-2 '>
					{testData.map((item) => {
						return (
							<div className=' h-11/12 w-full col-span-1 flex justify-center' key={item.id}>
								<div className='group w-2/4 h-fit my-auto justify-start bg-white overflow-hidden rounded-lg transition-transform  transform-gpu duration-500 ease-in-out hover:shadow-black hover:shadow-2xl  hover:scale-125 hover:translate-y-10 hover:m-y-auto hover:h-2/5 hover:w-1/6  hover:absolute hover:z-10 '>
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
		</div>
	);
};

export default TopPicksPage;
