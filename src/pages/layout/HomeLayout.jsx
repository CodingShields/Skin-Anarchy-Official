import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { checkAdminAccess } from "../../utilities/utilities.js";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ChatBot from "../components/chat-bot/ChatBot.jsx";
// import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
import Radio from "../components/radio/Radio.jsx";
import { Modal } from "../components/Components.jsx";
import ConnectForm from "../connect/ContactForm.jsx";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
import { StartPageLoadTop } from "../../utilities/utilities.js";

const HomeLayout = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
		connectModalOpen: false,
		errorModalOpen: false,
		workingModal: false,
	});
	const [isAdmin, setIsAdmin] = useState(false);

	const location = window.location.pathname;

	const admin = location === "/members-area/account";

	console.log(admin);
	console.log(isAdmin);
	const fetchAdminAccess = async () => {
		try {
			const isAdmin = await checkAdminAccess();
			console.log(isAdmin);
			if (isAdmin === true && admin === true) {
				setIsAdmin(isAdmin);
			} else {
				setIsAdmin(false);
			}
			// Update state with the result
		} catch (error) {
			console.error("Error checking admin access:", error);
		}
	};

	fetchAdminAccess();

	const handleModalClick = () => {
		setState({ ...state, modalOpen: !state.modalOpen });
	};

	const handleCloseModal = () => {
		setState({
			...state,
			modalOpen: false,
			errorModalOpen: false,
			workingModal: false,
		});
	};

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<>
			{!isAdmin && <Header />}
			<Outlet />
			<Modal
				open={state.modalOpen}
				handleClose={handleCloseModal}
			>
				<ConnectForm
					open={state.modalOpen}
					close={() => setState({ ...state, modalOpen: false })}
				/>
				<ErrorModal
					open={state.errorModalOpen}
					close={() => setState({ ...state, errorModalOpen: false })}
				/>
				<WorkingModal
					open={state.workingModal}
					close={() => setState({ ...state, workingModal: false })}
				/>
			</Modal>
			{!isAdmin && <ChatBot />}
			{!isAdmin && <Radio />}
			{!isAdmin && <Footer handleModal={handleModalClick} />}
			{/* {!isAdmin && <PolicyBar />} */}
		</>
	);
};

export default HomeLayout;
