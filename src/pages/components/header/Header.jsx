import Menu from "../newNavBar/index.js";
import goldLogo from "../../../assets/images/logos/goldLogo.png";
import { Link } from "react-router-dom";
import NavBar from "../newNavBarTest/NavBar.jsx";
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
const Header = () => {
	const buttonStyle = "uppercase font-thin underlineAnimate subpixel-antialiased tracking-[2px]";
	const menuStyle = "text-white font-montserrat w-fit gap-24 text-[26px] flex flex-row";
	const subMenuStyle = "bg-char-900 h-fit w-fit absolute text-white font-montserrat z-10 translate-y-[100px] flex flex-row px-12  gap-4 rounded-b-lg";
	const menuItem = "text-white font-montserrat text-3xl";
	return (
		<div className='fixed z-30 flex flex-row justify-center items-center w-full gap-18 bg-black py-4'>
			<NavBar />
			{/* <Menu menuStyle={menuStyle} buttonStyle={buttonStyle} to={"/members-area/home"}>
				<Link className='uppercase font-thin underlineAnimate subpixel-antialiased tracking-[2px]' to={"/members-area/home"}>
					Home
				</Link>
				<Link className='uppercase font-thin underlineAnimate subpixel-antialiased tracking-[2px]' to={"/members-area/about-us"}>
					About Us
				</Link>
				<Menu.Button name='Blog'>Blog</Menu.Button>
				<Menu.DropDown subMenuStyle={subMenuStyle}>
					{blog.map((item, index) => {
						return (
							<Menu.Item key={index} className={menuItem}>
								<a href={item.link}>{item.name}</a>
							</Menu.Item>
						);
					})}
				</Menu.DropDown>
				<Menu.Button>Episodes</Menu.Button>
				<Menu.DropDown subMenuStyle={subMenuStyle}>
					{episodes.map((item, index) => {
						return (
							<Menu.Item key={index} className={menuItem}>
								<a href={item.link}>{item.name}</a>
							</Menu.Item>
						);
					})}
				</Menu.DropDown>
				<img src={goldLogo} className='h-14' alt='logo' />
				<Menu.Button>Awards</Menu.Button>
				<Menu.DropDown subMenuStyle={subMenuStyle}>
					{awards.map((item, index) => {
						return (
							<Menu.Item key={index} className={menuItem}>
								<a href={item.link}>{item.name}</a>
							</Menu.Item>
						);
					})}
				</Menu.DropDown>
				<Menu menuStyle={menuStyle} buttonStyle={buttonStyle}>
					<Menu.Button>Yugen</Menu.Button>
				</Menu>
				<Menu.Button>Connect</Menu.Button>
				<Menu.DropDown subMenuStyle={subMenuStyle}>
					{connect.map((item, index) => {
						return (
							<Menu.Item key={index} className={menuItem}>
								<a href={item.link}>{item.name}</a>
							</Menu.Item>
						);
					})}
				</Menu.DropDown>
				<Menu.Button>Account</Menu.Button>
				<Menu.DropDown subMenuStyle={subMenuStyle}>
					{account.map((item, index) => {
						return (
							<Menu.Item key={index} className={menuItem}>
								<a href={item.link}>{item.name}</a>
							</Menu.Item>
						);
					})}
				</Menu.DropDown>
			</Menu> */}
		</div>
	);
};

export default Header;
