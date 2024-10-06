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
			className={`w-full h-fit sm:h-fit bg-black block border-t relative lg:pb-8  ${state.activeFooter && "relative"} z-40`}
		>
			<div className="w-full h-fit flex flex-row justify-start items-start">
				<div className="lg:w-3/4 h-fit lg:pt-4 w-2/3">
					<div className=" w-3/5 flex flex-col justify-center items-center ml-12 sm:ml-4">
						<h1 className="text-white font-normal font-montserrat text-sm lg:text-3xl py-4 uppercase text-center tracking-widest">
							NewsLetter
						</h1>
						<p className="text-white font-montserrat lg:text-lg text-sm font-thin text-center tracking-wider lg:block hidden">
							Be the first to receive updates about new episodes, ground
							breaking science, and more.
						</p>
						<div className="w-[90%] inline-flex sm:w-fit justify-end items-center lg:py-8 py-0 text-left group hidden">
							<input
								className="w-full h-12  text-white sm:text-sm group-hover:border-white border-white/50 sm:placeholder:text-white/50 sm:placeholder:text-center group-hover:shadow-lg group-hover:shadow-white/50 placeholder:text-white placeholder:tracking-widest bg-black/20 rounded-lg py-4 placeholder:text-left z-20 transition-all duration-200 ease-in-out"
								placeholder={
									state.isMobile ? "Notify Me" : "Enter Your Email Address"
								}
								type="text"
							/>
							<ArrowRightCircleIcon className="w-10 h-10 sm:hidden sm:h-6 sm:w-6 absolute mr-4 z-10   stroke-white/50 transition-all duration-150 ease-in-out group-hover:stroke-white" />
						</div>
						<div className="inline-flex w-full justify-center items-center py-2 sm:py-4">
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
										{/* <span className='sr-only'>{item.name}</span> */}
										<img
											className="lg:h-8 lg:w-8  h-6 w-6 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 hover:scale-125 "
											src={item.icon}
										/>
									</a>
								</div>
							))}
						</div>
						<div className="w-full mx-auto block  h-fit sm:mt-8">
							<h1 className=" lg:text-6xl text-lg tracking-widest font-montserrat py-2 whitespace-nowrap font-light uppercase text-center text-white/80">
								Skin Anarchy
							</h1>
							<p className="font-thin font-montserrat  text-sm text-wrap lg:text-lg sm:text-sm text-center  py-2 sm:py-4 whitespace-nowrap text-white/50">
								Copyright © 2022 Skin Anarchy. All rights reserved.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:inline-flex lg:space-x-8 space-x-0 text-white justify-center items-start mr-4 sm:w-full  sm:h-fit w-11/12 h-full lg:gap-4 py-4 lg:py-0">
					<div className="lg:w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center pt-0 lg:mt-4 lg:pt-6 w-3/4 text-white ">
						<h1 className="font-normal text-sm lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Episodes
						</h1>
						<div className="font-montserrat lg:text-2xl space-y-4 lg:grid text-white/50 text-sm hidden ">
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
					<div className="w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white ">
						<h1 className="font-normal text-sm lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Blog
						</h1>
						<div className="font-montserrat lg:text-2xl space-y-4 lg:grid text-white/50 text-sm hidden ">
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
					<div className="w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white ">
						<h1 className="font-normal text-sm lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Awards
						</h1>
						<div className="font-montserrat lg:text-2xl space-y-4 lg:grid text-white/50 text-sm hidden ">
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
					<div className="w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white ">
						<h1 className="font-normal text-sm lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Connect
						</h1>
						<div className="font-montserrat lg:text-2xl space-y-4 lg:grid text-white/50 text-sm hidden ">
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
					<div className="w-fit h-full sm:h-fit flex flex-col justify-start items-start sm:items-end sm:justify-center sm:pt-0 sm:mt-4 pt-6 sm:w-3/4 text-white ">
						<h1 className="font-normal text-sm lg:text-3xl font-montserrat lg:py-4 uppercase py-0 ">
							Account
						</h1>
						<div className="font-montserrat lg:text-2xl space-y-4 lg:grid text-white/50 text-sm hidden ">
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
			<PolicyBar />
		</div>
	);
};

export default Footer;
