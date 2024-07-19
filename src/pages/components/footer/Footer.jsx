import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import footerDataArray from "../../../assets/data/footer/footerDataArray";
import socialNav from "../../../assets/data/socialNav";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { userDeviceInfo } from "../../../utilities/utilities";
import PolicyBar from "../../disclaimer-privacy-policy/PolicyBar";
import ConnectForm from "../../connect/ContactForm";
import { FormComp, Modal, Button } from "../Components.jsx";
import { formStyle, inputStyle } from "../../../styles/responsiveStyling";

// import codingShieldsLogo from "../../assets/images/codingShieldsLogo.png";

const Footer = ({ handleModal }) => {
	const [state, setState] = useState({
		loading: false,
		success: false,
		error: false,
		message: "",
		activeFooter: false,
		isMobile: false,
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (userDeviceInfo()) {
			setState({
				...state,
				isMobile: true,
			})
		} else {
			setState({
				...state,
				isMobile: false,
			});
		}
	}, []);


	const handleModalClick = () => {
		handleModal();
	};
	const screenWidth = window.innerWidth;
	const buttonStyle = "  hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all ";
	return (
		<div className={`w-full h-fit sm:h-fit bg-black block border-t relative  ${state.activeFooter && "relative"} z-40`}>
			<div className='w-full h-fit flex flex-row justify-start items-start'>
				<div className='w-3/4 h-fit pt-4 sm:w-2/3'>
					<div className=' w-3/5 flex flex-col justify-center items-center ml-12 sm:ml-4'>
						<h1 className='text-white font-normal font-montserrat sm:text-sm text-3xl py-4 uppercase text-center tracking-widest'>NewsLetter</h1>
						<p className='text-white font-montserrat text-lg sm:text-sm font-thin text-center tracking-wider sm:hidden'>
							Be the first to receive updates about new episodes, ground breaking science, and more.
						</p>
						<div className='w-[90%] inline-flex sm:w-fit justify-end items-center py-8 sm:py-0 text-left group'>
							<input
								className='w-full h-12  text-white sm:text-sm group-hover:border-white border-white/50 sm:placeholder:text-white/50 sm:placeholder:text-center group-hover:shadow-lg group-hover:shadow-white/50 placeholder:text-white placeholder:tracking-widest bg-black/20 rounded-lg py-4 placeholder:text-left z-20 transition-all duration-200 ease-in-out'
								placeholder={state.isMobile ? "Notify Me" : "Enter Your Email Address"}
								type='text'
							/>
							<ArrowRightCircleIcon className='w-10 h-10 sm:hidden sm:h-6 sm:w-6 absolute mr-4 z-10  stroke-white/50 transition-all duration-150 ease-in-out group-hover:stroke-white' />
						</div>
						<div className='inline-flex w-full justify-center items-center py-2 sm:py-4'>
							{socialNav.map((item, id) => (
								<div key={id} className='w-fit mx-12 sm:mx-auto '>
									<a key={item.name} href={item.link} className='hover:cursor-pointer' target='_blank' rel='noreferrer'>
										{/* <span className='sr-only'>{item.name}</span> */}
										<img
											className='h-8 w-8  sm:h-6 sm:w-6 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 hover:scale-125 '
											src={item.icon}
										/>
									</a>
								</div>
							))}
						</div>
						<div className='w-full mx-auto block  h-fit sm:mt-8'>
							<h1 className=' text-6xl sm:text-2xl tracking-widest font-montserrat py-2 whitespace-nowrap font-light uppercase text-center text-white/80'>
								Skin Anarchy
							</h1>
							<p className='font-thin font-montserrat text-lg sm:text-sm text-center  py-2 sm:py-4 whitespace-nowrap text-white/50'>
								Copyright © 2022 Skin Anarchy. All rights reserved.
							</p>
						</div>
					</div>
				</div>
				<div className='inline-flex space-x-8 sm:space-x-0 text-white justify-center items-start sm:w-full  sm:h-fit w-11/12 h-full gap-4 sm:flex sm:flex-col sm:mt-4  sm:mx-auto sm:pb-4'>
					<div className='w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white '>
						<h1 className='font-normal sm:text-sm text-3xl font-montserrat py-4 uppercase sm:py-0 '>Episodes</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid sm:hidden indent-8'>
							{" "}
							<Button text='Current Episode' style={buttonStyle} to='podcast/current-podcast-episode' />
							<NavLink
								to='podcast/top-make-up-artists-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Make Up Artists
							</NavLink>
							<NavLink
								to='podcast/top-doctors-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Doctors
							</NavLink>
							<NavLink
								to='podcast/brand-founders-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Brand Founders
							</NavLink>
							<NavLink
								to='podcast/thought-leaders-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Thought Leaders
							</NavLink>
							<NavLink
								to='podcast/editors-and-journalists-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Editors and Journalists
							</NavLink>
							<NavLink
								to='podcast/celebrity-podcasts'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Celebrities
							</NavLink>
						</div>
					</div>
					<div className='w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white '>
						<h1 className='font-normal text-3xl sm:text-sm font-montserrat py-4 sm:py-0 uppercase sm:block  '>Blog</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid sm:hidden  indent-8'>
							<NavLink
								to='skin-anarchy-blog/beauty-culture'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Beauty Culture
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/fragrance'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Fragrance
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/podcast-summaries'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Podcast Summaries
							</NavLink>
							<NavLink
								to='skin-anarchy-blog/science-of-skin'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Science of Skin
							</NavLink>
						</div>
					</div>
					<div className='w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white '>
						<h1 className='font-normal text-3xl sm:text-sm font-montserrat py-4 uppercase sm:block '>Awards</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid sm:hidden indent-8'>
							<NavLink
								to='awards/science-of-skin-awards'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Science of Skin Awards
							</NavLink>
							<NavLink
								to='awards/top-picks'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Top Picks
							</NavLink>
							{/* <NavLink
								to='awards/master-class'
								className='hover:underline decoration-1 underline-offset-8 ease-in-out duration-500 hover:font-normal transition-all'
							>
								Master Class
							</NavLink> */}
						</div>
					</div>{" "}
					<div className='w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white '>
						<h1 className='font-normal text-3xl sm:text-sm font-montserrat py-4 sm:py-0 uppercase sm:block '>Connect</h1>
						<div className='font-thin font-montserrat font-2xl space-y-4 grid sm:hidden indent-8'>
							<Button
								style='indent-8 transition-all ease-in-out duration-500 hover:underline decoration-1 underline-offset-8 mr-auto'
								text='Get Featured On Our Show'
								onClick={handleModalClick}
							/>
							<Button
								style='indent-8 transition-all ease-in-out duration-500 hover:underline decoration-1 underline-offset-8 mr-auto'
								text='Become A Sponsor'
								onClick={handleModalClick}
							/>
							<Button
								style='indent-8 transition-all ease-in-out duration-500 hover:underline decoration-1 underline-offset-8 mr-auto'
								text='Support'
								onClick={() => navigate("/members-area/support")}
							/>
						</div>
					</div>
				</div>
			</div>
			<PolicyBar />
		</div>
	);
};

export default Footer;
