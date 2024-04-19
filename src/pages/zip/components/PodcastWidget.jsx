import { useEffect, useState } from "react";
import episode1 from "../../assets/images/podcast-widget/episode1.png";
import episode2 from "../../assets/images/podcast-widget/episode2.png";
import episode3 from "../../assets/images/podcast-widget/episode3.png";
import episode4 from "../../assets/images/podcast-widget/episode4.png";
import WorkingModal from "./WorkingModal";
const episodes = [
	{
		name: "MAKEUP BY MARIO",
		description: " Launches Most Requested Product: Learning About SURREALSKIN AWAKENING CONCEALER",
		guest: "Mario Dedivanovic ",
		img: episode1,
		link: "https://open.spotify.com/episode/7GRct64o58RL4hnWUGqVmz?si=CAVOTN_7TAObZOthErhCaQ ",
	},
	{
		name: "Embracing Natural Curls ",
		description: "Founder of ‘4U by Tia’ Haircare",
		guest: "Tia Mowry",
		img: episode2,
		link: "https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=k_wuyUXbRdeQqhsqTvhiMA ",
	},
	{
		name: "Surgically-Precise",
		description: "Surgically-Precise Skincare Is The Best Option For Clinically Proven Results ft. 111SKIN",
		guest: "Dr. Yannis Alexandrides ",
		img: episode3,
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Unveiling Authenticity",
		description: "Marlena Stell’s Vision for the Future of Makeup",
		guest: " Marlena Stell",
		img: episode4,
		link: "https://open.spotify.com/episode/1TeLNZkhRzAN7hrHNcJeL2?si=V_WQxFK-QGK__LUkOC2-uw ",
	},
];

const PodcastWidget = () => {
	const [state, setState] = useState({
		loading: false,
		error: null,
	});
	const [currentEpisode, setCurrentEpisode] = useState(episodes[0]);
	const [episodeIndex, setEpisodeIndex] = useState(0);

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const handleEpisodeClick = (index) => {
		setEpisodeIndex(index);
	};

	useEffect(() => {
		setState({ loading: true });
		setCurrentEpisode(episodes[episodeIndex]);
		setState({ loading: false });
	}, [episodeIndex]);

	const play = (
		<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='black'>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
			/>
		</svg>
	);

	return (
		<div className='w-full h-full mx-auto z-30 relative'>
			<h1 className='text-4xl text-center font-playfair text-white z-50 py-10'>LISTEN TO OUR TOP PODCASTS</h1>

			<div className='w-11/12 h-[750px] mx-auto bg-white/25 flex flex-row rounded-2xl '>
				<img src={currentEpisode.img} className=' p-8 animate-fadeIn rounded-l-2xl' />

				<div className='w-11/12 h-full '>
					<div className='w-full h-fit pl-2 pt-4'>
						<h1 className='text-lg  text-white/50'>
							Title: <span className='font-thin text-2xl text-white'>{currentEpisode.name}</span>
						</h1>
						<h1 className='text-lg  text-white/50'>
							Description: <span className='text-2xl font-thin text-white'>{currentEpisode.description}</span>
						</h1>
						<h1 className='text-lg text-white/50'>
							Featured Guest: <span className='text-2xl font-thin text-white'>{currentEpisode.guest}</span>
						</h1>
						<a href={currentEpisode.link} target='_blank' rel='noopener noreferrer'></a>
					</div>
					<WorkingModal open={state.loading} />
					<div className=' h-11/12   w-11/12 ml-4 mt-4 py-2  bg-black z-50  rounded-2xl'>
						{episodes.map((item, index) => (
							<div
								key={index}
								className={classNames(
									"w-[95%] h-24 flex flex-row justify-start items-center space-x-4 hover:cursor-pointer ml-4 my-2 px-10 tracking-widest	",
									episodeIndex === index && "bg-white rounded-2xl text-black  animate-fadeIn tracking-widest	"
								)}
								onClick={() => handleEpisodeClick(index)}
							>
								<img
									src={item.img}
									className={classNames("w-18 h-18 ", episodeIndex === index ? "scale-150 transition-all ease-in-out duration-200" : "")}
								/>
								<h1
									className={classNames(
										"text-lg text-black",
										episodeIndex === index ? "text-black pl-8 font-semibold" : "text-white font-thin tracking-widest	"
									)}
								>
									{item.name}: <span className='text-gray-400 text-md tracking-widest	'>{item.description}</span>
								</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastWidget;
