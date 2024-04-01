import iphoneFrame from "../../../assets/images/iphone-frame.png";
import podcastIconLinks from "../../../assets/data/podcastIconLinks";
import PhoneContainer from "./PhoneContainer";
import rotatingMicrophone from "../../../assets/video/rotatingMicrophone.mp4";

const PodCastContainer = () => {


	return (
		<div className=' flex flex-row w-full justify-evenly h-full bg-black pb-20 py-24'>
			<div className=' h-fit w-full overflow-hidden bg-black absolute mt-18'>
				<video className='w-full opacity-40' autoPlay muted loop id='video' src={rotatingMicrophone}></video>
			</div>
			<div className='flex flex-col justify-start items-center  w-fit rounded-9xl p-2 '>
				<PhoneContainer />
			</div>
			<div className=' w-fit h-fit ml-4 mb-4 lg:ml-14 mt-20 rounded-3xl p-2 z-10'>
				<div className='flex flex-col w-[700px] h-full px-12  text-2xl   text-white '>
					<h1 className='mb-6 text-4xl  text-center lg:text-4xl font-playfair'>Where To Find Us</h1>
					<div className='flex flex-col justify-center items-center text-center h-full w-full pt-4 text-md space-y-8 font-glacialRegular'>
						<p className='mb-6 text-center w-full lg:text-xl '>
							We started our journey with Anchor FM and have expanded onto over 12 major podcast platforms.
						</p>
						<p className='mb-6 text-center lg:text-xl font-glacialRegular'>
							Knowledge is meaningless without proper accessibility and therefore all of our episodes are available anywhere you can stream a podcast
							and are all available as open access, full length interviews with the leaders in the skin health and beauty space.
						</p>
						<p className='mb-6 text-center lg:text-xl font-glacialRegular'>
							The Skin Anarchy podcast is available on all major platforms including Apple Podcasts, Spotify, Google Podcasts, and many more.
						</p>
					</div>
					<div className='w-full h-full mt-8'>
						<div className='grid grid-cols-4 gap-8 lg:gap-12 lg:p-6 p-12 '>
							{/* shadow-2xl ring-4 ring-gold-500 rounded-2xl */}
							{podcastIconLinks.map((item, id) => (
								<div key={id}>
									<a href={item.link} target='_blank' rel='noreferrer'>
										<img
											id={item.id}
											className='lg:w-8 w-20  mx-auto hover:animate-pulse hover:scale-150 transition-all duration-500 ease-in-out grayscale hover:grayscale-0'
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
		</div>
	);
};

export default PodCastContainer;
