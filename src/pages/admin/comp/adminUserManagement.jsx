import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    statsBar: false,
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

  const formatTimeStamp = (timestamp) => {
    // Convert nanoseconds to seconds and add to the original seconds
    const timestampInSeconds = timestamp.seconds + timestamp.nanoseconds / 1e9;

    // Create a new Date object from the timestamp in milliseconds
    const date = new Date(timestampInSeconds * 1000);

    // Get the month, day, and year from the Date object
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date in the desired format
    const formattedDate = `${month}, ${day}, ${year}`;

    return formattedDate;
  };
  const handleNotificationChange = async (e, userId) => {
    e.preventDefault();
    const notificationName = e.target.name;
    const notificationValue = e.target.value;
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            profile: {
              ...user.profile,
              [notificationName]: notificationValue === "true" ? true : false,
            },
          };
        } else {
          return user;
        }
      });
    });
    try {
      setState({ error: false, errorMessage: "" });
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);

      // Get the current user data from Firestore
      const userSnapshot = await getDoc(userDocRef);
      const userData = userSnapshot.data();

      // Update the user's profile object with the new notification value
      const updatedProfile = {
        ...userData.profile,
        [notificationName]: notificationValue === "true" ? true : false,
      };

      // Update the user document in Firestore
      await setDoc(userDocRef, { profile: updatedProfile }, { merge: true });
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="block items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center w-fit h-full mt-8">
        <h1 className="text-4xl font-bold">Admin User Management</h1>
        <div className="flex flex-row justify-evenly items-start w-fit h-fit mt-8 space-x-10 border-2 border-black px-8 py-4 bg-white shadow-lg shadow-black">
          <div className="flex flex-col justify-center items-center w-fit h-fit text-lg border-2 border-black py-4 px-4 text-lg bg-gray-200">
            <h1 className="font-bold text-xl text-center mb-2">User Stats</h1>
            <div className="w-72 h-fit border-b-2 border-black text-lg">
              <h1 className="font-bold">Active Subs:</h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-8 text-lg">
              <h1 className="font-bold">NonActive Subs:</h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-8 text-lg">
              <h1 className="font-bold">Total Users: </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-fit h-fit  border-2 border-black py-4 px-4 text-lg bg-gray-200">
            <div>
              <h1 className="font-bold text-xl text-center mb-2">
                Notification Stats
              </h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-4 text-lg">
              <h1 className="font-bold">Blog Noti:</h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-8 text-lg">
              <h1 className="font-bold">Podcast Noti:</h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-8 text-lg">
              <h1 className="font-bold">Weekly Newsletter:</h1>
            </div>
            <div className="w-72 h-fit border-b-2 border-black mt-8 text-lg">
              <h1 className="font-bold">Upcoming Noti:</h1>
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>

        <div className="w-11/12 h-fit flex flex-row justify-center items-end text-center text-lg mb-4 ">
          <div className="flex flex-row justify-evenly items-center text-center text-lg space-x-4">
            <h1 className="font-bold">View By:</h1>
            <select className="w-48">
              <option>All Users</option>
              <option>Active Subs </option>
              <option>NonActive Subs </option>
              <option>Cancelled </option>
            </select>
          </div>
          <div className="flex flex-row justify-evenly items-center text-center text-lg space-x-4 ml-2">
            <h1 className="font-bold">Search:</h1>
            <select className="w-48">
              <option>First Name </option>
              <option>Last Name </option>
              <option>Email </option>
              <option>User ID </option>
            </select>
            <input className="w-48" type="text" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
          <div className="flex flex-row justify-evenly items-center text-center mt-8 text-lg space-x-4 ml-2">
            <h1 className="font-bold">Export:</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Export
            </button>
          </div>
        </div>
        <div className="flex w-11/12 h-full justify-center items-start ">
          <div className=" w-fit h-3/4 border-2 border-black">
            <div className="grid grid-cols-11 py-1 border-b-2 border-black font-bold text-center  text-sm bg-white">
              <h1 className="cursor-pointer hover:text-blue-500 ">Name</h1>
              <h1 className="cursor-pointer hover:text-blue-500 ">Email</h1>
              <h1 className="cursor-pointer hover:text-blue-500">Birthday</h1>
              <h1 className="cursor-pointer hover:text-blue-500">
                Member Since
              </h1>
              <h1 className="cursor-pointer hover:text-blue-500">Last Visit</h1>
              <h1 className="cursor-pointer hover:text-blue-500">Blog Noti</h1>
              <h1 className="cursor-pointer hover:text-blue-500">
                Podcast Noti
              </h1>
              <h1 className="cursor-pointer hover:text-blue-500">
                News Letter
              </h1>
              <h1 className="cursor-pointer hover:text-blue-500">
                Upcoming Noti
              </h1>
              <h1 className="cursor-pointer hover:text-blue-500">Sub Member</h1>
              <h1 className="cursor-pointer hover:text-blue-500">
                Delete User
              </h1>
            </div>
            <div
            className="w-fit h-fit overflow-y-scroll"
            >
              {users.map((user, id) => (
                <div
                  key={id}
                  className="grid grid-cols-11 border-b-2 place-items-center border-black font-bold text-center text-sm hover:bg-blue-400 py-2"
                >
                  <h1 className="cursor-pointer hover:text-blue-500 w-72">
                    {user.profile.first} {user.profile.last}
                  </h1>
                  <h1 className="cursor-pointer hover:text-blue-500 w-72">
                    {user.profile.email}
                  </h1>
                  <h1 className="cursor-pointer hover:text-blue-500 w-72">
                    {user.profile.birthday}
                  </h1>
                  <h1 className="cursor-pointer hover:text-blue-500 w-fit">
                    {formatTimeStamp(user.profile.signUpDate)}
                  </h1>
                  <h1 className="cursor-pointer hover:text-blue-500 w-fit">
                    {formatTimeStamp(user.profile.lastLogin)}
                  </h1>
                  <select
                    name={"blogNotification"}
                    onChange={(e) => handleNotificationChange(e, user.id)}
                    className="text-md mb-2"
                    value={user.profile.blogNotification ? true : false}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  <select
                    name={"podcastNotification"}
                    onChange={(e) => handleNotificationChange(e, user.id)}
                    className="text-md mb-2"
                    value={user.profile.podcastNotification ? true : false}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  <select
                    name="newsLetterNotifications"
                    onChange={(e) => handleNotificationChange(e, user.id)}
                    className="text-md mb-2"
                    value={user.profile.newsLetterNotifications ? true : false}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  <select
                    name="upComingNotifications"
                    onChange={(e) => handleNotificationChange(e, user.id)}
                    className="text-md mb-2"
                    value={user.profile.upComingNotifications ? true : false}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  <h1>True/False</h1>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
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
