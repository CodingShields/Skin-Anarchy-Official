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
	const currentDate = new Date();

	return (
		<div className='block items-center justify-center w-full h-full '>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<h1>Admin User Management</h1>
				<div className='flex w-fit h-full justify-center items-center'>
					<div className=' w-fit h-3/4'>
						<div className='grid grid-cols-11 gap-x-3 gap-y-2 border-b-2 border-black font-bold text-center'>
							<h1 className='cursor-pointer hover:text-blue-500 '>Name</h1>
							<h1 className='cursor-pointer hover:text-blue-500 '>Email</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Birthday</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Member Since</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Last Visit</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Blog Noti</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Podcast Noti</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>News Letter</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Upcoming Noti</h1>
							<h1 className='cursor-pointer hover:text-blue-500'> Premium</h1>
							<h1 className='cursor-pointer hover:text-blue-500'>Delete</h1>
						</div>
						<div className='grid grid-cols-11 gap-x-3 gap-y-2 border-b-2 place-items-center border-black font-bold text-center'>
							{users.map((user) => (
								<>
									<h1>
										{user.profile.first} {user.profile.last}
									</h1>
									<h1>{user.profile.email}</h1>
									<h1>{user.profile.birthday}</h1>
									<h1>{formatTimeStamp(user.profile.signUpDate)}</h1>
									<h1>{formatTimeStamp(user.profile.lastLogin)}</h1>
									<select className='text-md' value={user.profile.blogNotification ? "True" : "False"}>
										<option>True</option>
										<option>False</option>
									</select>
									<select className='text-md' value={user.profile.podcastNotification ? "True" : "False"}>
										<option>True</option>
										<option>False</option>
									</select>
									<select className='text-md' value={user.profile.weeklyNewsletterNotification ? "True" : "False"}>
										<option>True</option>
										<option>False</option>
									</select>
									<select className='text-md' value={user.profile.upcomingNotifications ? "True" : "False"}>
										<option>True</option>
										<option>False</option>
									</select>
									<h1>Premium</h1>
									<button>Delete</button>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminUserManagement;
