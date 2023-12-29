import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../fireBase/firebaseConfig";
import AdminPage from "../admin/adminPage";
import {
  doc,
  query,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  where,
  updateDoc,
  setDoc,
  deleteField,
} from "firebase/firestore";

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
        setState({ ...state, loading: false });
      }
    };
    checkAdminAccess();
  }, [userId]);

  return (
    <div className="flex flex-col  h-full w-full bg-zinc-200">
      {!adminAccess ? <div>
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Account Page
        </h1>
      </div> : ""}

      {adminAccess ? <AdminPage /> : ""}
    </div>
  );
};

export default AccountPage;
