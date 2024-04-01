import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import whiteLogo from "../../assets/images/whiteLogo.png";
import Banner from "../homePage/comps/bannerContainer";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import doubleChevronUp from "../../assets/icons/doubleChevronUp.svg";
import AnimatedNavButton from "../components/buttons/AnimatedNavButton";
import { UserAuth } from "../../context/AuthContext";
import { useNavStoreActions } from "../../stateStore/useNavStateStore";
import { useNavStore } from "../../stateStore/useNavStateStore";
import "../../styles/custom.css";

const cards = [
	{
		name: "Home",
		link: "/members-area/home",
	},
	{
		name: "About Us",
		subMenu: [
			{
				name: "About Us",
				link: "/members-area/about/about-us",
			},
			{
				name: "Mission",
				link: "/members-area/about/mission-statement",
			},
			{
				name: "Featured Press",
				link: "/members-area/about/featured-press",
			},
		],
	},

	{
		name: "Podcast",
		link: "/members-area/podcast/current-podcast-episode",
		subMenu: [
			{
				name: "Current Podcast Episode",
				link: "/members-area/podcast/current-podcast-episode",
			},
			{
				name: "Top Make Up Artist Podcasts",
				link: "/members-area/podcast/top-make-up-artists-podcasts",
			},
			{
				name: "Top Doctor Podcasts",
				link: "/members-area/podcast/top-doctors-podcasts",
			},
			{
				name: "Brand Founder Podcasts",
				link: "/members-area/podcast/brand-founders-podcasts",
			},
			{
				name: "Thought Leader Podcasts",
				link: "/members-area/podcast/thought-leaders-podcasts",
			},
			{
				name: "EDITOR AND JOURNALIST PODCASTS",
				link: "/members-area/podcast/editors-and-journalists-podcasts",
			},
			{
				name: "Celebrity Podcasts",
				link: "/members-area/podcast/celebrity-podcasts",
			},
		],
	},
	{
		name: "Awards",
		subMenu: [
			{
				name: "Master Class",
				link: "/members-area/awards/master-class",
			},
			{
				name: "Science of Skin Awards",
				link: "/members-area/awards/science-of-skin-awards",
			},
			{
				name: "Top Picks",
				link: "/members-area/awards/top-picks",
			},
		],
	},
	{
		name: "Skin Anarchy Blog",
		// subMenu: [
		// 	{
		// 		name: "Blog Home",
		// 		link: "/members-area/awards/blog-home",
		// 	},
		// 	{
		// 		name: "Blog Library",
		// 		link: "/members-area/awards/science-of-skin-awards",
		// 	},
		// ],
		subMenu: [
			{
				name: "Beauty Culture",
				link: "/members-area/skin-anarchy-blog/beauty-culture",
			},
			{
				name: "Fragrance",
				link: "/members-area/skin-anarchy-blog/fragrance",
			},
			{
				name: "Podcast Summaries",
				link: "/members-area/skin-anarchy-blog/podcast-summaries",
			},
			{
				name: "Science of Skin",
				link: "/members-area/skin-anarchy-blog/science-of-skin",
			},
		],
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
	const [isActive, setIsActive] = useState(false);

	const navBarActive = useNavStore((state) => state.navBarActive);
	const { setNavBarActive } = useNavStoreActions((actions) => actions);
	const { resetForm } = useNavStoreActions((actions) => actions);

	useEffect(() => {}, [navBarActive]);

	useEffect(() => {
		setState({
			navBarOpen: true,
		});
		setIsActive(false);
	}, []);

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

	useEffect(() => {
		resetForm();
	}, []);

	const handleNavBarClick = () => {
		setNavBarActive(!navBarActive);
		setIsActive(!isActive);
		console.log(navBarActive);
		console.log(isActive);
	};

	const handleNavBarRender = () => {
		setNavBarActive(!navBarActive);
		setIsActive(!isActive);
	};

	return (
		<div className='h-screen navbar fixed'>
			{/* <div
				// onMouseEnter={handleNavBar}
				// onMouseLeave={handleNavBar}
				className='flex flex-col justify-evenly items-start bg-black fixed h-screen w-48 ease-in-out duration-700 transition-all z-40 '
			> */}
			{/* <div className='w-fit ml-8'>
					<NavLink to='home'>
						<img src={whiteLogo} alt='logo' className='xl:h-24 xxl:h-64 hover:animate-pulse mx-auto ' />
					</NavLink>
				</div> */}

			<div onClick={handleNavBarClick} className={`hamburger-menu mt-4 ml-4 ${isActive ? "active" : ""}`}>
				<div className={`bar ${isActive ? "active" : ""}`}></div>
			</div>
			<div className={`links mt-4 ${isActive ? "active" : ""} `}>
				{cards.map((card, index) => (
					<div key={index} onMouseEnter={() => handleMenuMouseEnter(card.name, card.subMenu)} onMouseLeave={handleMenuMouseLeave}>
						<div className='navLink flex flex-row justify-start items-center lg:py-2 p-4 lg:px-8 xxl:px-12 hover:scale-125  group hover:translate-x-5 transition-all duration-300 ease-in-out group hover:cursor-pointer uppercase'>
							<NavLink onClick={handleNavBarRender} to={card.link}>
								{card.name}
							</NavLink>
							{card.subMenu ? <img src={doubleChevronDown} alt='chevron' className='w-4 h-4 ml-2 ' /> : null}
						</div>
						{state.subMenuOpen && state.activeMenuItem === card.name && card.subMenu ? (
							<div className='relative left-0 top-0 mt-2 z-20 translate-x-[24px]  transition-all shadow-2xl '>
								<div className='bg-black p-2 rounded-md   translate-x-[36px] animate-fadeIn duration-500 ease-in-out'>
									{state.subMenuData.map((subMenu, subIndex) => (
										<NavLink to={subMenu.link} key={subIndex}>
											<h3
												onClick={handleNavBarRender}
												className='lg:text-sm font-glacialRegular font-thin text-white hover:font-semibold whitespace-nowrap py-2 hover:underline uppercase'
											>
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
	);
};

export default Header;
