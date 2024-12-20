import { useState, useEffect } from "react";
import TopPicksNavBar from "./comp/TopPicksNavBar";
import TopPicksNavButton from "./TopPicksNavButton";
import TopPicksNavBarDropDown from "./TopPicksNavBarDropDown";
import TopPicksSubMenuButton from "./TopPicksSubMenuButton";
import topPicks2023 from "../../assets/images/topPicks/2023/topPicks2023.js";
import { StartPageLoadTop } from "../../utilities/utilities.js";
import { userDeviceInfo } from "../../utilities/utilities.js";

const topPicksNavBar = [
	{
		name: "skincare",
		subMenu: [
			"treatments, peels, patches",
			"toners & essence",
			"supplements",
			"sunscreens",
			"skincare devices",
			"serums",
			"oils",
			"moisturizers",
			"masks",
			"makeup remover & mist",
			"lips, hands & feet",
			"eye masks, lash & brow serums, eye creams",
			"cleaners",
			"body care",
		],
	},
	{
		name: "makeup",
		subMenu: [
			"primer, foundation, concealer",
			"lips & nails",
			"eyes & brows",
			"blushes, bronzers, highlighters",
		],
	},
	{
		name: "hair",
		subMenu: [
			"tools & styling products",
			"shampoo, conditioner & leave-ins",
			"dry shampoo, oils, masks, & scalp care",
		],
	},
	{
		name: "fragrance",
		subMenu: ["perfume", "candles"],
	},
];

const TopPicksPage = () => {
	const [activeMenu, setActiveMenu] = useState({
		name: "",
		subMenu: [],
	});
	const [activeSubMenu, setActiveSubMenu] = useState(""); // Just store the selected sub-menu string

	const [subMenuData, setSubMenuData] = useState([]);
	const [shopMyLink, setShopMyLink] = useState("");

	const handleNavClick = (name, subMenu) => {
		setActiveSubMenu(""); // Reset the sub-menu when a new category is clicked
		setActiveMenu({ name, subMenu });
	};

	const handleOnChange = (e) => {
		const value = e.target.value;
		const selectedCategory = topPicksNavBar[value];
		setActiveMenu({
			name: selectedCategory.name,
			subMenu: selectedCategory.subMenu,
		});
		setActiveSubMenu(""); // Reset subMenu when changing category
	};

	const handleSubMenuOnChange = (e) => {
		const value = e.target.value;
		setActiveSubMenu(value);
		const data = findObject(topPicks2023, activeMenu.name);
		setShopMyLink(data.shopMyLink);
		const subMenuArray = data.data;
		setSubMenuData(findObject(subMenuArray, value));
	};

	const handleSubMenuClick = (subMenuItem) => {
		setActiveSubMenu(subMenuItem);
		const data = findObject(topPicks2023, activeMenu.name);
		setShopMyLink(data.shopMyLink);
		const subMenuArray = data.data;
		setSubMenuData(findObject(subMenuArray, subMenuItem));
	};

	const findObject = (arr, name) => {
		return arr.find((obj) => obj.name === name);
	};

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	const userIsMobile = userDeviceInfo();

	return (
		<div className="w-full min-h-screen animate-fadeIn ">
			<div className="mt-24 lg:mt-36 text-center w-3/4 mx-auto mb-12 space-y-2">
				<h1 className="text-2xl lg:text-5xl text-white font-montserrat font-thin uppercase tracking-widest">
					Skin Anarchy
				</h1>
				<h1 className="text-2xl lg:text-5xl text-white font-montserrat font-thin uppercase tracking-widest">
					Top Picks
				</h1>
			</div>
			<TopPicksNavBar isMobile={userIsMobile}>
				{topPicksNavBar.map((item, index) => (
					<TopPicksNavButton
						key={index}
						name={item.name}
						subMenu={item.subMenu}
						active={activeMenu.name}
						onClick={handleNavClick}
					>
						<TopPicksNavBarDropDown>
							{activeMenu.name === item.name &&
								activeMenu?.subMenu?.map((subItem, subIndex) => (
									<TopPicksSubMenuButton
										active={activeSubMenu}
										key={subIndex}
										name={subItem}
										onClick={handleSubMenuClick}
									/>
								))}
						</TopPicksNavBarDropDown>
					</TopPicksNavButton>
				))}
			</TopPicksNavBar>
			<TopPicksNavBar isMobile={!userIsMobile}>
				<select
					className="text-white bg-black font-montserrat uppercase tracking-widest w-11/12 mx-auto rounded-lg"
					value={activeMenu.name}
					onChange={handleOnChange}
				>
					<option>Category Select</option>
					{topPicksNavBar.map((item, index) => (
						<option
							key={index}
							value={index}
						>
							{item.name}
						</option>
					))}
				</select>

				{activeMenu.name === "" ? null : (
					<select
						className={`text-white bg-black font-montserrat uppercase tracking-widest w-11/12 mx-auto rounded-lg ${activeMenu.name === "" ? "opacity-0" : "opacity-100"} duration-500 ease-in-out transition-all`}
						value={activeSubMenu}
						onChange={handleSubMenuOnChange}
						disabled={activeMenu.name === ""}
					>
						<option>Sub Category Select</option>
						{activeMenu?.subMenu?.map((item, index) => (
							<option
								key={index}
								value={item}
							>
								{item}
							</option>
						))}
					</select>
				)}
			</TopPicksNavBar>

			<div className="w-10/12 h-fit lg:py-36 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 mx-auto lg:my-24 my-16">
				{subMenuData?.data?.map((item, index) => (
					<a
						key={index}
						// onMouseOver={() => handleSubMenuClick(item)}
						className="h-auto max-w-28 lg:max-w-36 lg:max-h-36 mx-auto group lg:hover:bg-white hover:scale-125 ease-in-out duration-300 transition-all flex flex-col justify-center 	items-center rounded-xl hover:p-1"
						href={shopMyLink}
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={item.image}
							alt={`award ${index}`}
							className="w-full h-full object-center object-cover "
						/>
						<p className="text-white font-montserrat underline-offset-4 decoration-1 delay-100 group-hover:text-black whitespace-nowrap text-center py-2 w-full mx-auto text-wrap">
							{item.name}
						</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default TopPicksPage;
