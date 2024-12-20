import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { userDeviceInfo } from "../../../utilities/utilities";
// import { Bars3Icon } from "@heroicons/react/24/solid";
import HighlightMenu from "./HighlightMenu";
import goldLogo from "../../../assets/images/logos/goldLogo.png";
import NavBarDropDown from "./NavBarDropDown";
// import makeup from "../../../assets/images/interviewCategories/makeup.png";
// import celebs from "../../../assets/images/interviewCategories/celebs.png";
// import brandFounders from "../../../assets/images/interviewCategories/brandFounders.png";
import { Button } from "../Components";
import mario from "../../../assets/images/navBar/episodes/mario.png";
import danessa from "../../../assets/images/navBar/episodes/danessa.png";
import sirJohn from "../../../assets/images/navBar/episodes/sirJohn.png";
import michelle from "../../../assets/images/navBar/episodes/michelle.png";
import gross from "../../../assets/images/navBar/episodes/gross.png";
import yannis from "../../../assets/images/navBar/episodes/yannis.png";
import harvey from "../../../assets/images/navBar/episodes/harvey.png";
import rosier from "../../../assets/images/navBar/episodes/rosier.png";
import pierotti from "../../../assets/images/navBar/episodes/pierotti.png";
import sincero from "../../../assets/images/navBar/episodes/sincero.png";
import jackson from "../../../assets/images/navBar/episodes/jackson.png";
import cruel from "../../../assets/images/navBar/episodes/cruel.png";
import jill from "../../../assets/images/navBar/episodes/jill.png";
import tia from "../../../assets/images/navBar/episodes/tia.png";
import tebow from "../../../assets/images/navBar/episodes/tebow.png";
import frag1 from "../../../assets/images/navBar/blog/fragrance/frag1.png";
import frag2 from "../../../assets/images/navBar/blog/fragrance/frag2.png";
import frag3 from "../../../assets/images/navBar/blog/fragrance/frag3.png";
import beauty1 from "../../../assets/images/navBar/blog/beauty/beauty1.png";
import beauty2 from "../../../assets/images/navBar/blog/beauty/beauty2.png";
import beauty3 from "../../../assets/images/navBar/blog/beauty/beauty3.png";
import science1 from "../../../assets/images/navBar/blog/scienceOfSkin/science1.png";
import science2 from "../../../assets/images/navBar/blog/scienceOfSkin/science2.png";
import science3 from "../../../assets/images/navBar/blog/scienceOfSkin/science3.png";
import devitto from "../../../assets/images/navBar/episodes/devitto.png";
import gersten from "../../../assets/images/navBar/episodes/gersten.png";
import allenby from "../../../assets/images/navBar/masterclass/allenby.png";
import codex from "../../../assets/images/navBar/masterclass/codex.png";
import veytsman from "../../../assets/images/navBar/masterclass/veytsman.png";

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

