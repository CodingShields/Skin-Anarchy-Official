import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CategoryList from "./comp/categoryList.jsx";
import LatestEpisodeBanner from "./comp/latestEpisodeBanner.jsx";
import SearchBar from "./comp/SearchBar.jsx";
import SelectPlayerList from "./comp/selectPlayerList.jsx";
import podcastBG from "../../assets/video/podcastBG.mp4";

const CurrentPodcastEpisode = () => {
	return (
		<div className='flex flex-col relative  items-center h-fit w-full transition-opacity duration-1000 ease-in-out transform scale-100'>
			<div>
				<video className='w-full h-lg relative md:object-center' autoPlay muted loop id='video'>
					<source src={podcastBG} type='video/mp4' />
				</video>
			</div>

			<div className='absolute top-60 right-70 w-3/4 h-fit shadow-black shadow-xl rounded-xl'>
				<iframe
					src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0'
					width='100%'
					height='352'
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
			</div>
		</div>
	);
};

export default CurrentPodcastEpisode;
