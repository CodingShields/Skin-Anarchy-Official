import React, { useState, useRef, useEffect } from "react";
import HighlightMenu from "./HighlightMenu";
import goldLogo from "../../../assets/images/logos/goldLogo.png";
import NavBarDropDown from "./NavBarDropDown";
// import doubleChevronDown from "../../../assets/icons/doubleChevronDown.svg";
// import NavBarButton from "./NavBarButton";
// import NavBarMenu from "./NavBarMenu";
// import NavBarMenuItem from "./NavBarMenuItem";
// import NavBarMenuDropDown from "./NavBarMenuDropDown";
import makeup from "../../../assets/images/interviewCategories/makeup.png";
import celebs from "../../../assets/images/interviewCategories/celebs.png";
import brandFounders from "../../../assets/images/interviewCategories/brandFounders.png";
import Button from "../button/Button";

const about = [
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
];

const TopMakeupArtists = [
	{
		name: "Mario Dedivanovic",
		image: "",
		link: "",
	},
	{
		name: "Danessa Myricks",
		image: "",
		link: "",
	},
	{
		name: "Sir John",
		image: "",
		link: "",
	},
];

const TopDoctors = [
	{
		name: "Dr. Michelle Henry",
		image: "",
		link: "",
	},
	{
		name: "Dr. Dennis Gross",
		image: "",
		link: "",
	},
	{
		name: "Dr Yannis",
		image: "",
		link: "",
	},
];

const BrandFounders = [
	{
		name: "Jen Sincero",
		image: "",
		link: "",
	},
	{
		name: "Rich Gersten",
		image: "",
		link: "",
	},
	{
		name: "Annie Jackson of Credo",
		image: "",
		link: "",
	},
];

const ThoughtLeaders = [
	{
		name: "Jessica Cruel of allure",
		image: "",
		link: "",
	},
	{
		name: "Jill Manoff of Glossy",
		image: "",
		link: "",
	},
	{
		name: "Elise Tabin",
		image: "",
		link: "",
	},
];

const EditorsAndJournalists = [
	{
		name: "Pacifica beauty founder Brook Harvey-taylor",
		image: "",
		link: "",
	},
	{
		name: "Charles Rosier of AUGUSTINUS BADER",
		image: "",
		link: "",
	},
	{
		name: "Camila Pierotti of Sol De Janeiro ",
		image: "",
		link: "",
	},
];

const Celebrities = [
	{
		name: "Torrey DeVitto",
		image: "",
		link: "",
	},
	{
		name: "Torrey DeVitto",
		image: "",
		link: "",
	},
	{
		name: "Demi Tebow ",
		image: "",
		link: "",
	},
];

const episodes = [
	{
		name: "Current Episode",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Top Makeup Artists",
		link: "/members-area/podcast/top-make-up-artists-podcasts",
	},
	{
		name: "Top Doctors",
		link: "/members-area/podcast/top-doctors-podcasts",
	},
	{
		name: "Brand Founders",
		link: "/members-area/podcast/brand-founders-podcasts",
	},
	{
		name: "Thought Leaders",
		link: "/members-area/podcast/thought-leaders-podcasts",
	},
	{
		name: "Editors And Journalists",
		link: "/members-area/podcast/editors-and-journalists-podcasts",
	},
	{
		name: "Celebrities",
		link: "/members-area/podcast/celebrity-podcasts",
	},
];

const awards = [
	// {
	// 	name: "Master Class",
	// 	link: "/members-area/awards/master-class",
	// },
	{
		name: "Science of Skin Awards",
		link: "/members-area/awards/science-of-skin-awards",
	},
	{
		name: "Top Picks",
		link: "/members-area/awards/top-picks",
	},
];
const blog = [
	{
		name: "Beauty Culture",
		link: "/members-area/skin-anarchy-blog/beauty-culture",
	},
	{
		name: "Fragrance",
		link: "/members-area/skin-anarchy-blog/fragrance",
	},
	{
		name: "Episode Summaries",
		link: "/members-area/skin-anarchy-blog/podcast-summaries",
	},
	{
		name: "Science of Skin",
		link: "/members-area/skin-anarchy-blog/science-of-skin",
	},
];
const blogHighlight = [
	{
		name: "Makeup By Mario",
		description: " Launches Most Requested Product: Learning About SURREALSKIN AWAKENING CONCEALER",
		guest: "Mario Dedivanovic ",
		image: makeup,
		link: "https://open.spotify.com/episode/7GRct64o58RL4hnWUGqVmz?si=CAVOTN_7TAObZOthErhCaQ ",
	},
	{
		name: "Celebrity Tia Mowry",
		description: "Podcast interview with Tia Mowry, Founder of ‘4U by Tia’ Haircare",
		guest: "Tia Mowry",
		image: celebs,
		link: "https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=k_wuyUXbRdeQqhsqTvhiMA ",
	},
	{
		name: "Surgically-Precise Skincare",
		description: "Surgically-Precise Skincare Is The Best Option For Clinically Proven Results ft. 111SKIN",
		guest: "Dr Yannis Alexandrides ",
		image: brandFounders,
		link: "https://open.spotify.com/episode/7dZVBWXPC09ssig7cKcbUb?si=s78nsKmQQKqq3zl6FBAqtA 	",
	},
];

const connect = [
	{
		name: "Get Featured On Our Show",
		link: "/members-area/connect/get-featured-on-our-show",
	},
	{
		name: "Join Our Team",
		link: "/members-area/connect/join-our-team",
	},
	{
		name: "Become A Sponsor",
		link: "/members-area/connect/become-a-sponsor",
	},
];

const account = [
	{
		name: "My Account",
		link: "/members-area/account/my-account",
	},
	{
		name: "Logout",
		link: "/logout",
	},
];

