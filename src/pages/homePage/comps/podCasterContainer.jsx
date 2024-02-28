import iphoneFrame from "../../../assets/images/iphone-frame.png";
import podcastIconLinks from "../../../assets/data/podcastIconLinks";
import PhoneContainer from "./PhoneContainer";
const PodCastContainer = () => {


	return (
		<div className=' flex flex-row w-full justify-evenly h-full bg-gradient-to-b from-black via-black to-gray pb-20 pt-20'>
			<div id='backgroundPulse' className='shadow-2xl shadow-gold-500 w-fit h-fit ml-4 mb-4 lg:ml-14 mt-20 rounded-3xl p-2'>
				<div
					// id='phoneContainer'
					className='flex flex-col w-[900px] h-full py-10 px-12 rounded-3xl text-2xl  bg-black text-white '
				>
					<h1 className='mb-6 text-4xl font-bold text-center lg:text-2xl'>Where TO FIND US</h1>
					<div className='flex flex-col justify-center items-center text-center h-full w-full pt-4 text-md font-semibold '>
						<p className='mb-6 text-center w-full lg:text-lg'>
							We started our journey with Anchor FM and have expanded onto over 12 major podcast platforms.
						</p>
						<p className='mb-6 text-center lg:text-lg'>
							Knowledge is meaningless without proper accessibility and therefore all of our episodes are available anywhere you can stream a podcast
							and are all available as open access, full length interviews with the leaders in the skin health and beauty space.
						</p>
						{/* <p className='mb-6 text-center'>
					Find us on major platforms such as Spotify, Apple Podcasts, Amazon Music, Podchaser, Audible, Google Podcasts,
					and many more outlets.
				</p> */}
					</div>
					<div className='w-full h-fit p-1 rounded-2xl '>
						<div className='grid grid-cols-4 gap-8 lg:gap-6 lg:p-6 p-12  bg-black rounded-2xl'>
							{/* shadow-2xl ring-4 ring-gold-500 rounded-2xl */}
							{podcastIconLinks.map((item, id) => (
								<div key={id}>
									<a href={item.link} target='_blank' rel='noreferrer'>
										<img
											id={item.id}
											className='lg:w-12 w-20  mx-auto hover:animate-pulse hover:scale-150 transition-all duration-500 ease-in-out grayscale hover:grayscale-0'
											src={item.icon}
											alt={item.icon}
										/>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div id='backgroundPulse' className='flex flex-col justify-start items-center  w-fit rounded-9xl p-2 shadow-2xl shadow-gold-500'>
				<PhoneContainer />
			</div>
		</div>
	);
};

export default PodCastContainer;
