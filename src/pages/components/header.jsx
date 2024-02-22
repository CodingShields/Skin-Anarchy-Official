import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import whiteLogo from "../../assets/images/whiteLogo.png";
import logo from "../../assets/images/logo.png";

import Banner from "../homePage/comps/bannerContainer";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import doubleChevronUp from "../../assets/icons/doubleChevronUp.svg";
import AnimatedNavButton from "../components/buttons/AnimatedNavButton";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
	const user = UserAuth();

	console.log(user, "user");

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		navBarOpen: true,
		navigating: false,
	});

	const cards = [
		{
			name: "Home",
			link: "/MembersArea/Home",
		},
		{
			name: "About",
			link: "/MembersArea/About",
		},
		{
			name: "Connect",
			link: "/MembersArea/Connect",
		},
		{
			name: "Podcast",
			link: "/MembersArea/PodCast",
		},
		{
			name: "Top Picks",
			link: "/MembersArea/TopPicks",
		},
		{
			name: "Blog",
			link: "/MembersArea/Blog",
		},
		{
			name: "Master Class",
			link: "/MembersArea/MasterClass",
		},
		{
			name: "Science of Skin Awards",
			link: "/MembersArea/ScienceOfSkinAwards",
		},
		{
			name: "Account",
			link: "/MembersArea/Account",
		},
		{
			name: "Logout",
			link: "/MembersArea/Logout",
		},
	];

	useEffect(() => {
		setState({
			navBarOpen: true,
		});
	}, []);

	const handleNavBar = () => {
		setState({
			...state,
			navBarOpen: !state.navBarOpen,
		});
	};

	return (
		<div className='fixed z-30 w-full overflow-none'>
			<div className='flex flex-row p-0 m-auto w-max transition-all duration-700 ease-in-out'>
				<div
					className={
						state.navBarOpen
							? "text-center ease-in-out duration-1000 transition-all translate-x-100 mr-8 mt-8"
							: " brightness-100 bg-gold-500 bg-opacity-30 rounded-full py-6 px-12 text-center ease-in-out duration-1000 transition-all mt-10 mx-auto"
					}
				>
					<NavLink to='home'>
						<div className='w-full mx-auto '>
							<img src={whiteLogo} alt='logo' className='h-48 hover:animate-pulse' />
							<p className="text-white hover:animate-pulse">SKIN ANARCHY</p>
						</div>
					</NavLink>
					<AnimatedNavButton onClick={handleNavBar} />
				</div>
				<div
					className={
						state.navBarOpen
							? "flex flex-row rounded-xl p-2 border-2 border-gold-500  h-fit my-auto ease-in-out duration-200 transition-all scale-100"
							: "border-0 ease-in-out duration-200 transition-all w-0 scale-0 w-full"
					}
				>
					<div
						className={
							state.navBarOpen
								? "flex flex-row rounded-xl  bg-black text-gold-500 transition-all duration-1000 ease-in-out h-fit scale-100 my-auto"
								: "flex flex-row rounded-xl  bg-gold-500 transition-all duration-1000 ease-in-out h-fit translate-x-full scale-x-0 my-auto"
						}
					>
						{cards.map((card) => (
							<div
								onMouseEnter={() => setState({ ...state, navigating: true })}
								onMouseLeave={() => setState({ ...state, navigating: false })}
								key={card.name}
								className='flex flex-row p-4 px-12 '
							>
								<NavLink to={card.link}>
									<div className=' leading-1'>
										<h3 className='lg:text-2xl font-semibold hover:transition-all duration-200 ease-in-out hover:text-white hover:scale-125 '>{card.name}</h3>
									</div>
								</NavLink>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
