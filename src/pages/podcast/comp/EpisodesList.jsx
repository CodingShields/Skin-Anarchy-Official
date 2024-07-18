import { useState, useEffect } from "react";
import EpisodesCategories from "./EpisodesCategories";
import episode1 from "../../../assets/images/podcast-widget/episode1.png";
import { BarsArrowDownIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import EpisodeCard from "./EpisodeCard";
import EpisodeDetailsCard from "./EpisodeDetailsCard";
import EpisodeCardButton from "./EpisodeCardButton";
import gold from "../../../assets/video/gold.mp4";
const EpisodesList = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
		selectedEpisode: false,
	});
	return (
		<div>
			<h1>EpisodesList</h1>
			<EpisodesCategories />
			<div className='w-full inline-flex h-fit'>
				<div className='w-full  relative '>
					{/* <video autoPlay muted loop className='object-contain w-full h-fit opacity-40 absolute bottom-'>
						<source src={gold} type='video/mp4' />
					</video> */}
				</div>
				<div className='w-full flex flex-col border-t h-[800px]  absolute'>
					<div className='bg-black w-fit mx-auto h-full px-14 border-x'>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton open={state.selectedEpisode} onClick={() => setState({ ...state, selectedEpisode: !state.selectedEpisode })} />
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
					</div>
				</div>
				<div className='w-full  relative '>
					{/* <video autoPlay muted loop className='object-contain w-full h-fit opacity-40 absolute bottom-'>
						<source src={gold} type='video/mp4' />
					</video> */}
				</div>
			</div>
		</div>
	);
};

export default EpisodesList;