const currentEpisode = [
	{
		playerTitle: "Listen To Our Latest Episode",
		link: "https://open.spotify.com/show/298oIu74qjd3pXaaBMDr19?si=7729b4ff4bbc4b2a",
		player: (
			<iframe
				src="https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0"
				width="200%"
				height="352"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
];

const TopMakeupArtists = [
	{
		name: "Mario Dedivanovic",
		image: mario,
		link: "",
	},
	{
		name: "Danessa Myricks",
		image: danessa,
		link: "",
	},
	{
		name: "Sir John",
		image: sirJohn,
		link: "",
	},
];

const TopDoctors = [
	{
		name: "Dr. Michelle Henry",
		image: michelle,
		link: "",
	},
	{
		name: "Dr. Dennis Gross",
		image: gross,
		link: "",
	},
	{
		name: "Dr Yannis",
		image: yannis,
		link: "",
	},
];

const BrandFounders = [
	{
		name: "Brook Harvey-taylor",
		image: harvey,
		link: "",
	},
	{
		name: "Charles Rosier",
		image: rosier,
		link: "",
	},
	{
		name: "Camila Pierotti",
		image: pierotti,
		link: "",
	},
];

const ThoughtLeaders = [
	{
		name: "Jen Sincero",
		image: sincero,
		link: "",
	},
	{
		name: "Rich Gersten",
		image: gersten,
		link: "",
	},
	{
		name: "Annie Jackson",
		image: jackson,
		link: "",
	},
];

const EditorsAndJournalists = [
	{
		name: "Jessica Cruel",
		image: cruel,
		link: "",
	},
	{
		name: "Jill Manoff",
		image: jill,
		link: "",
	},
	{
		name: "Camila Pierotti",
		image: pierotti,
		link: "",
	},
];

const Celebrities = [
	{
		name: "Torrey DeVitto",
		image: devitto,
		link: "",
	},
	{
		name: "Tia Mowry",
		image: tia,
		link: "",
	},
	{
		name: "Demi Tebow ",
		image: tebow,
		link: "",
	},
];

const Masterclass = [
	{
		name: "Torrey DeVitto",
		image: allenby,
		link: "",
	},
	{
		name: "Tia Mowry",
		image: codex,
		link: "",
	},
	{
		name: "Demi Tebow ",
		image: veytsman,
		link: "",
	},
];
const episodesArray = [
	currentEpisode,
	TopMakeupArtists,
	TopDoctors,
	BrandFounders,
	ThoughtLeaders,
	EditorsAndJournalists,
	Celebrities,
	Masterclass,
];

const episodes = [
	{
		name: "Current Episode",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Top Makeup Artists",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Top Doctors",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Brand Founders",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Thought Leaders",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Editors And Journalists",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Celebrities",
		link: "/members-area/podcast/current-podcast-episode",
	},
	{
		name: "Master Class",
		link: "/members-area/podcast/current-podcast-episode",
	},
];

const awards = [
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
		name: "Current Blog",
		link: "/members-area/skin-anarchy-blog",
	},
	{
		name: "Fragrance",
		link: "/members-area/skin-anarchy-blog",
	},
	{
		name: "Beauty Culture",
		link: "/members-area/skin-anarchy-blog",
	},

	// {
	// 	name: "Episode Summaries",
	// 	link: "/members-area/skin-anarchy-blog",
	// },
	{
		name: "Science of Skin",
		link: "/members-area/skin-anarchy-blog",
	},
];

const beautyCulture = [
	{
		name: "Mastering Your Shower Routine: A Step-by-Step Guide to Optimize Skincare and Haircare Efficacy",
		link: "https://medium.com/@skincareanarchy/mastering-your-shower-routine-a-step-by-step-guide-to-optimize-skincare-and-haircare-efficacy-4a3bbe9151f8 ",
		image: beauty3,
	},
	{
		name: "From Humble Beginnings to Makeup Artistry Stardom",
		link: "https://medium.com/@skincareanarchy/mario-dedivanovic-from-humble-beginnings-to-makeup-artistry-stardom-765f1aa7951b",
		image: beauty2,
	},
	{
		name: "Y2K Lip Balm Jars and the Return of Lollipop Lips: Juicy, Fun and Unapologetically Nostalgic",
		link: "https://medium.com/@skincareanarchy/y2k-lip-balm-jars-and-the-return-of-lollipop-lips-juicy-fun-and-unapologetically-nostalgic-31fafcff2fd9 ",
		image: beauty1,
	},
];

const fragrance = [
	{
		name: "A History of Oils in Perfumery and Ancient Oil Jars Dating To Ancient Egypt and Indian Civilizations",
		link: "https://medium.com/@skincareanarchy/the-fragrant-past-a-history-of-oils-in-perfumery-and-ancient-oil-jars-dating-to-ancient-egypt-and-3e8000956f1d  ",
		image: frag2,
	},
	{
		name: "How Art Eras Influence Perfumery",
		link: "https://medium.com/@skincareanarchy/how-art-eras-influence-perfumery-30a4870b244a ",
		image: frag1,
	},
	{
		name: "The Link Between Fashion & Fragrance",
		link: "https://medium.com/@skincareanarchy/the-link-between-fashion-fragrance-64b64780fc3 ",
		image: frag3,
	},
];

const scienceOfSkin = [
	{
		name: "From Buzzword to Benchmark: Reclaiming Scientific Integrity in the Beauty Industry",
		link: "https://medium.com/@skincareanarchy/from-buzzword-to-benchmark-reclaiming-scientific-integrity-in-the-beauty-industry-1cacf92fa7e2 ",
		image: science1,
	},
	{
		name: "Vitamin C and Niacinamide: A Review of Their Role and Interaction in Skincare",
		link: "https://medium.com/@skincareanarchy/vitamin-c-and-niacinamide-a-review-of-their-role-and-interaction-in-skincare-b72dbec5b733",
		image: science3,
	},
	{
		name: "The Sunscreen Scandal: Is the Multi-Billion Dollar Industry Mimicking Big Tobacco’s Dark Past?",
		link: "https://medium.com/@skincareanarchy/the-sunscreen-scandal-is-the-multi-billion-dollar-industry-mimicking-big-tobaccos-dark-past-a7b5a7655dde ",
		image: science2,
	},
];

const blogArray = [
	beautyCulture,
	fragrance,
	scienceOfSkin,
	// episodeSummaries,
];

const safeSealArray = [
	{
		name: "Home",
		link: "/members-area/safe-seal/home",
	},
	{
		name: "About",
		link: "/members-area/safe-seal/about",
	},
	{
		name: "Board of Advisors",
		link: "/members-area/safe-seal/board-of-advisors",
	},
	{
		name: "Review Committee",
		link: "/members-area/safe-seal/review-committee",
	},
	{
		name: "Tiers",
		link: "/members-area/safe-seal/tiers",
	},
	{
		name: "S.A.F.E. Brands",
		link: "/members-area/safe-seal/safe-seal-brands",
	},
	{
		name: "Contact",
		link: "/members-area/safe-seal/Contact",
	},
];
const buttonStyle =
	"uppercase font-thin underlineAnimate font-thin font-montserrat tracking-widest text-white md:text-[10px] lg:text-2xl text-white/50";
const activeNavButton =
	"uppercase font-semibold text-gold-500 subpixel-antialiased tracking-[6px]  underline underline-offset-8 decoration-1 lg:text-4xl font-thin font-montserrat tracking-widest";
const NavBar = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
		openSubMenu: false,
		currentMenu: "home",
		subMenuIndex: 0,
	});
	const menuRef = useRef(null);
	const navigate = useNavigate();

	const handleSubMenuHover = (item, index) => {
		setState({ ...state, openSubMenu: true, subMenuIndex: index });
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setState({ ...state, openSubMenu: false });
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	useEffect(() => {
		const handleMouseOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setState({ ...state, openSubMenu: false });
			}
		};
		document.addEventListener("mouseout", handleMouseOutside);
		return () => {
			document.removeEventListener("mouseout", handleMouseOutside);
		};
	});
	return (
		<div
			ref={menuRef}
			id="menu"
			className="w-full sm:w-fit h-fit bg-black border-b border-white pb-2"
		>
			<div className="w-11/12  flex flex-row  justify-evenly items-center mx-auto mt-2 h-16">
				<Button
					style={state.currentMenu === "home" ? activeNavButton : buttonStyle}
					text={"home"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "home",
							openSubMenu: !state.openSubMenu,
						});
						navigate("/members-area/home");
					}}
				/>
				<Button
					style={state.currentMenu === "about" ? activeNavButton : buttonStyle}
					text={"about"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "about",
							openSubMenu: !state.openSubMenu,
						});
					}}
				/>
				<Button
					style={
						state.currentMenu === "episodes" ? activeNavButton : buttonStyle
					}
					text={"episodes"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "episodes",
							openSubMenu: !state.openSubMenu,
						});
					}}
				/>
				<Button
					style={state.currentMenu === "blog" ? activeNavButton : buttonStyle}
					text={"blog"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "blog",
							openSubMenu: !state.openSubMenu,
						});
					}}
				/>
				<Button
					style={
						state.currentMenu === "safe-seal" ? activeNavButton : buttonStyle
					}
					text={"s.a.f.e. seal"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "safe-seal",
							openSubMenu: !state.openSubMenu,
						});
					}}
				/>
				<div className="inline-flex w-fit space-x-4">
					<img
						src={goldLogo}
						alt="logo"
						className="w-12 "
					/>
				</div>
				<Button
					style={state.currentMenu === "awards" ? activeNavButton : buttonStyle}
					text={"awards"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "awards",
							openSubMenu: true,
						});
					}}
				/>
				<Button
					style={state.currentMenu === "yugen" ? activeNavButton : buttonStyle}
					text={"yugen"}
					to={"/members-area/yugen"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "yugen",
							openSubMenu: false,
						});
						navigate("/members-area/yugen");
					}}
				/>
				<Button
					style={
						state.currentMenu === "connect" ? activeNavButton : buttonStyle
					}
					text={"connect"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "connect",
							openSubMenu: true,
						});
						navigate("/members-area/connect");
					}}
				/>
				<Button
					style={state.currentMenu === "shop" ? activeNavButton : buttonStyle}
					text={"shop"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "shop",
							openSubMenu: !state.openSubMenu,
						});
						navigate("/members-area/shop");
					}}
				/>
				<Button
					style={
						state.currentMenu === "account" ? activeNavButton : buttonStyle
					}
					text={"account"}
					onClick={() => {
						setState({
							...state,
							currentMenu: "account",
							openSubMenu: !state.openSubMenu,
						});
						navigate("/members-area/account");
					}}
				/>
			</div>
			<div
				ref={menuRef}
				className="w-full "
			>
				<NavBarDropDown
					open={state.openSubMenu}
					menu={state.currentMenu}
					text={"about"}
				>
					<div className="flex flex-row w-full justify-center items-center bg-black  py-4 space-x-12">
						{about.map((item, index) => {
							return (
								<>
									<a
										key={index}
										href={item.link}
									>
										<h1 className="text-2xl text-white font-montserrat font-thin uppercase underlineAnimate">
											{item.name}
										</h1>
									</a>
								</>
							);
						})}
					</div>
				</NavBarDropDown>
				{/* Episodes Drop Down */}
				<NavBarDropDown
					open={state.openSubMenu}
					menu={state.currentMenu}
					text={"episodes"}
				>
					<div className="flex flex-row w-full justify-start items-center bg-black ">
						<div className="w-[500px] h-[900px] flex flex-col space-y-4 py-12 pl-6 pr-8 whitespace-nowrap pb-8">
							<h1 className="uppercase  text-white underline text-3xl font-montserrat  underline-offset-8 pb-4 decoration-1 tracking-widest">
								Categories
							</h1>
							{episodes.map((item, index) => {
								return (
									<div
										onMouseEnter={() => handleSubMenuHover(item, index)}
										key={index}
										className="w-11/12 ml-4  h-full"
									>
										<a
											href={item.link}
											className="uppercase text-white text-2xl  py-4 hover:text-3xl hover:font-medium hover:relative font-montserrat font-thin transition-all duration-500 ease-in-out text-left tracking-widest hover:text-gold-500 "
										>
											{item.name}
										</a>
									</div>
								);
							})}
						</div>
						<HighlightMenu key={state.subMenuIndex}>
							<div
								className={`w-3/4  duration-500 ease-in-out transition-all animate-fadeIn ${
									state.subMenuIndex === 1
										? "flex justify-center items-center"
										: "grid grid-cols-3"
								}`}
							>
								{episodesArray[state.subMenuIndex]?.map((item, index) => {
									return (
										<div
											key={index}
											className="w-3/4 h-full ml-auto text-center animate-fadeIn transition-all delay-200 "
										>
											<h1 className="uppercase text-white sm:text-[16px] md:text-[22px] lg:text-[28px] 2xl:text-[32px] font-montserrat font-thin py-6 whitespace-nowrap">
												{item.playerTitle}
											</h1>
											{item.player}
											<img
												src={item.image}
												className="w-3/4 mx-auto rounded-md "
											/>
											<h1 className="uppercase text-white text-2xl tracking-widest font-montserrat font-thin whitespace-nowrap py-4">
												{item.name}
											</h1>
										</div>
									);
								})}
							</div>
						</HighlightMenu>
					</div>
				</NavBarDropDown>
				{/* Blog Drop Down */}
				<NavBarDropDown
					open={state.openSubMenu}
					menu={state.currentMenu}
					text={"blog"}
				>
					<div className="flex flex-row w-full justify-start items-center bg-black ">
						<div className="w-[500px] h-[900px] flex flex-col space-y-4 py-12 pl-6 pr-8 whitespace-nowrap pb-8">
							<h1 className="uppercase  text-white underline text-3xl font-montserrat  underline-offset-8 pb-4 decoration-1 tracking-widest">
								Categories
							</h1>
							{blog.map((item, index) => {
								return (
									<div
										onMouseEnter={() => handleSubMenuHover(item, index)}
										key={index}
										className="w-11/12 ml-4  h-full"
									>
										<a
											href={item.link}
											className="uppercase text-white text-2xl  py-4 hover:text-3xl hover:font-medium hover:relative font-montserrat font-thin transition-all duration-500 ease-in-out text-left tracking-widest hover:text-gold-500 "
										>
											{item.name}
										</a>
									</div>
								);
							})}
						</div>
						<HighlightMenu key={state.subMenuIndex}>
							<div className="w-full grid grid-cols-3 duration-500 ease-in-out transition-all animate-fadeIn py-12 ">
								{blogArray[state.subMenuIndex]?.map((item, index) => {
									return (
										<div
											key={index}
											className="w-full h-full text-center animate-fadeIn transition-all delay-200 mx-auto"
										>
											<img
												src={item.image}
												className="w-3/5 mx-auto rounded-md hover:shadow-xl hover:shadow-white/50 hover:scale-110 transition-all duration-500 ease-in-out"
											/>
										</div>
									);
								})}
							</div>
						</HighlightMenu>
					</div>
				</NavBarDropDown>
				<NavBarDropDown
					open={state.openSubMenu}
					menu={state.currentMenu}
					text={"awards"}
				>
					<div className="flex flex-row w-full justify-center items-center bg-black  py-4 space-x-12">
						{awards.map((item, index) => {
							return (
								<a
									key={index}
									href={item.link}
								>
									<h1 className="text-2xl text-white font-montserrat font-thin uppercase underlineAnimate">
										{item.name}
									</h1>
								</a>
							);
						})}
					</div>
				</NavBarDropDown>
				<NavBarDropDown
					open={state.openSubMenu}
					menu={state.currentMenu}
					text={"safe-seal"}
				>
					<div className="flex flex-row w-full justify-center items-center bg-black  py-4 space-x-18 h-24">
						{safeSealArray.map((item, index) => {
							return (
								<>
									<a
										key={index}
										href={item.link}
									>
										<h1 className="text-2xl text-white font-montserrat font-thin uppercase underlineAnimate tracking-widest">
											{item.name}
										</h1>
									</a>
								</>
							);
						})}
					</div>
				</NavBarDropDown>
			</div>
		</div>
	);
};

export default NavBar;
