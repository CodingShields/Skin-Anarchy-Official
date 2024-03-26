import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import whiteLogo from "../../assets/images/whiteLogo.png";

import Banner from "../homePage/comps/bannerContainer";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import doubleChevronUp from "../../assets/icons/doubleChevronUp.svg";
import AnimatedNavButton from "../components/buttons/AnimatedNavButton";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		navBarOpen: true,
		navigating: false,
		selectedSubMenu: "",
		subMenuOpen: false,
		subMenuData: "",
		activeMenuItem: null, // Track active menu item for submenu positioning
	});

	const cards = [
		{
			name: "Home",
			link: "/members-area/home",
		},
		{
			name: "About",
			subMenu: [
				{
					name: "About Us",
					link: "/members-area/about",
				},
				{
					name: "Mission",
					link: "/members-area/about/mission",
				},
				{
					name: "Featured Press",
					link: "/members-area/about/featured-press",
				},
			],
		},

		{
			name: "Podcast",
			link: "/members-area/podcast",
			subMenu: [
				{
					name: "Latest Episode",
					link: "/members-area/podcast",
				},
				{
					name: "Past Episodes",
					link: "/members-area/podcast/podcast-summaries",
				},
			],
		},
		{
			name: "Awards",
			subMenu: [
				{
					name: "Master Class",
					link: "/members-area/master-class",
				},
				{
					name: "Science of Skin Awards",
					link: "/members-area/science-of-skin-awards",
				},
			],
		},
		{
			name: "Skin Anarchy Blog",
			link: "/members-area/blog",
			// subMenu: [
			// 	{
			// 		name: "Beauty Culture",
			// 		link: "/members-area/blog/beauty-culture",
			// 	},
			// 	{
			// 		name: "Fragrance",
			// 		link: "/members-area/blog/fragrance",
			// 	},
			// 	{
			// 		name: "Podcast Summaries",
			// 		link: "/members-area/blog/podcast-summaries",
			// 	},
			// 	{
			// 		name: "Science of Skin",
			// 		link: "/members-area/blog/science-of-skin",
			// 	},
			// ],
		},
		{
			name: "Connect",
			link: "/members-area/connect",
		},
		{
			name: "Yugen Magazine",
			link: "/members-area/yugen-magazine",
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
	const handleMenuMouseEnter = (name, subMenu) => {
		setState((prevState) => ({
			...prevState,
			subMenuOpen: true,
			subMenuData: subMenu || [],
			activeMenuItem: name,
		}));
	};

	const handleMenuMouseLeave = () => {
		setState((prevState) => ({
			...prevState,
			subMenuOpen: false,
			activeMenuItem: null,
		}));
	};

	return (
		<div className='z-30 h-screen w-48 absolute'>
			<div
				onMouseEnter={handleNavBar}
				onMouseLeave={handleNavBar}
				className={
					!state.navBarOpen
						? "flex flex-col justify-evenly items-start border-r-2 border-white bg-black fixed h-screen w-48 ease-in-out duration-700 transition-all z-40 "
						: "flex flex-col justify-evenly  border-r-2 bg-white border-white fixed h-screen w-48 -translate-x-[220px] ease-in-out duration-700 transition-all z-40"
				}
			>
				<div className='w-fit ml-8'>
					<NavLink to='home'>
						<img src={whiteLogo} alt='logo' className='xl:h-24 xxl:h-64 hover:animate-pulse mx-auto ' />
					</NavLink>
				</div>

				<div className='flex flex-col w-fit space-y-2 justify-start'>
					{cards.map((card, index) => (
						<div
							key={index}
							className='relative'
							onMouseEnter={() => handleMenuMouseEnter(card.name, card.subMenu)}
							onMouseLeave={handleMenuMouseLeave}
						>
							<div className='flex flex-row justify-start items-center lg:py-2 p-4 lg:px-8 xxl:px-12 hover:scale-125  group hover:translate-x-5 transition-all duration-300 ease-in-out group hover:cursor-pointer'>
								<NavLink to={card.link}>
									<div className=' leading-1 w-full'>
										<h3 className='lg:text-sm font-glacialRegular group-hover:underline font-thin text-white'>{card.name}</h3>
									</div>
								</NavLink>
								{card.subMenu ? <img src={doubleChevronDown} alt='chevron' className='w-4 h-4 ml-2 ' /> : null}
							</div>
							{state.subMenuOpen && state.activeMenuItem === card.name && card.subMenu ? (
								<div className='absolute left-1/2 top-0 mt-2 z-20 translate-x-8 ease-in-out transition-all shadow-2xl animate-fadeIn'>
									<div className='bg-black p-2 rounded-md border-b-2 border-r-2 border-white shadow-md shadow-white'>
										{state.subMenuData.map((subMenu, subIndex) => (
											<NavLink to={subMenu.link} key={subIndex}>
												<h3 className='lg:text-sm font-glacialRegular font-thin text-white hover:font-semibold whitespace-nowrap py-2 hover:underline'>
													{subMenu.name}
												</h3>
											</NavLink>
										))}
									</div>
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;