import { useState, useEffect, useRef } from "react";
import EpisodesCategories from "./EpisodesCategories";
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

	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.85; // Set the desired playback rate here
		}
	}, []);

	return (
		<div className="w-full min-h-screen overscroll-y-auto overflow-hidden">
			<EpisodesCategories />
			<div className="w-full inline-flex h-full select-none">
				<video
					autoPlay
					muted
					loop
					ref={videoRef}
					className="object-contain w-full h-fit  absolute opacity-[.1] grayscale"
				>
					<source
						src={gold}
						type="video/mp4"
					/>
				</video>
				<div className="w-full border-t h-fit grow mx-auto flex justify-center items-center z-20">
					<div className=" w-full mx-auto h-full bg-black/60 flex flex-col items-center justify-start overflow-y-scroll py-8  scrollbar-thumb-black scrollbar-thin scroll scrollbar-track-gold-900">
						<EpisodeCard open={state.selectedEpisode}>
							{/* <EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/> */}
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
						<EpisodeCard open={state.selectedEpisode}>
							<EpisodeCardButton
								open={state.selectedEpisode}
								onClick={() =>
									setState({
										...state,
										selectedEpisode: !state.selectedEpisode,
									})
								}
							/>
							<EpisodeDetailsCard open={state.selectedEpisode} />
						</EpisodeCard>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EpisodesList;
