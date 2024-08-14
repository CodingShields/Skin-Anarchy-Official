import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import StatsTab from "./user-management/StatsTab";
import HamburgerUpBtn from "../../components/buttons/hamburgerUpBtn";
import HamburgerDownBtn from "../../components/buttons/hamburgerDownBtn";
import { formatTimeStamp, formatDate } from "../../../utilities/utilities";
import { BellAlertIcon } from "@heroicons/react/24/outline";
const adminTable = [
	"Name",
	"Email",
	"Birthday",
	"Member Since",
	"Last Visit",
	`Blog Noti`,
	"Podcast Noti",
	"News Letter",
	"Upcoming Noti",
	"Sub Member",
	"Admin Access",
	"Delete User",
];

const AdminUserManagement = ({ open }) => {
	const [users, setUsers] = useState([]);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		statBar: false,
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

	const handleStatsBar = () => {
		setState((prevState) => ({
			...prevState,
			statBar: !prevState.statBar,
		}));
	};

	const divClass = state.statBar
		? "flex flex-row justify-evenly items-start w-fit h-fit mt-8 space-x-10 border-2 border-black px-8 py-4 bg-white shadow-lg shadow-black transition-all duration-500 ease-in"
		: "flex flex-row h-14 w-fit  mt-4  transition-bg-opacity bg-opacity-0 duration-300 ease-out mb-4";
	if (!open) return null;

	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<div className='w-full border-b-4 border-black '>
				<h1 className='text-4xl font-bold mb-2 w-full text-center'>Admin User Management</h1>
			</div>
			{/* <div className={divClass}>
				<div className='flex flex-col justify-start items-center w-full h-full '>
					{!state.statBar ? (
						<div className='flex flex-row justify-center items-center w-fit h-fit group '>
							<div onClick={handleStatsBar} className='group hover:cursor-pointer'>
								<HamburgerDownBtn />
								<h1 className='text-md font-bold text-center group-hover:text-blue-500'>Open User Stats</h1>
							</div>
						</div>
					) : (
						<div className='flex flex-row justify-start items-start w-full h-full group hover:cursor-pointer '>
							<div onClick={handleStatsBar} className='group-hover:text-blue-500 h-full flex flex-col w-full justify-start items-start mr-4'>
								<HamburgerUpBtn />
								<h1 className='text-md font-bold text-center group-hover:text-blue-500 '>Close </h1>
							</div>
							<StatsTab />
						</div>
					)}
				</div>
			</div> */}
			<div className='w-full h-fit flex flex-row justify-center items-end text-center my-4 '>
				<div className='flex flex-row justify-evenly items-center text-center space-x-4 text-sm'>
					<h1 className='font-bold '>View By:</h1>
					<select className='w-fit h-fit '>
						<option>All Users</option>
						<option>Active Subs </option>
						<option>NonActive Subs </option>
						<option>Cancelled </option>
					</select>
				</div>
				<div className='flex flex-row justify-evenly items-center text-center  space-x-4 mx-2 text-sm'>
					<h1 className='font-bold'>Search:</h1>
					<select className='w-48'>
						<option>First Name </option>
						<option>Last Name </option>
						<option>Email </option>
						<option>User ID </option>
					</select>
				</div>
				<div className='space-x-2'>
					<input className='w-48' type='text' />
					<button className='bg-black hover:bg-gold-500 text-white font-bold py-2 px-4 rounded'>Search</button>
					<button className='bg-black hover:bg-gold-500 text-white font-bold py-2 px-4 rounded'>Export</button>
				</div>
			</div>
			<div className='w-fit h-fit inline-flex justify-end items-end '>
				<table className='min-w-max border-collapse border border-gray-400 place-items-center place-content-center'>
					<thead>
						<tr className='bg-gray-50 border-b border-gray-200 text-[14px]'>
							<th className='border-black border-2 bg-gray-200'>
								<div className=' mx-auto flex flex-col h-fit w-fit justify-center items-center  text-center px-2'>
									<input className='h-3 w-3 my-2' type='checkbox' />
								</div>
							</th>
							{adminTable.map((item, index) => (
								<th key={index} className='border border-black w-fit px-2 uppercase'>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='text-center group  whitespace-nowrap text-[12px] '>
						{users.map((user, id) => (
							<tr key={id} className='h-8 hover:bg-blue-200'>
								<td className='px-3 border border-gray-400'>
									<input className='h-3 w-3' type='checkbox' />
								</td>

								<td className='px-3 border border-gray-400 '>
									{user.profile.first} {user.profile.last}
								</td>
								<td className='px-3 border border-gray-400'>{user.profile.email}</td>
								<td className='px-3 border border-gray-400'>{user.profile.birthday}</td>
								<td className='px-3 border border-gray-400'>{formatTimeStamp(user?.profile.signUpDate)}</td>
								<td className='px-3 border border-gray-400'>{formatTimeStamp(user?.profile.lastLogin)}</td>
								<td className=' border border-gray-400'>
									{user.profile.blogNotification ? (
										<p className='text-red-500 text-[12px] uppercase font-semibold'>Admin</p>
									) : (
										<p className='text-green-500 text-[12px] uppercase font-semibold'>Member</p>
									)}
								</td>
								<td className='px-3 border border-gray-400'>
									<p>
										{user.profile.podcastNotification ? (
											<p className='text-green-500 text-[12px] uppercase font-semibold'>True</p>
										) : (
											<p className='text-red-500 text-[12px] uppercase font-semibold'>False</p>
										)}
									</p>
								</td>
								<td className='px-3 border border-gray-400 hover:bg-black '>
									{" "}
									<p>
										{user.profile.newsLetterNotifications ? (
											<p className='text-green-500 text-[12px] uppercase font-semibold'>True</p>
										) : (
											<p className='text-red-500 text-[12px] uppercase font-semibold'>False</p>
										)}
									</p>
								</td>
								<td className='px-3 border border-gray-400 '>
									<p>
										{user.profile.upComingNotifications ? (
											<p className='text-green-500 text-[12px] uppercase font-semibold'>True</p>
										) : (
											<p className='text-red-500 text-[12px] uppercase font-semibold'>False</p>
										)}
									</p>{" "}
								</td>
								<td className='px-3 border border-gray-400 '>True/False</td>

								<td className='px-3 border border-gray-400 '>
									{user.profile.adminAccess ? (
										<p className='text-red-500 text-[12px] uppercase font-semibold'>Admin</p>
									) : (
										<p className='text-green-500 text-[12px] uppercase font-semibold'>Member</p>
									)}
								</td>
								<td className='px-3 border border-gray-400'>
									{" "}
									<button className=' transition-all ease-in-out duration-500 hover:bg-red-500  text-black hover:text-white rounded-2xl font-bold py-1 px-2 rounded text-[12px]'>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminUserManagement;
