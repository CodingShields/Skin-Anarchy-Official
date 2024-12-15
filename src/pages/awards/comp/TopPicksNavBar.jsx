import PropTypes from "prop-types";

const TopPicksNavBar = ({ children, isMobile }) => {
	if (isMobile) return null;
	return (
		<div className="grid grid-cols-1 lg:flex flex-row justify-center capitalize items-center gap-4 lg:gap-8 h-fit w-full z-10 ">
			{children}
		</div>
	);
};

TopPicksNavBar.propTypes = {
	children: PropTypes.node,
	isMobile: PropTypes.bool,
};

export default TopPicksNavBar;
{
	/* <TopPicksNavBar isMobile={userIsMobile}>
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
			</TopPicksNavBar> */
}
