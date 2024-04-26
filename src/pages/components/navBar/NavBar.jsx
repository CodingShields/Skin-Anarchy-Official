import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import goldLogo from "../../../assets/images/logos/goldLogo.png";
import doubleChevronDown from "../../../assets/icons/doubleChevronDown.svg";
import makeup from "../../../assets/images/interviewCategories/makeup.png";
import celebs from "../../../assets/images/interviewCategories/celebs.png";
import brandFounders from "../../../assets/images/interviewCategories/brandFounders.png";
import Button from "../../components/buttons/Button";
import MenuDropdown from "./MenuDropDown";
import { set } from "firebase/database";

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

const episodes = [
	{
		name: "Current Episode",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Top Make Up Artists ",
		link: "/members-area/podcast/top-make-up-artists-podcasts",
	},
	{
		name: "Top Doctors ",
		link: "/members-area/podcast/top-doctors-podcasts",
	},
	{
		name: "Brand Founders ",
		link: "/members-area/podcast/brand-founders-podcasts",
	},
	{
		name: "Thought Leaders ",
		link: "/members-area/podcast/thought-leaders-podcasts",
	},
	{
		name: "EDITORS AND JOURNALISTS",
		link: "/members-area/podcast/editors-and-journalists-podcasts",
	},
	{
		name: "Celebrities ",
		link: "/members-area/podcast/celebrity-podcasts",
	},
];
const episodesHighlight = [
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
		name: "Podcast Summaries",
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
	// {
	// 	name: "Join Our Team",
	// 	link: "/members-area/connect/join-our-team",
	// },
	{
		name: "Get Featured On Our Show",
		link: "/members-area/connect/get-featured-on-our-show",
	},

	{
		name: "Become A Sponsor",
		link: "/members-area/connect/become-a-sponsor",
	},
];

const account = [
	{
		name: "My Account",
		link: "/members-area/account",
	},
	{
		name: "Logout",
		link: "/logout",
	},
];
const noSubMenu = [];
const highLightEpsiodes = [];
const subMenu = [];
const highlightBlog = [];
const buttonIconStyle = ["text-white h-8 w-8 ml-2"];
const buttonStyle = ["text-white font-montserrat uppercase inline-flex "];
export default function NavBar() {
	const [dropDownOpenHL, setDropDownOpenHL] = useState(false);
	const [dropDownOpenNoHL, setDropDownOpenNoHL] = useState(false);
	const [childrenData, setChildrenData] = useState([]);
	const [highlightData, setHighlightData] = useState([]);
	const [navStyle, setNavStyle] = useState("");
	const navigate = useNavigate();
	const handleDropDownClick = (e) => {
		const target = e.target.name;
		handleSubMenu(target);
	};
	const handleSubMenu = (data) => {
		console.log(data);
		if (data === "episodes") {
			setChildrenData(episodes);
			setHighlightData(episodesHighlight);
			setDropDownOpenHL(true);
			setDropDownOpenNoHL(false);
			console.log("success");
		} else if (data === "blog") {
			setChildrenData(blog);
			setHighlightData(blogHighlight);
			setDropDownOpenHL(true);
			setDropDownOpenNoHL(false);
		} else if (data === "awards") {
			setChildrenData(awards);
			setHighlightData([]);
			setDropDownOpenHL(false);
			setDropDownOpenNoHL(true);
		} else if (data === "connect") {
			setChildrenData(connect);
			setHighlightData([]);
			setDropDownOpenHL(false);
			setDropDownOpenNoHL(true);
		} else if (data === "account") {
			setChildrenData(account);
			setHighlightData([]);
			setDropDownOpenHL(false);
			setDropDownOpenNoHL(true);
		}
	};

	const handleMouseLeave = () => {
		setDropDownOpenHL(false);
		setDropDownOpenNoHL(false);
		setChildrenData([]);
		setHighlightData([]);
	};

	return (
		<div className='w-full h-fit fixed top-0 block'>
			<div className='flex flex-row items-center justify-center space-x-26 py-4 bg-black/60 relative'>
				<Button
					style={buttonStyle}
					text={"home"}
					onClick={() => {
						navigate("/members-area/home"), setDropDownOpenHL(false), setDropDownOpenNoHL(false);
					}}
				></Button>
				<Button style={buttonStyle} text={"about"} onClick={() => navigate("/members-area/about-us")}></Button>
				<Button style={buttonStyle} text={"episodes"} image={doubleChevronDown} imageStyle={buttonIconStyle} onClick={handleDropDownClick}></Button>
				<Button style={buttonStyle} text={"blog"} image={doubleChevronDown} imageStyle={buttonIconStyle} onClick={handleDropDownClick}></Button>
				<img src={goldLogo} className='h-14' alt='logo' />
				<Button style={buttonStyle} text={"awards"} image={doubleChevronDown} imageStyle={buttonIconStyle} onClick={handleDropDownClick}></Button>
				<Button style={buttonStyle} text={"yugen"}></Button>
				<Button style={buttonStyle} text={"connect"} image={doubleChevronDown} imageStyle={buttonIconStyle} onClick={handleDropDownClick}></Button>
				<Button style={buttonStyle} text={"account"} image={doubleChevronDown} imageStyle={buttonIconStyle} onClick={handleDropDownClick}></Button>
			</div>
			<div onMouseLeave={handleMouseLeave}>
				<MenuDropdown openHl={dropDownOpenHL} openNoHL={dropDownOpenNoHL} data={childrenData} highlight={highlightData}></MenuDropdown>
			</div>
		</div>
	);
}
