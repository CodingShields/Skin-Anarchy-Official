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
					className={`bg-black text-white relative transition-all ease-in-out duration-700 group flex flex-col w-[690px] ${state.profileOpen ? "text-black bg-white h-[600px]" : "text-white h-36 shadow-white/50 shadow-xl"} justify-center items-center  h-36 overflow-hidden ring-1 ring-white rounded-lg px-12 font-montserrat py-4 mx-auto mb-4`}
					key={index}
				>
					<h1
						className={`${state.profileOpen ? "text-black  font-normal border-b-2 border-black" : "text-white font-thin"} text-3xl uppercase  h-fit w-full  border-b mb-8 pb-2 text-center`}
					>
						Profile
					</h1>
					<div className={`w-fit h-fit ${state.profileOpen ? "visible text-black flex flex-col justify-start items-center space-y-4" : "hidden"}`}>
						<div
							className={`flex flex-col justify-center relative items-center w-fit px-4 h-fit rounded-xl  group ${state.editName ? "py-6 border-4 bg-gold-100 border-gold-500  shadow-black shadow-lg" : ""}  py-2 transition-all ease-in-out duration-300`}
						>
							<p className='w-64 uppercase tracking-widest text-center pb-4 '>
								{" "}
								User Name:{" "}
								<Button
									text={`${state.editName ? "Save" : "Edit"}`}
									onClick={() => setState({ ...state, editName: true })}
									style={`absolute top-1 right-1  transition-all ease-in-out duration-300 hover:border-2 hover:border-black hover:text-white hover:bg-black transition-all active:translate-y-2 ease-in-out duration-500 py-1 w-16 rounded-xl hover:shadow-black/50 hover:shadow-xl`}
								/>
							</p>

							<span className='inline-flex justify-center items-center w-fit space-x-2 h-fit'>
								<InputComp
									disabled={state.editName === false}
									value={user?.first}
									style={` border-0 rounded-xl select-none w-32 max-w-max text-center   focus:border-0 focus:ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editName && "shadow-lg shadow-black border-black/50 border-2"}  active:border-gold-500`}
								/>{" "}
								<InputComp
									disabled={state.editName === false}
									value={user?.last}
									style={` border-0 rounded-xl select-none w-32 max-w-max text-center   focus:border-0 focus:ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editName && "shadow-lg shadow-black border-black/50 border-2"}  active:border-gold-500`}
								/>
							</span>
						</div>
						<div
							className={`flex flex-col justify-center relative items-center w-fit px-4 h-fit rounded-xl  group ${state.editBirthday ? "py-6 border-4 bg-gold-100 border-gold-500  shadow-black shadow-lg" : ""}  py-2 transition-all ease-in-out duration-300`}
						>
							<p className='w-64 uppercase tracking-widest text-center pb-4'>Birthday:</p>
							<Button
								text={`${state.editBirthday ? "Save" : "Edit"}`}
								onClick={() => setState({ ...state, editBirthday: true })}
								style={`absolute top-1 right-1  transition-all ease-in-out duration-300 hover:border-2 hover:border-black hover:text-white hover:bg-black transition-all active:translate-y-2 ease-in-out duration-500 py-1 w-16 rounded-xl hover:shadow-black/50 hover:shadow-xl`}
							/>
							<InputComp
								value={user?.birthday}
								style={` mx-auto border-0 rounded-xl select-none w-32 max-w-max text-center   focus:border-0 focus:ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editBirthday && "shadow-lg shadow-black border-black/50 border-2"}  active:border-gold-500`}
							/>
						</div>
						<div
							className={`flex flex-col justify-center relative items-center w-fit px-4 h-fit rounded-xl  group ${state.editEmail ? "py-6 border-4 bg-gold-100 border-gold-500  shadow-black shadow-lg" : ""}  py-2 transition-all ease-in-out duration-300`}
						>
							<p className='w-64 uppercase tracking-widest text-center pb-4 '>Email:</p>
							<Button
								text={`${state.editEmail ? "Save" : "Edit"}`}
								onClick={() => setState({ ...state, editEmail: true })}
								style={`absolute top-1 right-1  transition-all ease-in-out duration-300 hover:border-2 hover:border-black hover:text-white hover:bg-black transition-all active:translate-y-2 ease-in-out duration-500 py-1 w-16 rounded-xl hover:shadow-black/50 hover:shadow-xl`}
							/>
							<InputComp
								value={user?.email}
								style={`mx-auto border-0 rounded-xl select-none w-32 max-w-max text-center   focus:border-0 focus:ring-0 outline-0  placeholder:text-black/40 placeholder:font-semibold  focus:outline-gold-500 focus:outline-4 ${state.editEmail && "shadow-lg shadow-black border-black/50 border-2"}  active:border-gold-500`}
							/>
						</div>
						<div className='inline-flex justify-center items-center w-fit'>
							<p className='w-48 uppercase tracking-widest text-right px-4'>Last Login:</p>
							<p className='w-fit text-center uppercase tracking-widest ml-2'> lastLogin</p>
						</div>
						<div className='inline-flex justify-center items-center w-fit'>
							<p className='w-48 uppercase tracking-widest text-right px-4'>Joined:</p>
							<p className='w-fit text-center uppercase tracking-widest ml-2'> signUpDate</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserProfile;
