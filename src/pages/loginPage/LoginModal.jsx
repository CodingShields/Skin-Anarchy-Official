import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "../../fireBase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { InputComp, FormComp, Modal, Button } from "../components/Components";
import { inputStyle, formStyle } from "../../styles/responsiveStyling.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/socialMediaIcons/facebookIcon.svg";
const LoginModal = ({ open, close }) => {
	const navigate = useNavigate();
	const { signIn, currentUser } = UserAuth();
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
		formModalOpen: false,
		userEmail: "",
		userPassword: "",
	});


	useEffect(() => {
		if (open) {
			setState({ ...state, formModalOpen: true });
		} else {
			setState({ ...state, formModalOpen: false });
		}
	}, [open]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({
			errorMessage: "",
			loading: true,
			formModalOpen: false,
		});
		try {
			await signIn(state.userEmail, state.userPassword);
			console.log(signIn)
			// if (currentUser) {
			// 	const userDocRef = doc(db, "users");
			// 	await setDoc(
			// 		userDocRef,
			// 		{
			// 			profile: {
			// 				lastLogin: new Date(),
			// 			},
			// 		},
			// 		{ merge: true }
			// 	);
			setTimeout(() => {
				navigate("/members-area/home");
				setState({
					errorMessage: "",
					loading: false,
					setFormModalOpen: false,
				});
			}, 3000);
			// }
		} catch (error) {
			setState({
				loading: false,
				error: true,
				message: error.code,
				formModal: false,
			});
			errorTimeOut();
		}
	};
	const errorTimeOut = () => {
		setTimeout(() => {
			setState({
				loading: false,
				error: false,
				errorMessage: "",
				formModal: false,
			});
			close();
		}, 4000);
	};

	const handleGoogle = async (e) => {
		e.preventDefault();
		const provider = await new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const user = result.user;
				console.log(user.displayName)
				console.log(user.uid);
				const additionalUserInfo = getAdditionalUserInfo(result)
				console.log(additionalUserInfo);
				console.log(additionalUserInfo.profile.given_name);
				console.log(additionalUserInfo.profile.family_name);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const handleFacebook = async (e) => {
		e.preventDefault();
		const provider = await new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				console.log(credential);
				const token = credential.accessToken;
				console.log(token);
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	// https://skinanarchy.firebaseapp.com/__/auth/handler
	const buttonStyle =
		"rounded-xl border-2 border-white text-white uppercase font-montserrat sm:text-sm text-xl hover:font-semibold sm:px-4 px-12 py-2 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out";
	return (
		<Modal open={open} close={close}>
			<ErrorModal open={state.error} message={state.message} />
			<WorkingModal open={state.loading} close={() => setState({ ...state, error: false, loading: false, message: "" })} />
			<FormComp style={formStyle} open={state.formModalOpen} close={state.loading}>
				<h2 className='text-center sm:text-sm sm:whitespace-nowrap text-2xl text-white font-montserrat font-thin tracking-widest	py-4 uppercase'>
					Sign in to your account
				</h2>
				<InputComp
					icon={<UserCircleIcon className='w-6 h-6 text-black/50' />}
					style={inputStyle}
					onChange={(e) => setState({ ...state, userEmail: e.target.value })}
					value={state.userEmail}
					name='email'
					type='email'
					autoComplete='email'
					required
					placeholder='Email'
				/>
				<InputComp
					icon={<LockClosedIcon className='w-6 h-6 text-black/50' />}
					style={inputStyle}
					onChange={(e) => setState({ ...state, userPassword: e.target.value })}
					value={state.userPassword}
					name='password'
					type='password'
					autoComplete='current-password'
					required
					placeholder={"Password"}
				/>
				<div className='sm:grid-cols-1 grid grid-cols-2 w-full h-fit space-x-4 '>
					<div className='flex items-center justify-start group w-fit mx-auto'>
						<InputComp
							name='remember-me'
							type='checkbox'
							style='h-4 w-4 sm:h-3 sm:w-3 rounded text-black group-hover:ring-1 group-hover:ring-char-900 group-hover:ring-offset-2'
						/>
						<label
							htmlFor='remember-me'
							className='ml-2 text-gray-600 sm:text-xs  group-hover:text-white transition-all ease-in-out duration-300 font-montserrat whitespace-nowrap'
						>
							Remember me
						</label>
					</div>

					<div className='text-md leading-6 sm:text-center'>
						<a href='#' className=' text-gray-600 sm:text-xs hover:text-white transition-all ease-in-out duration-300 font-montserrat '>
							Forgot password?
						</a>
					</div>
				</div>
				<Button onClick={handleSubmit} style={buttonStyle}>
					Sign in
				</Button>
				<div className='flex flex-col items-center justify-center space-y-4 w-full'>
					<div className='relative block'>
						<Button
							onClick={handleGoogle}
							text='Sign In With Google'
							style='inline-flex items-center  w-56 text-[18px] text-center  indent-8 whitespace-nowrap px-4 h-10 rounded-md hover:text-black transition-all ease-in-out duration-500 text-white/50 hover:bg-white text-black '
						/>
						<img src={google} className=' w-fit h-8 absolute left-1 top-1' />
					</div>
					<div className='relative flex items-center'>
						<Button
							onClick={handleFacebook}
							text='Sign In With Facebook'
							style='inline-flex items-center  w-56 text-[18px] text-center   indent-8 whitespace-nowrap px-4 h-10 rounded-md hover:text-black transition-all ease-in-out duration-500 text-white/50 hover:bg-white text-black '
						/>
						<img src={facebook} className=' w-fit h-8 absolute left-1 top-1' />
					</div>
				</div>

				<div className='inline-flex items-center justify-center  w-full '>
					<p className=' py-4 text-center text-sm uppercase text-white font-montserrat  tracking-widest px-6'>Not a member ? </p>
					<Button
						onClick={() => navigate("/sign-up")}
						style={`rounded-xl  w-fit  text-white/50  cursor-pointer uppercase font-montserrat text-[16px] tracking-widest hover:font-semibold sm:px-4 px-6 py-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out"text-white/50`}
						text='Sign-up For Free'
					/>
				</div>
			</FormComp>
		</Modal>
	);
};

export default LoginModal;
