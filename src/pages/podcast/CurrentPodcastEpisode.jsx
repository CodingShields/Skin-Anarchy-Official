import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CategoryList from "./comp/categoryList.jsx";
import LatestEpisodeBanner from "./comp/latestEpisodeBanner.jsx";
import SearchBar from "./comp/SearchBar.jsx";
import SelectPlayerList from "./comp/selectPlayerList.jsx";
import EpisodesList from "./comp/EpisodesList.jsx";
import whiteLogo from "../../assets/images/logos/white-logo.png";
const CurrentPodcastEpisode = () => {
	return (
		<div className='w-full h-full animate-fadeIn'>
	
			<div className='w-full h-full flex flex-col justify-start items-center text-center mt-24'>
				<div className=' w-[1600px] h-fit '>
					<h1 className='text-4xl font-montserrat font-thin text-white uppercase tracking-widest mb-4'>Current Episode</h1>
					<iframe
						className='w-3/4 h-[352px] mx-auto'
						src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0'
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>
				</div>
				<div className='w-full mt-12'>
					<EpisodesList />
				</div>
			</div>
		</div>
	);
};

export default CurrentPodcastEpisode;
