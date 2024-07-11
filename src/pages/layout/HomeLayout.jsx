import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { checkAdminAccess } from "../../utilities/utilities.js";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ChatBot from "../components/chat-bot/ChatBot.jsx";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
import Radio from "../components/radio/Radio.jsx";
const HomeLayout = () => {
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const fetchAdminAccess = async () => {
			try {
				const isAdmin = await checkAdminAccess();
				console.log(isAdmin); // Await the promise
				setIsAdmin(isAdmin); // Update state with the result
			} catch (error) {
				console.error("Error checking admin access:", error);
				// Handle error if needed
			}
		};

		fetchAdminAccess(); // Call the async function
	}, []);

	return (
		<>
			{!isAdmin && <Header />}
			<Outlet />
			{/* {!isAdmin && <ChatBot />} */}
			{!isAdmin && <Radio />}
			{!isAdmin && <Footer />}
			{isAdmin && <PolicyBar />}
		</>
	);
};

export default HomeLayout;
