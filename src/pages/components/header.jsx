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
		<div className='z-30 w-full overflow-none bg-black'>
			<div className='flex flex-row justify-between'>
				<div className='text-center ease-in-out duration-1000 transition-all translate-x-100 '>
					<NavLink to='home'>
						<div className='w-full mx-auto ml-4 mt-4'>
							<img src={whiteLogo} alt='logo' className='xl:h-36 xxl:h-72 hover:animate-pulse mx-auto' />
							<p className=' hover:animate-pulse mx-auto font-playfair text-white text-3xl'>SKIN ANARCHY</p>
						</div>
					</NavLink>
				</div>

				<div className='flex flex-row'>
					{cards.map((card) => (
						<div
							onMouseEnter={() => setState({ ...state, navigating: true })}
							onMouseLeave={() => setState({ ...state, navigating: false })}
							key={card.name}
							className='flex flex-row lg:py-2 p-4 lg:px-8 xxl:px-12 '
						>
							<NavLink to={card.link}>
								<div className=' leading-1'>
									<h3 className='lg:text-sm font-glacialRegular font-thin text-white'>{card.name}</h3>
								</div>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
