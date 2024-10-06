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
import { UserAuth } from "../../../context/AuthContext";
import whiteLogo from "../../../assets/images/logos/white-logo.png";
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
	const { logout } = UserAuth();

	useEffect(() => {
		if (userDeviceInfo()) {
			setState({
				...state,
				isMobile: true,
			});
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
	return (
		<div
			className={`w-full h-fit bg-black block border-t relative lg:pb-8  ${state.activeFooter && "relative"} z-40`}
		>
			<img
				src={whiteLogo}
				className="w-fit lg:h-full absolute top-2 lg:left-0 lg:opacity-5 opacity-10  object-cover object-center"
			/>
			<div className="w-fit h-fit flex flex-row justify-between items-start">
				<div className=" w-1/2 flex flex-col justify-center items-center mr-auto px-2">
					<h1 className="text-white font-normal font-montserrat text-lg lg:text-3xl py-4 uppercase text-center tracking-widest">
						NewsLetter
					</h1>
					<p className="text-white font-montserrat lg:text-lg text-sm font-thin text-center lg:w-3/4  tracking-wider lg:block hidden ">
						Be the first to receive updates about new episodes, ground breaking
						science, and more.
					</p>
					<p className="text-white font-montserrat lg:text-lg text-sm font-thin text-center lg:w-3/4  tracking-wider lg:hidden leading-6 pb-2">
						Receive updates about new episodes, ground breaking science, and
						more.
					</p>
					<div className="inline-flex lg:w-1/2 w-full justify-end items-center lg:py-8 py-4 group relative">
						<input
							className="w-full lg:h-12 h-8 placeholder:text-left text-white text-sm group-hover:border-white border-white/50 placeholder:text-white/50  group-hover:shadow-lg group-hover:shadow-white/50 placeholder:text-white placeholder:tracking-widest bg-black/20 rounded-lg py-4 z-20 transition-all duration-200 ease-in-out"
							placeholder={
								state.isMobile ? "Email Address" : "Enter Your Email Address"
							}
							type="text"
						/>
						<ArrowRightCircleIcon className="lg:w-8 lg:h-8 h-6 w-6 absolute lg:mr-4 mr-2 z-10 lg:top-10 right-0 stroke-white/50 transition-all duration-150 ease-in-out group-hover:stroke-white" />
					</div>
					<div className="inline-flex w-3/4 justify-center items-start lg:py-4 py-0">
						{socialNav.map((item, id) => (
							<div
								key={id}
								className="w-fit mx-12 sm:mx-auto "
							>
								<a
									key={item.name}
									href={item.link}
									className="hover:cursor-pointer"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="lg:h-8 lg:w-8  h-6 w-6 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 hover:scale-125 "
										src={item.icon}
									/>
								</a>
							</div>
						))}
					</div>
					<div className="lg:w-fit lg:mx-auto lg:block h-fit relative hidden">
						<h1 className=" lg:text-6xl text-lg tracking-widest font-montserrat py-2 whitespace-nowrap font-light uppercase text-center text-white/80">
							Skin Anarchy
						</h1>
						<p className="font-thin font-montserrat  text-sm text-wrap lg:text-lg sm:text-sm text-center  py-2 sm:py-4 whitespace-nowrap text-white/50">
							Copyright © 2022 Skin Anarchy. All rights reserved.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row lg:space-x-16 space-y-4 text-white justify-center items-start sm:h-fit h-full pt-4 lg:py-0 w-10/12 lg:ml-24">
					<div className="h-fit flex flex-col lg:justify-start justify-center items-start pt-0 lg:mt-4 lg:text-white text-white/70 lg:px-4 w-1/2 mx-auto">
						<h1 className="font-normal text-lg lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Episodes
						</h1>
						<div className="font-montserrat lg:text-lg min-w-max  space-y-4 lg:grid text-white/50 text-sm hidden ">
							<NavLink
								to="podcast/current-podcast-episode"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Current Episode
							</NavLink>
							<NavLink
								to="podcast/top-make-up-artists-podcasts"
								className=" ease-in-out duration-500  transition-all"
							>
								Top Make Up Artists
							</NavLink>
							<NavLink
								to="podcast/top-doctors-podcasts"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Top Doctors
							</NavLink>
							<NavLink
								to="podcast/brand-founders-podcasts"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Brand Founders
							</NavLink>
							<NavLink
								to="podcast/thought-leaders-podcasts"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Thought Leaders
							</NavLink>
							<NavLink
								to="podcast/editors-and-journalists-podcasts"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Editors and Journalists
							</NavLink>
							<NavLink
								to="podcast/celebrity-podcasts"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Celebrities
							</NavLink>
						</div>
					</div>
					<div className="h-fit flex flex-col lg:justify-start justify-center items-start pt-0 lg:mt-4 lg:text-white text-white/70 lg:px-4 w-1/2 mx-auto">
						<h1 className="font-normal text-lg lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Blog
						</h1>
						<div className="font-montserrat lg:text-lg min-w-max  space-y-4 lg:grid text-white/50 text-sm hidden ">
							<NavLink
								to="skin-anarchy-blog/beauty-culture"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Beauty Culture
							</NavLink>
							<NavLink
								to="skin-anarchy-blog/fragrance"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Fragrance
							</NavLink>
							<NavLink
								to="skin-anarchy-blog/podcast-summaries"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Podcast Summaries
							</NavLink>
							<NavLink
								to="skin-anarchy-blog/science-of-skin"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Science of Skin
							</NavLink>
						</div>
					</div>
					<div className="h-fit flex flex-col lg:justify-start justify-center items-start pt-0 lg:mt-4 lg:text-white text-white/70 lg:px-4 w-1/2 mx-auto">
						<h1 className="font-normal text-lg lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Awards
						</h1>
						<div className="font-montserrat lg:text-lg min-w-max  space-y-4 lg:grid text-white/50 text-sm hidden ">
							<NavLink
								to="awards/science-of-skin-awards"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Science of Skin Awards
							</NavLink>
							<NavLink
								to="awards/top-picks"
								className=" ease-in-out duration-500 hover:text-white transition-all"
							>
								Top Picks
							</NavLink>
							{/* <NavLink
								to='awards/master-class' className=' ease-in-out duration-500  transition-all'							>
								Master Class
							</NavLink> */}
						</div>
					</div>
					<div className="h-fit flex flex-col lg:justify-start justify-center items-start pt-0 lg:mt-4 lg:text-white text-white/70 lg:px-4 w-1/2 mx-auto">
						<h1 className="font-normal text-lg lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Connect
						</h1>
						<div className="font-montserrat lg:text-lg min-w-max  space-y-4 lg:grid text-white/50 text-sm hidden ">
							<Button
								style=" ease-in-out duration-500 hover:text-white transition-all text-left"
								text="Get Featured On Our Show"
								onClick={handleModalClick}
							/>
							<Button
								style=" ease-in-out duration-500 hover:text-white transition-all text-left"
								text="Become A Sponsor"
								onClick={handleModalClick}
							/>
							<Button
								style=" ease-in-out duration-500 hover:text-white transition-all text-left"
								text="Support"
								onClick={() => navigate("/members-area/support")}
							/>
						</div>
					</div>
					<div className="h-fit flex flex-col lg:justify-start justify-center items-start pt-0 lg:mt-4 lg:text-white text-white/70 lg:px-4 w-1/2 mx-auto">
						<h1 className="font-normal text-lg lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Account
						</h1>
						<div className="font-montserrat lg:text-lg min-w-max  space-y-4 lg:grid text-white/50 text-sm hidden ">
							<Button
								style=" ease-in-out duration-500 hover:text-white transition-all text-left"
								text="Settings"
								onClick={handleModalClick}
							/>
							<Button
								style=" ease-in-out duration-500 hover:text-white transition-all text-left"
								text="Logout"
								onClick={logout}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden h-fit w-full relative">
				<div className="w-screen lg:hidden">
					<h1 className="text-xl tracking-widest font-montserrat py-2 whitespace-nowrap font-light uppercase text-center text-white">
						Skin Anarchy
					</h1>
					<p className="font-montserrat  text-sm text-wrap lg:text-lg sm:text-sm text-center  py-2 whitespace-nowrap text-white/50">
						Copyright © 2022 Skin Anarchy. All rights reserved.
					</p>
				</div>
			</div>
			<PolicyBar />
		</div>
	);
};

export default Footer;
