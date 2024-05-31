import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer.jsx";
import ChatBot from "../components/chat-bot/ChatBot";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar";
const HomeLayout = () => {
	const location = useLocation();

	const isAdminPage = location.pathname.includes("/members-area/account");

	return (
		<>
			{!isAdminPage && <Header />}
			<Outlet />
			{!isAdminPage && <ChatBot />}
			{!isAdminPage && <Footer />}
			{!isAdminPage && <PolicyBar />}
		</>
	);
};

export default HomeLayout;
