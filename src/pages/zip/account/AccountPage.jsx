import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../fireBase/firebaseConfig";
import AdminPage from "../admin/AdminPage";
import UserAccountPage from "./UserAccountPage";
import { doc, getDoc } from "firebase/firestore";

const AccountPage = () => {
	const user = UserAuth();
	const userId = user.user.uid;
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
	});
	const [adminAccess, setAdminAccess] = useState(false);

	useEffect(() => {
		setState({ ...state, loading: true });
		const checkAdminAccess = async () => {
			const userRef = doc(db, "users", userId);
			const userSnap = await getDoc(userRef);
			const userData = userSnap.data();
			if (userData.profile.adminAccess === true) {
				setAdminAccess(userData.profile.adminAccess);
				setState({ ...state, loading: false });
			} else {
				setAdminAccess(false);
				// setState({ ...state, loading: false });
			}
		};
		checkAdminAccess();
	}, [userId]);

	return <div className='w-full h-full '>{adminAccess ? <AdminPage /> : <UserAccountPage />}</div>;
};

export default AccountPage;
