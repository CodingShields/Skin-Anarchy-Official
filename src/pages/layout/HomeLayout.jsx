import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavStoreActions } from "../../stateStore/useNavStateStore";
import { useNavStore } from "../../stateStore/useNavStateStore";
const HomeLayout = () => {
	const [isActive, setIsActive] = useState(false);

	const location = useLocation();

	const isAdminPage = location.pathname.includes("/members-area/account");

	return (
		<>
			{!isAdminPage && <Header />}
			<Outlet />

			{!isAdminPage && <Footer />}
		</>
	);
};

export default HomeLayout;
