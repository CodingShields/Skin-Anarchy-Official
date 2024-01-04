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
		<div className=' flex max-h-3xl '>
			<div className='grid grid-cols-1 w-full h-full pt-12 pl-48 pr-48 pb-12 m-8 ml-0 mb-10 rounded-br-xl rounded-tr-xl text-2xl  bg-white shadow-black shadow-2xl'>
				<h1 className='mb-6 text-4xl font-bold text-center'>Where TO FIND US</h1>
				<p className='mb-6 text-center'>
					We started our journey with Anchor FM and have expanded onto over 10 major podcast platforms.
				</p>
				<p className='mb-6 text-center '>
					Knowledge is meaningless without proper accessibility and therefore all of our episodes are available anywhere
					you can stream a podcast and are all available as open access, full length interviews with the leaders in the
					skin health and beauty space.
				</p>
				<p className='mb-6 text-center'>
					Find us on major platforms such as Spotify, Apple Podcasts, Amazon Music, Podchaser, Audible, Google Podcasts,
					and many more outlets.
				</p>
				<div className='grid grid-cols-4 gap-8 p-12 mt-8 bg-black rounded-lg shadow-2xl bg-opacity-80 shadow-teal-800 ring-4 ring-violet-700'>
						<img className='cursor-pointer w-20 hover:animate-pulse' src={spotifyIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={applePodcastIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={googleCastIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={youtubeIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={iheartradioIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={deezerIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={pocketcastsIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={buzzsproutIcon} />
						<img className='cursor-pointer lg:w-16 xl:w-20 hover:animate-pulse' src={amazonMusicIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={tuneinIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={playerFMIcon} />
						<img className='cursor-pointer w-20 hover:animate-pulse' src={listenNotesIcon} />
				</div>
			</div>

			<div className='grid grid-cols-1 place-items-center overflow-visible '>
				<img className='xl:w-3/6  object-contain' src={phone} />
			</div>
		</div>
	);
};

export default PodCastContainer;
