import React, { useState, useEffect, useRef } from "react";
import { usePodCastStateData } from "../../../stateStore/podcastData";
import { usePodCastStateDataActions } from "../../../stateStore/podcastData";
import back from "../../../assets/icons/player-icons/back.svg";
import forward from "../../../assets/icons/player-icons/forward.svg";
import play from "../../../assets/icons/player-icons/play.svg";
import pause from "../../../assets/icons/player-icons/pause.svg";
import volume from "../../../assets/icons/player-icons/volume.svg";
import mute from "../../../assets/icons/player-icons/mute.svg";
import sound from "../../../assets/sound.mp3";

const PodcastPlayer = () => {
	const [episodeData, setEpisodeData] = useState({});
	const [latestEpisode, setLatestEpisode] = useState({});
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [volumeLevel, setVolumeLevel] = useState(1);
	const [currentEpisode, setCurrentEpisode] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
	});
	const audioRef = useRef(null);
	const accessToken = "814951145049de160ab5f0b935932c61";

	useEffect(() => {
		setState({ ...state, loading: true });
		const fetchPlaylistData = async () => {
			try {
				const response = await fetch(`https://www.buzzsprout.com/api/2206286/episodes.json `, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setEpisodeData(data);
					setLatestEpisode(data[0]);
					setState({ ...state, loading: false });
				} else {
					console.error("Error fetching playlist data");
				}
			} catch (error) {
				console.error("Error fetching playlist data:", error);
			}
		};
		fetchPlaylistData();
	}, []);

	const handlePlayClick = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
	};

	const handleBackClick = () => {
		setCurrentEpisode(currentEpisode - 1);
	};

	const handleForwardClick = () => {
		setCurrentEpisode(currentEpisode + 1);
	};

	const handleTimeUpdate = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setCurrentTime(currentTime);
		setDuration(duration);
	};

	const handleVolumeChange = (e) => {
		const volume = e.target.volume;
		setVolumeLevel(volume);
	};

	const currentEpisodeData = episodeData[currentEpisode];
console.log(latestEpisode, "latestEpisode");
	return (
		<div className='h-full w-full flex flex-col bg-white justify-center'>
			<source type='audio/mp3' />
			{!state.loading ? (
				<audio
					ref={audioRef}
					className='w-full'
					src={latestEpisode ? currentEpisodeData.audio_url : ""}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
					onTimeUpdate={handleTimeUpdate}
					onVolumeChange={handleVolumeChange}
					muted={isMuted}
					volume={volumeLevel}
					duration={duration}
				></audio>
			) : (
				""
			)}

			<div className='bg-white flex flex-col h-fit w-full justify-center content-center items-center py-10'>
				{!state.loading ? (
					<img src={currentEpisodeData.artwork_url} className='h-96 w-96 shadow-black shadow-2xl hover:transform-translate hover:ease-in hover:scale-150 hover:duration-300' />
				) : (
					""
				)}
				{!state.loading ? <p className='text-black text-xl font-bold mt-20'>{currentEpisodeData.title}</p> : ""}
			</div>

			<div className='w-auto h-auto flex flex-col justify-center items-center py-5'>
				<div className='flex flex-row justify-center items-center w-full h-1/2'>
					<p className='text-black text-2xl font-bold px-8'>00:00</p>
					<input
						className='w-3/5 h-8'
						type='range'
						min='0'
						max='100'
						step='1'
						value={currentTime}
						onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
					/>
					<p className='text-black text-2xl font-bold px-8'>00:00</p>
				</div>
			</div>
			<div className='w-full h-fit flex flex-row space-x-3 justify-between pl-8 pr-8 py-6 border-b-4'>
				<div className='w-60 h-full flex  justify-end items-end'>
					<p className='text-center text-2xl font-bold text-black '>
						Episode: {!state.loading ? currentEpisodeData.episode_number : ""}
					</p>
				</div>
				<div className='flex flex-row w-auto h-full justify-center space-x-12'>
					<img
						onClick={handleBackClick}
						className='h-20 active:translate-y-2 hover:fill-blue-400 '
						src={back}
						alt='back'
					/>
					<img
						onClick={handlePlayClick}
						className='h-20 active:translate-y-2 '
						src={isPlaying ? pause : play}
						alt='play'
					/>
					<img
						onClick={handleForwardClick}
						className='h-20 active:translate-y-2'
						src={forward}
						alt='forward'
					/>
				</div>
				<div className='w-60 h-full flex flex-row justify-start items-center p-0 m-0'>
					<img onClick={() => setIsMuted(!isMuted)} className='h-8' src={isMuted ? mute : volume} alt='volume' />
					<input
						className='w-60 '
						type='range'
						min='0'
						max='1'
						step='.05'
						value={volumeLevel}
						onChange={(e) => setVolumeLevel(e.target.value)}
					/>
				</div>
			</div>
			<div className='w-full h-full flex flex-col overflow-y-auto overflow-hidden p-10 '>
				{" "}
				<p className='text-2xl font-bold text-center'>Episode Description</p>
				<p className='text-start text-lg font-bold '>{!state.loading ? currentEpisodeData.summary : ""}</p>
			</div>
		</div>
	);
};

export default PodcastPlayer;
