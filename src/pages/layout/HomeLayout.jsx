import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer.jsx";
const HomeLayout = () => {
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
