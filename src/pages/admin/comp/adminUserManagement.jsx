import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
  });
  const user = UserAuth();

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
        <div className="flex w-full h-full justify-center items-center">
          <div className=" w-11/12 h-3/4">
            <div className="grid grid-cols-9 gap-5 border-b-2 border-black font-bold ">
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">Name</h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Email
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Birthday
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Member Since
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Last Visit
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Blog Noti
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Podcast Noti
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                News Letter
              </h1>
              <h1 className=" w-32 cursor-pointer hover:text-blue-500">
                Upcoming Noti
              </h1>
              {users.map((user) => (
                <div className="grid grid-cols-9 gap-5 border-b-2 border-black">
                  <h1 className=" w-fit">
                    {user.profile.first}
                    {""}
                    {user.profile.last}
                  </h1>
                  <h1 className=" w-fit">{user.profile.email}</h1>
                  <h1 className=" w-fit">{user.profile.birthday}</h1>
                  <h1 className=" w-fit">{user.profile.memberSince}</h1>
                  <h1 className=" w-fit">{user.profile.lastVisit}</h1>
                  <h1 className=" w-fit">
                    {user.blogNotifications ? "True" : "False"}
                  </h1>
                  <h1 className=" w-32">
                    {user.podcastNotifications ? "True" : "False"}
                  </h1>
                  <h1 className=" w-32">
                    {user.newsLetter ? "True" : "False"}
                  </h1>
                  <h1 className=" w-32">
                    {user.upcomingEvents ? "True" : "False"}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
