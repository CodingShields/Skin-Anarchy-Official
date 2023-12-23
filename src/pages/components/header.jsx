import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import whiteLogo from "../../assets/images/whiteLogo.png";
import silkBG from "../../assets/video/silkBG.mp4";
import blackSilk from "../../assets/images/blackSilk.jpeg";
import Banner from "../homePage/comps/bannerContainer";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import doubleChevronUp from "../../assets/icons/doubleChevronUp.svg";
const Header = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		navBarOpen: false,
	});

	const cards = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/About",
		},
		{
			name: "Connect",
			link: "/Connect",
		},
		{
			name: "Podcast",
			link: "/PodCast",
		},
		{
			name: "Top Picks",
			link: "/TopPicks",
		},
		{
			name: "Blog",
			link: "/Blog",
		},
		{
			name: "Science of Skin Awards",
			link: "/ScienceOfSkinAwards",
		},
		{
			name: "Admin",
			link: "/Admin",
		},
		{
			name: "Login",
			link: "/Login",
		},
		{
			name: "Sign Up",
			link: "/SignUp",
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

	window.onscroll = function () {
		setState({
			...state,
			navBarOpen: false,
		});
	};
	useEffect(() => {
		if (state.navBarOpen) {
			setTimeout(() => {
				setState({
					navBarOpen: false,
				});
			}, 6500);
		}
	}, [state.navBarOpen]);

	return (
		<div
			className={
				state.navBarOpen
					? "fixed z-30 w-full overflow-none bg-opacity-20 bg-zinc-800 place-content-center transition ease-in-out duration-700"
					: "fixed z-30 w-full overflow-none bg-opacity-20 bg-zinc-800 place-content-center transition-transform ease-in-out duration-700 -translate-y-64 "
			}
		>
			<div className='flex flex-row h-f p-0 m-auto w-max '>
					<NavLink to='/'>
						<div className='flex flex-row w-full mr-4 overflow-hidden place-items-center'>
							<img src={whiteLogo} alt='logo' className='h-48 mt-4 mb-4 mr-4 hover:animate-pulse' />
							<p className='text-white hover:animate-pulse'>SKIN ANARCHY</p>
						</div>
					</NavLink>
					<div className={"flex flex-row mb-auto max-w-fit sm:mt-20 lg:mx-0 lg:max-w-auto rounded-xl bg-white/10 "}>
						{cards.map((card) => (
							<div key={card.name} className='flex flex-row p-4 ml-12 mr-12 '>
								<NavLink to={card.link}>
									<div className='text-base leading-1'>
										<h3 className='font-semibold text-black text-white hover:font-extrabold hover:text-black hover:animate-pulse'>
											{card.name}
										</h3>
									</div>
								</NavLink>
							</div>
						))}
					</div>
			</div>
			<img
				onClick={handleNavBar}
				src={!state.navBarOpen ? doubleChevronDown : doubleChevronUp}
				className={
					state.navBarOpen
						? "relative bottom-0 left-0 right-0 w-8 h-8 m-auto mt-0 animate-pulse h-sm"
						: "relative bottom-0 left-0 right-0 w-8 h-8 m-auto mt-12 animate-pulse h-sm"
				}
			/>
		</div>
	);
};

export default Header;
