import phone from "../../../assets/images/phone.png";
import spotifyIcon from "../../../assets/icons/spotifyIcon.svg";
import applePodcastIcon from "../../../assets/icons/applePodcastIcon.png";
import googleCastIcon from "../../../assets/icons/googleCastIcon.svg";
import youtubeIcon from "../../../assets/icons/youtubeIcon.svg";
import facebookIcon from "../../../assets/icons/facebookIcon.svg";
import instagramIcon from "../../../assets/icons/instagramIcon.svg";
import buzzsproutIcon from "../../../assets/icons/buzzsproutIcon.svg";
import iheartradioIcon from "../../../assets/icons/iheartradioIcon.svg";
import deezerIcon from "../../../assets/icons/deezerIcon.svg";
import pocketcastsIcon from "../../../assets/icons/pocketcastsIcon.svg";
import amazonMusicIcon from "../../../assets/icons/amazonMusicIcon.svg";
import tuneinIcon from "../../../assets/icons/tuneinIcon.svg";
import playerFMIcon from "../../../assets/icons/playerFMIcon.svg";
import listenNotesIcon from "../../../assets/icons/listenNotesIcon.png";
const PodCastContainer = () => {
	return (
		<div className=' flex flex-row w-full h-full bg-gradient-to-b from-black via-black to-gray pb-20'>
			<div className='flex flex-col w-full h-full py-10 px-12 m-8 ml-4 mb-4 rounded-2xl text-2xl  bg-black text-white shadow-black shadow-2xl'>
				<h1 className='mb-6 text-4xl font-bold text-center'>Where TO FIND US</h1>
				<div
				className="flex flex-col justify-center items-center text-center h-full w-full pt-4 text-md font-semibold"
				>
					<p className='mb-6 text-center w-full'>
					We started our journey with Anchor FM and have expanded onto over 12 major podcast platforms.
				</p>
				<p className='mb-6 text-center '>
					Knowledge is meaningless without proper accessibility and therefore all of our episodes are available anywhere
					you can stream a podcast and are all available as open access, full length interviews with the leaders in the
					skin health and beauty space.
				</p>
				{/* <p className='mb-6 text-center'>
					Find us on major platforms such as Spotify, Apple Podcasts, Amazon Music, Podchaser, Audible, Google Podcasts,
					and many more outlets.
				</p> */}
				</div>
				
				<div className='grid grid-cols-4 gap-8 p-12 mt-8 bg-black rounded-lg shadow-2xl shadow-violet-800 ring-4 ring-violet-700 mb-8'>
						<img className='cursor-pointer w-20 hover:animate-pulse' src={spotifyIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={applePodcastIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={googleCastIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={youtubeIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={iheartradioIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={deezerIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={pocketcastsIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={buzzsproutIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={amazonMusicIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={tuneinIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={playerFMIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={listenNotesIcon} />
				</div>
			</div>

			<div className='flex flex-col h-full w-full justify-end items-center pt-50'>
				<img className='w-3/6 ' src={phone} />
			</div>
		</div>
	);
};

export default PodCastContainer;
