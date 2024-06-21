import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import UserProfile from "./comp/UserProfile";
import UserNotifications from "./comp/UserNotifications";
import UserBookmarks from "./comp/UserBookmarks";
import WorkingModal from "../components/WorkingModal";
import ErrorModal from "../components/ErrorModal";

const UserAccountPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		loadProfile: false,
	});
	const [profile, setProfile] = useState([]);
	const [Notifications, setNotifications] = useState([]);
	const user = UserAuth();
	const userId = user?.user?.uid;

	useEffect(() => {
		const FindCurrentUser = async () => {
			const db = getFirestore();
			await getDocs(collection(db, "users")).then((snapshot) => {
				const users = snapshot.docs.map((doc) => ({
					id: userId,
					...doc.data(),
				}));
				const currentUserProfile = users.find((user) => user.id === userId && user.profile);
				console.log(currentUserProfile.profile);
				console.log(currentUserProfile.notifications);
				setProfile([currentUserProfile.profile]);
				setNotifications([currentUserProfile.notifications]);
				setState({ loading: false, error: false, errorMessage: "", loadProfile: true });
			});
		};
		FindCurrentUser();
	}, []);

	return (
		<div className=' w-full h-full bg-black'>
			<div className=' w-fit h-[500px] mt-36 justify-center items-center flex flex-row mx-auto space-x-12 mb-12'>
				<UserProfile profileData={profile} />
				<UserNotifications notificationsData={Notifications} />
			</div>{" "}
			<div className="w-fit mx-auto">
				<UserBookmarks />
			</div>
		</div>
	);
};

export default UserAccountPage;
