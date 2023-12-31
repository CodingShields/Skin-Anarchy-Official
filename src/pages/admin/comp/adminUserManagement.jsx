import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
  });

  useEffect(() => {
    setState({
      loading: true,
      error: true,
      errorMessage: "Loading Previous Blogs",
    });
    const fetchData = async () => {
      const db = getFirestore();
      await getDocs(collection(db, "users")).then((snapshot) => {
        const allUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(allUsers);
        setState({ loading: false, error: false, errorMessage: "" });
      });
    };

    fetchData();
  }, []);
  console.log(users);

  return (
    <div className="block items-center justify-start w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1>Admin User Management</h1>
        <div className="flex flex-row items-start justify-start -space-x-0 w-3/4 h-3/4  border-2 border-black">
          <div className="grid grid-col-4 grid-flow-col gap-2 w-full h-fit  border-b-2 border-black font-bold px-4">
                      <h1
                      className="cursor-pointer hover:text-blue-500"
                      >Name</h1>
            <h1>Email</h1>
            <h1>Birthday</h1>
            <h1>Member Since</h1>
            <h1>Last visit</h1>
            <h1>Blog Noti</h1>
            <h1>Podcast Noti</h1>
            <h1>Blog Noti</h1>
            <h1>NewsLetter</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
