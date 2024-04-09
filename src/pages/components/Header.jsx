import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../../styles/custom.css";

const Header = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		// Track active menu item for submenu positioning
	});

	return (
		<div>
			<NavBar />
		</div>
	);
};

export default Header;
