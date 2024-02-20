import phone from "../../../assets/images/phone.png";
import podcastIconLinks from "../../../assets/data/podcastIconLinks";
const PodCastContainer = () => {
	return (
		<div className=' flex flex-row w-full h-full bg-gradient-to-b from-black via-black to-gray pb-20'>
			<div className='flex flex-col w-full h-full py-10 px-12 m-8 ml-4 mb-4 rounded-2xl text-2xl  bg-black text-white shadow-yellow-700 shadow-2xl'>
				<h1 className='mb-6 text-4xl font-bold text-center'>Where TO FIND US</h1>
				<div className='flex flex-col justify-center items-center text-center h-full w-full pt-4 text-md font-semibold'>
					<p className='mb-6 text-center w-full'>We started our journey with Anchor FM and have expanded onto over 12 major podcast platforms.</p>
					<p className='mb-6 text-center '>
						Knowledge is meaningless without proper accessibility and therefore all of our episodes are available anywhere you can stream a podcast
						and are all available as open access, full length interviews with the leaders in the skin health and beauty space.
					</p>
					{/* <p className='mb-6 text-center'>
					Find us on major platforms such as Spotify, Apple Podcasts, Amazon Music, Podchaser, Audible, Google Podcasts,
					and many more outlets.
				</p> */}
				</div>

				<div className='grid grid-cols-4 gap-8 p-12 mt-8 bg-black rounded-lg shadow-2xl  ring-4 ring-yellow-700 mb-8'>
					{podcastIconLinks.map((item, id) => (
						<div key={id}>
							<a href={item.link} target='_blank' rel='noreferrer'>
								<img
									className='w-20 h-20 mx-auto hover:animate-pulse hover:scale-110 transition-all duration-400 ease-in-out'
									src={item.icon}
									alt={item.icon}
								/>
							</a>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col h-full w-full justify-end items-center pt-50'>
				<img className='w-3/6 ' src={phone} />
			</div>
		</div>
	);
};

export default PodCastContainer;
