import { useState, useEffect } from "react";
import { userDeviceInfo } from "../../../utilities/utilities";
import { RadioIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useRadioStoreActions } from "../../../stateStore/useRadioStore";
import { useRadioStore } from "../../../stateStore/useRadioStore";
import staticEqualizerGray from "../../../assets/iconsAnimated/staticEqualizerGray.svg";
import animatedEqualizerColor from "../../../assets/iconsAnimated/animatedEqualizerColor.svg";
const Podcast = () => {
	const [state, setState] = useState({
		loading: false,
		error: null,
		errorMessage: "",
		radioActive: false,
	});

	const openRadioOn = useRadioStore((state) => state.openRadioOn);

	console.log(openRadioOn);

	const { setOpenRadioOn } = useRadioStoreActions((state) => state.actions);

	const toggleRadio = (e) => {
		e.preventDefault();
		setOpenRadioOn(!openRadioOn);
	};

	const [isMobile, setIsMobile] = useState(false);

	console.log(userDeviceInfo());
	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className='w-full h-fit relative py-12 mx-auto mt-12'>
			<div className='w-full h-full '>
				<h1 className='text-4xl sm:text-xl text-center font-montserrat tracking-widest font-thin text-white z-50 py-12'>
					LISTEN TO OUR CURRENT EPISODE
				</h1>
				<div className='w-full px-2'>
					{!isMobile &&<iframe
						src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0&autoplay=1'
						className='w-1/2 h-[450px] mx-auto'
						allowfullscreen=''
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>}
					{isMobile &&<iframe
						src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0&t=0'
						width='100%'
						height='152'
					></iframe>}

					<div
						onMouseOut={() => setState({ radioActive: false })}
						onMouseOver={() => setState({ radioActive: true })}
						className={`inline-flex justify-center items-center w-full space-x-2 h-fit py-4 group ${isMobile && "hidden"}`}
					>
						<div className='w-fit h-fit inline-flex justify-center items-center p-4 '>
							<p className='text-white/50 font-montserrat font-thin text-xl uppercase tracking-widest group-hover:text-white transition-all duration-700 ease-in-out'>
								Listen While You Scroll
							</p>
							<ArrowRightCircleIcon className='w-8 h-8 text-white/30 stroke-1 group-hover:animate-bounce group-hover:mr-2 group-hover:text-white transition-all duration-700 ease-in-out ml-4 mr-12 group-hover:ml-10' />
						</div>
						<div className='w-fit h-fit p-2 group hover:border-white cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out'>
							<div
								onClick={toggleRadio}
								className='w-fit h-fit border-2 border-white/50  group-hover:bg-white group-hover:shadow-xl group-hover:shadow-gold-500  transition-all duration-700 ease-in-out rounded-xl inline-flex justify-center items-center p-3 space-x-4'
							>
								<RadioIcon className='w-8 h-8 text-white/30 group-hover:text-black transition-all duration-700 ease-in-out stroke-2 group-hover:stroke-1' />
								<img
									src={state.radioActive ? animatedEqualizerColor : staticEqualizerGray}
									alt='equalizer'
									className='w-8 h-8 opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out animate-fadeIn'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Podcast;
