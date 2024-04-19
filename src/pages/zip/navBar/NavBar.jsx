import goldLogo from "../../assets/images/logos/goldLogo.png";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import NavBarButton from "./NavBarButton";
import NavBarMenu from "./NavBarMenu";
import NavBarMenuItem from "./NavBarMenuItem";
import NavBarMenuDropDown from "./NavBarMenuDropDown";
import makeup from "../../assets/images/interviewCategories/makeup.png";
import celebs from "../../assets/images/interviewCategories/celebs.png";
import brandFounders from "../../assets/images/interviewCategories/brandFounders.png";
import "../../styles/custom.css";

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

const podcast = [
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
	{
		top: [
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
		],
	},
];

const awards = [
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
	{
		top: [
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
		],
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
const NavBar = () => {
	return (
		<div className='w-full h-full py-4 flex flex-row justify-center items-center bg-opacity-50 relative z-40 bg-black'>
			<div className='text-white lg:text-sm text-md flex flex-row w-full justify-end items-center space-x-12 lg:space-x-8'>
				<NavBarButton to='/members-area/home' text='HOME' />
				<NavBarMenu>
					<NavBarButton text='About' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{about.map((about, index) => (
							<NavBarMenuItem key={index} to={about.link} text={about.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>
				<NavBarMenu>
					<NavBarButton text='Podcasts' icon={doubleChevronDown} />
					<NavBarMenuDropDown data={podcast[7].top} text={"Check Out Our Top 5 Podcasts"} title={"Podcast Categories"} >
						{podcast.map((podcast, index) => (
							<NavBarMenuItem key={index} to={podcast.link} text={podcast.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>
				<NavBarMenu>
					<NavBarButton text='Skin Anarchy Blog' icon={doubleChevronDown} />
					<NavBarMenuDropDown data={blog[4].top} title={"Blog Categories"}>
						{blog.map((blog, index) => (
							<NavBarMenuItem key={index} to={blog.link} text={blog.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>
			</div>
			<div className='text-white text-md flex flex-row w-1/4 justify-center'>
				<img src={goldLogo} alt='logo' className='xl:h-16 xxl:h-48 hover:animate-pulse mx-auto w-auto h-fit' />
			</div>
			<div className='text-white lg:text-sm text-md flex flex-row w-full justify-start items-center lg:space-x-8 space-x-12'>
				<NavBarMenu>
					<NavBarButton text='Awards' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{awards.map((awards, index) => (
							<NavBarMenuItem key={index} to={awards.link} text={awards.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>

				<NavBarButton to='/members-area/yugen' text='YUGEN' />
				<NavBarMenu>
					<NavBarButton text='Connect' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{connect.map((connect, index) => (
							<NavBarMenuItem key={index} to={connect.link} text={connect.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>

				<NavBarMenu>
					<NavBarButton text='Account' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{account.map((account, index) => (
							<NavBarMenuItem key={index} to={account.link} text={account.name} />
						))}
					</NavBarMenuDropDown>
				</NavBarMenu>
			</div>
		</div>
	);
};

export default NavBar;
