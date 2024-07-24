import { useState, useEffect } from "react";
import { formatTimeStamp } from "../../../utilities/utilities";
import { Button } from "../../components/Components"
import { buttonStyle } from "../../../styles/responsiveStyling";
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
					className='bg-black text-white relative hover:text-black hover:py-12 hover:bg-white transition-all ease-in-out duration-700 group flex flex-col w-[690px] justify-center items-center hover:h-[350px] h-36 overflow-hidden ring-1 ring-white rounded-lg px-12 font-montserrat py-4 mx-auto mb-4'
					key={index}
				>
					<h1 className='text-3xl font-thin uppercase group-hover:font-normal h-fit w-full group-hover:border-black border-b mb-8 pb-2 text-center'>
						Profile
					</h1>{" "}
					<Button text="Edit" style=" absolute top-2 right-8 text-black hover:scale-150 transition-all ease-in-out duration-500 hover:text-white hover:bg-black rounded-xl px-2" />
					<div className='group-hover:grid group-hover:grid-cols-2 group-hover:w-[325px] h-fit gap-2 group-hover:visible hidden'>
						{" "}
						<p className='mr-6 w-30 text-right uppercase tracking-widest '> Name: </p>
						<p>
							{user?.first} {user?.last}
						</p>{" "}
						<p className='mr-6 w-30 text-right uppercase tracking-widest '>Last Login:</p>
						<p> {formatTimeStamp(user?.lastLogin)}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest '>Joined:</p>
						<p> {formatTimeStamp(user?.signUpDate)}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest '>Birthday:</p>
						<p>{user?.birthday}</p>
						<p className='mr-6 w-30 text-right uppercase tracking-widest '> Email:</p>
						<p>{user?.email}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default UserProfile;
