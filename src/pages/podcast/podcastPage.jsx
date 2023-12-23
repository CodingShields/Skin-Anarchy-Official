import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CategoryList from "./comp/categoryList.jsx";
import LatestEpisodeBanner from "./comp/latestEpisodeBanner.jsx";
import EpisodeList from "./comp/episodeList.jsx";
import SearchBar from "./comp/SearchBar.jsx";
import SelectPlayerList from "./comp/selectPlayerList.jsx";
import podcastBG from "../../assets/video/podcastBG.mp4";
import PodcastPlayer from "./comp/podcastPlayer.jsx";

// https://open.spotify.com/show/298oIu74qjd3pXaaBMDr19?si=fdc9d1fe23d64451

const PodcastPage = () => {
	window.onSpotifyIframeApiReady = (IFrameAPI) => {
		const element = document.getElementById("embed-iframe");
		const options = {
			uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
		};
		const callback = (EmbedController) => {};
		IFrameAPI.createController(element, options, callback);
	};

	return (
		<div className='flex flex-col relative  items-center h-fit w-full transition-opacity duration-1000 ease-in-out transform scale-100'>
			<div>
				<video className='w-full h-lg relative md:object-center' autoPlay muted loop id='video'>
					<source src={podcastBG} type='video/mp4' />
				</video>
			</div>

			<div className='absolute top-40  left-20 w-1/6 h-96 bg-black bg-opacity-50 rounded-xl shadow-violet-600 shadow-2xl'>
				<div className='flex flex-col justify-center items-center h-full'>
					<div className='flex flex-col justify-evenly h-full w-fit'>
						<SelectPlayerList />
						<CategoryList />
						<SearchBar />
					</div>
				</div>
			</div>
			<div className='absolute top-60 right-70 w-3/6 h-fit'>
				<iframe
					id='embedPlayer'
					src='https://embed.podcasts.apple.com/us/podcast/skincare-anarchy/id1522162686?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark'
					height='450px'
					frameborder='0'
					sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
					allow='autoplay *; encrypted-media *; clipboard-write'
					style={{
						width: "100%",
						maxWidth: "660px",
						overflow: "hidden",
						borderRadius: "10px",
						transform: "translateZ(100px)",
						animation: "2s ease 0s 6 normal none running",
						loading: "Indicator",
						backgroundColor: "rgb(228, 228, 228)",
					}}
				></iframe>

				<div className='flex flex-col justify-start h-full bg-black rounded-2xl p-2 text-lg  shadow-violet-600 shadow-lg'>
					<iframe
						style={{ borderRadius: "1rem" }}
						src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0'
						width='100%'
						height='352'
						allowfullscreen='true'
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>
				</div>
			</div>
			{/* <div className='absolute bottom-40 right-70 w-3/6 h-fit pb-4'>
				<div className='flex flex-col justify-center items-center h-fit w-full px-4 overflow-hidden  bg-black bg-opacity-80 rounded-xl shadow-violet-600 shadow-lg'>
					<p className='text-white text-2xl font-bold py-3'>Episodes</p>
					<div className='overflow-y-scroll scrollbar scrollbar-thumb-violet-700 scrollbar-track-violet-400 scrollbar-rounded-lg w-full h-fit mb-2 pl-4'>
						<EpisodeList />
					</div>
				</div>
			</div> */}
			<div className='absolute  top-40 w-full h-fit flex flex-col justify-center items-center'>
				<LatestEpisodeBanner />
			</div>
		</div>
	);
};

export default PodcastPage;
