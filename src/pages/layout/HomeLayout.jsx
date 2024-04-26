import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