const episodesArray = [TopMakeupArtists, TopDoctors, BrandFounders, ThoughtLeaders, EditorsAndJournalists, Celebrities];
console.log(episodesArray, "episodesArray");
const mainNavBar = ["home", "about", "episodes", "blog", "awards", "yugen", "connect", "account"];

const buttonStyle = "uppercase font-thin underlineAnimate subpixel-antialiased tracking-[6px] text-white text-xl";
const smallMenuclassName =
	"uppercase py-4 animate-fadeIn w-fit px-24 translate-x-[-400px] bg-char-900 text-white font-montserrat w-fit gap-12 text-[22px] flex flex-col translate-y-[50px] absolute bg-black transition-all duration-500 ease-in-out rounded-b-xl";
const largeMenuclassName =
	"uppercase py-4 animate-fadeIn w-full px-24 translate-x-[-800px] bg-char-900 text-white font-montserrat w-fit gap-12 text-[22px] flex flex-row translate-y-[50px] absolute bg-black transition-all duration-500 ease-in-out rounded-b-xl";
const navMenu = "text-white font-montserrat text-3xl uppercase tracking-[2px] flex flex-col gap-14 pb-12 w-[300px]";
const highlightMenu = "text-white font-montserrat  uppercase tracking-[2px] flex flex-row justify-center items-center w-3/4";
const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [subMenuIndex, setSubMenuIndex] = useState(null);
	const [menu, setMenu] = useState("");
	const menuRef = useRef(null);

	const handleClick = (e) => {
		const currentMenu = e.target.name;
		setMenu(currentMenu);
		if (open && (currentMenu === "blog" || currentMenu === "episodes" || currentMenu === "awards")) {
			setOpen(open);
		} else {
			setOpen(!open);
		}
	};

	const handleSubMenuHover = (item, index) => {
		console.log(index);
		setSubMenuIndex(index);
	};

	useEffect(() => {
		// Function to close menu when clicked outside
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setOpen(false);
			}
		};
		// Add event listener when component mounts
		document.addEventListener("mousedown", handleClickOutside);
		// Cleanup function to remove event listener when component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={menuRef} id='menu' className='w-full h-fit'>
			<div className='w-3/4 h-full flex flex-row justify-between items-center mx-auto'>
				<Button className={buttonStyle} text={mainNavBar[0]} onClick={handleClick} to={"/members-area/home"}></Button>
				<Button className={buttonStyle} text={mainNavBar[1]} onClick={handleClick} to={"/members-area/about-us"}></Button>
				<Button className={buttonStyle} text={mainNavBar[2]} onClick={handleClick}></Button>
				<Button className={buttonStyle} text={mainNavBar[3]} onClick={handleClick}></Button>

				<img src={goldLogo} alt='logo' className='w-18 h-18' />
				<Button className={buttonStyle} text={mainNavBar[4]} onClick={handleClick}></Button>
				<Button className={buttonStyle} text={mainNavBar[5]} to={"/members-area/yugen"}></Button>
				<Button className={buttonStyle} text={mainNavBar[6]}></Button>
				<Button className={buttonStyle} text={mainNavBar[7]}></Button>
			</div>
			<div ref={menuRef} className='w-full'>
				<NavBarDropDown open={open} menu={menu} text={"episodes"}>
					<div className='flex flex-row w-full justify-around items-center'>
						<div className='w-1/2 h-fit flex flex-col space-y-12 py-12 '>
							<h1 className='uppercase text-center text-white underline text-3xl font-montserrat font-thin underline-offset-8'>Categories</h1>
							{episodes.map((item, index) => {
								return (
									<div
										onMouseEnter={() => handleSubMenuHover(item, index)}
										key={index}
										className='uppercase text-white text-xl font-montserrat font-thin ml-4 hover:underline transition-all duration-500 ease-in-out text-center '
									>
										<a href={item.link}>{item.name}</a>
									</div>
								);
							})}
						</div>
						<div className="w-full flex flex-row justify-evenly">
							{episodesArray[subMenuIndex]?.map((item, index) => {
								return (
									<div key={index} className='w-full h-full'>
										<div>
											<h1 className='uppercase text-white text-xl font-montserrat font-thin whitespace-nowrap'>{item.name}</h1>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</NavBarDropDown>
				<NavBarDropDown open={open} menu={menu} text={"blog"}>
					<div className='w-1/4 h-fit flex flex-col space-y-12 py-12 '>
						<h1 className='uppercase text-center text-white underline text-3xl font-montserrat font-thin underline-offset-8'>Categories</h1>
						{blog.map((item, index) => {
							return (
								<div
									onMouseEnter={() => handleSubMenuHover(item.name)}
									key={index}
									className='uppercase text-white text-xl font-montserrat font-thin ml-4 hover:underline transition-all duration-500 ease-in-out text-center '
								>
									<a href={item.link}>{item.name}</a>
								</div>
							);
						})}
					</div>
				</NavBarDropDown>
				<NavBarDropDown open={open} menu={menu} text={"awards"}>
					<div className='w-1/4 h-fit flex flex-col space-y-12 py-12 '>
						<h1 className='uppercase text-center text-white underline text-3xl font-montserrat font-thin underline-offset-8'>Categories</h1>
						{awards.map((item, index) => {
							return (
								<div
									onMouseEnter={() => handleSubMenuHover(item.name)}
									key={index}
									className='uppercase text-white text-xl font-montserrat font-thin ml-4 hover:underline transition-all duration-500 ease-in-out text-center '
								>
									<a href={item.link}>{item.name}</a>
								</div>
							);
						})}
					</div>
				</NavBarDropDown>
			</div>
		</div>
	);
};

export default NavBar;
