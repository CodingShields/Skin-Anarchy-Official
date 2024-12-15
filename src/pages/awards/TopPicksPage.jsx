import { useState, useEffect } from "react";
import TopPicksNavBar from "./comp/TopPicksNavBar";
import TopPicksNavButton from "./TopPicksNavButton";
import TopPicksNavBarDropDown from "./TopPicksNavBarDropDown";
import TopPicksSubMenuButton from "./TopPicksSubMenuButton";
import TopPicksImagesCard from "./TopPicksImagesCard";
import topPicks2023 from "../../assets/images/topPicks/2023/topPicks2023.js";
import { StartPageLoadTop } from "../../utilities/utilities.js";
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
	const [activeSubMenu, setActiveSubMenu] = useState("");

	const [subMenuData, setSubMenuData] = useState([]);

	const [shopMyLink, setShopMyLink] = useState("");
	const handleNavClick = (name, subMenu) => {
		setActiveSubMenu("");
		setActiveMenu({ name, subMenu });
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

	const handleOnHover = (item) => {
		const name = item.name;
		console.log(name);
	};

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className="w-full min-h-screen animate-fadeIn ">
			<div className="mt-24 text-center w-full mb-12">
				<h1 className="text-2xl lg:text-5xl text-white font-montserrat font-thin uppercase tracking-widest">
					Skin Anarchy Top Picks
				</h1>
			</div>
			<TopPicksNavBar>
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
			<div className="w-10/12 h-[1000px]py-36 flex justify-center items-center mx-auto my-24">
				<TopPicksImagesCard>
					{subMenuData?.data?.map((item, index) => {
						return (
							<div
								key={index}
								onMouseOver={handleOnHover(item)}
								className="block h-fit p-4 w-96 group hover:bg-white  rounded-2xl ease-in-out duration-300 transition-all"
							>
								<a
									href={shopMyLink}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={item.image}
										alt={`award ${index}`}
										className="w-36 h-36 mx-auto"
									/>
									<p className="text-white font-montserrat underline-offset-4 decoration-1 delay-100 group-hover:text-black whitespace-nowrap text-center">
										{item.name}
									</p>
								</a>
							</div>
						);
					})}
				</TopPicksImagesCard>
			</div>
		</div>
	);
};

export default TopPicksPage;
