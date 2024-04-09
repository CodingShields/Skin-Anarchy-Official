import whiteLogo from "../../assets/images/whiteLogo.png";
import doubleChevronDown from "../../assets/icons/doubleChevronDown.svg";
import NavBarButton from "./NavBarButton";
import NavBarMenu from "./NavBarMenu";
import NavBarMenuItem from "./NavBarMenuItem";
import NavBarMenuDropDown from "./NavBarMenuDropDown";
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

const podCast = [
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
		<div className='w-full h-full pt-4 flex flex-row justify-center items-center'>
			<div className='text-white text-md flex flex-row space-x-6 w-full justify-center'>
				<NavBarMenu>
					<NavBarButton to='/members-area/blog' text='Skin Anarchy Blog' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{blog.map((item) => (
							<NavBarMenuItem key={item} to={item.link}>
								{item.name}
							</NavBarMenuItem>
						))}
					</NavBarMenuDropDown>
					<NavBarButton to='/members-area/podcast' text='Podcasts' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{podCast.map((item) => (
							<NavBarMenuItem key={item} to={item.link}>
								{item.name}
							</NavBarMenuItem>
						))}
					</NavBarMenuDropDown>
					<NavBarButton to='/members-area/awards' text='Awards' icon={doubleChevronDown} />
					<NavBarMenuDropDown>
						{awards.map((item) => (
							<NavBarMenuItem key={item} to={item.link}>
								{item.name}
							</NavBarMenuItem>
						))}
					</NavBarMenuDropDown>
					<NavBarButton to='/members-area/yugen' text='Yugen' icon={doubleChevronDown} />
				</NavBarMenu>
			</div>
			<div className='text-white text-md flex flex-row w-full justify-center'>
				<img src={whiteLogo} alt='logo' className='xl:h-16 xxl:h-48 hover:animate-pulse mx-auto ' />
			</div>
			<div className='text-white text-md flex flex-row w-full justify-center'>
				<NavBarButton to='/members-area/home' text='Home' />
				<NavBarButton text='About' icon={doubleChevronDown} />
				<NavBarMenuDropDown>
					{about.map((item) => (
						<NavBarMenuItem key={item} to={item.link}>
							{item.name}
						</NavBarMenuItem>
					))}
				</NavBarMenuDropDown>
				<NavBarButton to='/members-area/connect' text='Connect' icon={doubleChevronDown} />
				<NavBarMenuDropDown>
					{connect.map((item) => (
						<NavBarMenuItem key={item} to={item.link}>
							{item.name}
						</NavBarMenuItem>
					))}
				</NavBarMenuDropDown>
				<NavBarButton to='/members-area/account' text='Account' icon={doubleChevronDown} />
				<NavBarMenuDropDown>
					{account.map((item) => (
						<NavBarMenuItem key={item} to={item.link}>
							{item.name}
						</NavBarMenuItem>
					))}
				</NavBarMenuDropDown>
			</div>
		</div>
	);
};

export default NavBar;
