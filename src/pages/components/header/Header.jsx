import { useState, useEffect } from "react";
import { userDeviceInfo } from "../../../utilities/utilities";
import NavBar from "../navBar/NavBar";
import MobileNavBar from "../navBar/MobileNavBar";
const Header = () => {
	const [isMobile, setIsMobile] = useState(false);

	console.log(userDeviceInfo());
	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className="fixed w-screen top-0 z-30 flex h-fit sm:overscroll-x-none ">
			{isMobile ? <MobileNavBar /> : <NavBar />}
		</div>
	);
};

export default Header;
