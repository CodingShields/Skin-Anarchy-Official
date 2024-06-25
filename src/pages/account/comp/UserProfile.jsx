import { useState, useEffect } from "react";
import { formatTimeStamp } from "../../../utilities/utilities";

const UserProfile = ({ profileData }) => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		loadProfile: false,
	});

	const [userProfile, setUserProfile] = useState(profileData);

	useEffect(() => {
		if (profileData) {
			setUserProfile(profileData);
		} else {
			setUserProfile([]);
		}
	}, [profileData]);

	return (
		<>
			{userProfile?.map((user, index) => (
				<div
					className=' bg-black text-white flex flex-col w-[700px] justify-start items-center h-[350px] ring-1 ring-white rounded-lg px-12 font-montserrat py-4'
					key={index}
				>
					<h1 className='text-3xl font-thin uppercase h-fit w-full text-center border-b mb-8 pb-2'>Profile</h1>{" "}
					<div className='grid grid-cols-2 w-[325px] h-fit gap-2'>
						{" "}
						<p className='mr-6 w-30 text-right uppercase tracking-widest font-thin'> Name: </p>
						<p>
							{user?.first} {user?.last}
						</p>{" "}
						<p className='mr-6 w-30 text-right uppercase tracking-widest font-thin'>Last Login:</p>
						<p> {formatTimeStamp(user?.lastLogin)}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest font-thin'>Joined:</p>
						<p> {formatTimeStamp(user?.signUpDate)}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest font-thin'>Birthday:</p>
						<p>{user?.birthday}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest font-thin'> Email:</p>
						<p>{user?.email}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default UserProfile;
