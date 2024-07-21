import { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { db } from "../../../fireBase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Modal } from "../../components/Components";
import PropTypes from "prop-types";
const WelcomeBackUserModal = ({ open }) => {
	const [userName, setUserName] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	const findCurrentUserName = async () => {
		const currentUser = UserAuth();
		const userId = currentUser.user.uid;

		try {
			const snapshot = await getDocs(collection(db, "users"));
			const users = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			const currentUserProfile = users.find((user) => user.id === userId);
			setUserName(currentUserProfile.profile.first);
			setOpenModal(true);
		} catch (error) {
			console.log("Error fetching user profile:", error);
		}
	};

	findCurrentUserName();

	if (!open) {
		return null;
	}

	return (
		<Modal open={open && openModal}>
			<h1 className='w-full text-6xl font-thin text-white text-center py-4 font-montserrat'>Welcome {userName ? userName : "User"}</h1>
		</Modal>
	);
};

WelcomeBackUserModal.propTypes = {
	open: PropTypes.bool.isRequired,
};

export default WelcomeBackUserModal;
