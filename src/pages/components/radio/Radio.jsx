import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { RadioIcon, ArrowRightCircleIcon, XCircleIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import staticEqualizerGray from "../../../assets/iconsAnimated/staticEqualizerGray.svg";
import animatedEqualizerColor from "../../../assets/iconsAnimated/animatedEqualizerColor.svg";
import { PlayPauseIcon } from "@heroicons/react/24/outline";
import { useRadioStore, useRadioStoreActions } from "../../../stateStore/useRadioStore";
import { userDeviceInfo } from "../../../utilities/utilities";
const Podcast = () => {
	const [state, setState] = useState({
		loading: false,
		error: null,
		errorMessage: "",
		radioActive: false,
		autoplay: false,
	});

	const openRadioOn = useRadioStore((state) => state.openRadioOn);
	const playing = useRadioStore((state) => state.playing);
	const { setOpenRadioOn, setPlaying } = useRadioStoreActions((state) => state.actions);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className={`${openRadioOn && !isMobile ? "w-fit h-fit  fixed top-0 mt-24 right-0  animate-fadeIn" : "hidden"} `}>
			<div className='flex flex-col justify-center items-end w-full h-full pr-10 relative'>
				<button
					onClick={() => setOpenRadioOn(!openRadioOn)}
					className='transition-all duration-700 ease-in-out text-white/50 absolute bg-char-900 hover:font-semibold  hover:text-black hover:bg-white/70 border-[3px] -top-1 w-18 mr-4 uppercase border-r-char-900  border-t-char-900  border-l-char-900 text-sm  p-2 rounded-tr-2xl rounded-tl-2xl'
				>
					close
				</button>
				<iframe
					className='mt-6 z-20'
					src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0&t=0'
					width='200%'
					height='152'
					allowfullscreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
			</div>

			{/* <div className='w-fit h-fit p-2 group hover:border-white cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out'>
				<div className='w-fit h-fit border-2 border-white/50  group-hover:bg-white group-hover:shadow-xl group-hover:shadow-gold-500  transition-all duration-700 ease-in-out rounded-xl inline-flex justify-center items-center p-3 space-x-4'>
					<PlayIcon
						id='playButton'
						className='w-8 h-8 text-white/30 group-hover:text-black transition-all duration-700 ease-in-out stroke-2 group-hover:stroke-1'
					/>
					<PauseIcon className='w-8 h-8 text-white/30 group-hover:text-black transition-all duration-700 ease-in-out stroke-2 group-hover:stroke-1' />
					<img
						src={playing ? animatedEqualizerColor : staticEqualizerGray}
						alt='equalizer'
						className='w-8 h-8 opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out animate-fadeIn'
					/>
					<XCircleIcon className='w-8 h-8 text-white/30 group-hover:text-black transition-all duration-700 ease-in-out stroke-2 group-hover:stroke-1' />
				</div>
			</div> */}
		</div>
	);
};

export default Podcast;
