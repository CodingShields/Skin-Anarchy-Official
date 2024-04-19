import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const UserAccountPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		loadProfile: false,
	});

	const [userProfile, setUserProfile] = useState([]);
	const user = UserAuth();
	const userId = user.user.uid;
	const navigate = useNavigate();

	useEffect(() => {
		const FindCurrentUser = async () => {
			const db = getFirestore();
			await getDocs(collection(db, "users")).then((snapshot) => {
				const users = snapshot.docs.map((doc) => ({
					id: userId,
					...doc.data(),
				}));
				const currentUserProfile = users.find((user) => user.id === userId && user.profile);
				console.log(currentUserProfile);
				setUserProfile([currentUserProfile]);
				setState({ loading: false, error: false, errorMessage: "", loadProfile: true });
			});
		};
		FindCurrentUser();
	}, []);

	const formatTimeStamp = (timestamp) => {
		const date = timestamp.toDate();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}/${day}/${year}`;
	};

	return (
		<div className='flex flex-row w-full h-fit justify-center items-center bg-white'>
			<div
			className="flex flex-col w-full h-fit justify-center items-center bg-white"
			>

			</div>
			{userProfile.map((user, index) => (
				<div className=' shadow-gray-800 shadow-xl bg-gray-400 flex flex-col w-fit justify-center items-center px-12 py-12' key={index}>
					<div className='grid grid-rows-8 grid-flow-row w-128 h-full whitespace-nowrap gap-10 justify-center items-center'>
						<h1 className='text-3xl font-bold text-gray-800 mt-10 h-full w-full text-center'>Account Page</h1>

						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							{" "}
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'>Last Login:</h1>
							<h1 className='group-hover:font-bold text-gray-800 group-hover:text-blue-300'>{formatTimeStamp(user.profile.lastLogin)}</h1>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Account Created:</h1>
							<h1 className='group-hover:font-bold text-gray-800 group-hover:text-blue-300'>{formatTimeStamp(user.profile.signUpDate)}</h1>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Birthday</h1>
							<h1 className='group-hover:font-bold text-gray-800 group-hover:text-blue-300'>BirthDay</h1>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							{" "}
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Name</h1>
							<h1 className='group-hover:font-bold text-gray-800 group-hover:text-blue-300'>
								{user.profile.first} {user.profile.last}
							</h1>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className=' text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Email</h1>
							<h1 className='group-hover:font-bold text-gray-800 group-hover:text-blue-300'>{user.profile.email}</h1>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> New Podcast</h1>
							<select
								value={user.profile.podcastNotification}
								className='w-fit h-fit rounded-lg border-2 border-gray-400 group-hover:border-blue-400 group-hover:border-4'
							>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Weekly Newsletter</h1>
							<select value={user.profile.weeklyNewsletterNotification} className='w-fit h-fit rounded-lg border-2 border-gray-400'>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> Upcoming Podcast</h1>
							<select value={user.profile.upComingNotifications} className='w-fit h-fit rounded-lg border-2 border-gray-400'>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
						</div>
						<div className='flex flex-row w-96 h-fit justify-between items-center border-b-2 border-black group hover:border-blue-300 pb-2'>
							<h1 className='text-2xl font-bold text-gray-800 group-hover:text-blue-300'> New Blog Post</h1>
							<select name={"blogNotification"} value={user.profile.blogNotification} className='w-fit h-fit rounded-lg border-2 border-gray-400'>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
						</div>
					</div>
				</div>
			))}
			<div
			className="flex flex-row w-full h-full justify-center items-center bg-white"
			>

			</div>
		</div>
	);
};

export default UserAccountPage;
