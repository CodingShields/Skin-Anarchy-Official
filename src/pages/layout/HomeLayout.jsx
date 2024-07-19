import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { checkAdminAccess } from "../../utilities/utilities.js";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ChatBot from "../components/chat-bot/ChatBot.jsx";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
import Radio from "../components/radio/Radio.jsx";
import { FormComp, Modal, Button } from "../components/Components.jsx";
import { formStyle, inputStyle } from "../../styles/responsiveStyling.js";
import ConnectForm from "../connect/ContactForm.jsx";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
const HomeLayout = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
		modalOpen: false,
	});
	console.log(state.modalOpen)
	const [isAdmin, setIsAdmin] = useState(false);

	// useEffect(() => {
	// 	const fetchAdminAccess = async () => {
	// 		try {
	// 			const isAdmin = await checkAdminAccess();
	// 			console.log(isAdmin); // Await the promise
	// 			setIsAdmin(isAdmin); // Update state with the result
	// 		} catch (error) {
	// 			console.error("Error checking admin access:", error);
	// 			// Handle error if needed
	// 		}
	// 	};

	// 	fetchAdminAccess(); // Call the async function
	// }, []);

	const handleModalClick = () => {
		setState({ ...state, modalOpen: !state.modalOpen });
	};

	const handleCloseModal = () => {
		setState({ ...state, modalOpen: false });
	};

	return (
		<>
			{!isAdmin && <Header />}
			<Outlet />
			<Modal open={state.modalOpen} handleClose={handleCloseModal}>
				<ConnectForm close={() => setState({ ...state, modalOpen: false })} />
			</Modal>
			{/* {!isAdmin && <ChatBot />} */}
			{/* {!isAdmin && <Radio />} */}
			{!isAdmin && <Footer handleModal={handleModalClick} />}
			{isAdmin && <PolicyBar />}
		</>
	);
};

export default HomeLayout;
