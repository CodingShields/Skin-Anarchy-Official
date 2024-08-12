import { useState, useEffect } from "react";
import { formatTimeStamp, resetForm } from "../../../utilities/utilities";
import { Button, InputComp } from "../../components/Components";
import { buttonStyle, inputStyle } from "../../../styles/responsiveStyling";
const UserProfile = ({ profileData }) => {
	const initialState = {
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		profileOpen: false,
		editName: false,
		editEmail: false,
		editBirthday: false,
	};

	const [state, setState] = useState(initialState);

	const [userProfile, setUserProfile] = useState(profileData);

	useEffect(() => {
		if (profileData) {
			setUserProfile(profileData);
		} else {
			setUserProfile([]);
		}
	}, [profileData]);

	return (
		<div
			onMouseEnter={() => setState({ ...state, profileOpen: true })}
			onMouseLeave={() => {
				setState({ ...state, profileOpen: false });
				resetForm(setState, initialState);
			}}
		>
			{userProfile?.map((user, index) => (
				<div
					className={`bg-black text-white relative transition-all ease-in-out duration-700 group flex flex-col w-[690px] ${state.profileOpen ? "text-black bg-white h-[450px]" : "text-white h-36"} justify-center items-center  h-36 overflow-hidden ring-1 ring-white rounded-lg px-12 font-montserrat py-4 mx-auto mb-4`}
					key={index}
				>
					<h1
						className={`${state.profileOpen ? "text-black  font-normal border-b-2 border-black" : "text-white font-thin"} text-3xl uppercase  h-fit w-full  border-b mb-8 pb-2 text-center`}
					>
						Profile
					</h1>
					<div className={`w-fit h-fit ${state.profileOpen ? "visible text-black flex flex-col justify-start items-center space-y-4" : "hidden"}`}>
						<div
							className={`flex flex-col justify-center relative items-center w-fit px-4 rounded-xl group ${state.editName ? "outline-4 outline-gold-500 border border-black shadow-black shadow-lg" : ""}  py-2 transition-all ease-in-out duration-300`}
						>
							<p className='w-64 uppercase tracking-widest text-center py-2 '> User Name:</p>
							<Button
								text={`${state.editName ? "Save" : "Edit"}`}
								onClick={() => setState({ ...state, editName: true })}
								style={`absolute top-2 right-2  transition-all ease-in-out duration-300`}
							/>
							<span className='inline-flex justify-center items-center w-fit space-x-2'>
								<InputComp
									disabled={state.editName === false}
									value={user?.first}
									style={`border-2 rounded-xl select-none w-32 max-w-max text-center border-2 border-black ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editName && "shadow-lg shadow-black"}  active:border-gold-500`}
								/>{" "}
								<InputComp
									disabled={state.editName === false}
									value={user?.last}
									style={`border-2 rounded-xl select-none w-32 max-w-max text-center border-2 border-black ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editName && "shadow-lg shadow-black"}  active:border-gold-500`}
								/>
							</span>
						</div>
						<div className='inline-flex justify-start items-center w-full'>
							<p className='w-64 uppercase tracking-widest text-right'>Last Login:</p>
							<p className='w-fit text-center'> lastLogin</p>
						</div>
						<div className='inline-flex justify-start items-center w-full'>
							<p className='w-64 uppercase tracking-widest text-right '>Joined:</p>
							<p className='w-fit text-center'> signUpDate</p>
						</div>
						<div className='inline-flex justify-start items-center w-full'>
							<p className='w-64 uppercase tracking-widest text-right '>Birthday:</p>
							<InputComp value={user?.birthday} style={"border-0 w-fit text-center"} />
						</div>
						<div className='inline-flex justify-start items-center w-full'>
							<p className='w-64 uppercase tracking-widest text-right '>Email:</p>
							<p className='w-fit text-center'>{user?.email}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserProfile;
