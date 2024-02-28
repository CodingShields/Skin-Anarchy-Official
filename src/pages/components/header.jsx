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
			link: "/members-area/home",
		},
		{
			name: "About",
			link: "/members-area/about",
		},
		{
			name: "Connect",
			link: "/members-area/connect",
		},
		{
			name: "Podcast",
			link: "/members-area/podcast",
		},
		{
			name: "Top Picks",
			link: "/members-area/top-picks",
		},
		{
			name: "Blog",
			link: "/members-area/blog",
		},
		{
			name: "Master Class",
			link: "/members-area/master-class",
		},
		{
			name: "Science of Skin Awards",
			link: "/members-area/science-of-skin-awards",
		},
		{
			name: "Account",
			link: "/members-area/account",
		},
		{
			name: "Logout",
			link: "/members-area/log-out",
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
			<div className='flex flex-row  m-auto w-max transition-all duration-700 ease-in-out'>
				<div
					className={
						state.navBarOpen
							? "text-center ease-in-out duration-1000 transition-all translate-x-100 lg:mr-6 mr-8 lg:mt-2 mt-8"
							: " brightness-100 bg-gold-500 bg-opacity-30 rounded-9xl hover:rounded-b-3xl  py-6 px-12 lg:py-2 lg:px-4 text-center ease-in-out duration-1000 transition-all mt-10 mx-auto"
					}
				>
					<NavLink to='home'>
						<div className='w-full mx-auto '>
							<img src={whiteLogo} alt='logo' className='xl:h-24 xxl:h-72 hover:animate-pulse' />
							<p className='text-white hover:animate-pulse'>SKIN ANARCHY</p>
						</div>
					</NavLink>
					<AnimatedNavButton onClick={handleNavBar} />
				</div>
				<div
					className={
						state.navBarOpen
							? "flex flex-row  p-2 border-2 border-gold-500  h-fit my-auto ease-in-out duration-200 transition-all scale-100 rounded-2xl"
							: "border-0 ease-in-out duration-200 transition-all w-0 scale-0 w-full"
					}
				>
					<div
						className={
							state.navBarOpen
								? "flex flex-row   bg-black text-gold-500 transition-all duration-1000 ease-in-out h-fit scale-100 my-auto"
								: "flex flex-row   bg-gold-500 transition-all duration-1000 ease-in-out h-fit translate-x-full scale-x-0 my-auto"
						}
					>
						{cards.map((card) => (
							<div
								onMouseEnter={() => setState({ ...state, navigating: true })}
								onMouseLeave={() => setState({ ...state, navigating: false })}
								key={card.name}
								className='flex flex-row lg:py-2 p-4 lg:px-8 xxl:px-12 '
							>
								<NavLink to={card.link}>
									<div className=' leading-1'>
										<h3 className='lg:text-sm font-semibold  hover:transition-all duration-200 ease-in-out hover:text-white hover:scale-125 '>
											{card.name}
										</h3>
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
