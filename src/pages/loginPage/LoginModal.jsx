import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "../../fireBase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { InputComp, SelectComp, TextAreaComp, FormComp, Modal, Button } from "../components/Components";
import { buttonStyle, inputStyle, formStyle, buttonStyleLessSoft } from "../../styles/responsiveStyling.js";
const LoginModal = ({ open, close }) => {
	const navigate = useNavigate();
	const { signIn } = UserAuth();
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
			// if (state.currentUser) {
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

	const buttonStyle =
		"rounded-xl border-2 border-white text-white uppercase font-montserrat sm:text-sm text-xl hover:font-semibold sm:px-4 px-12 py-2 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out";
	return (
		<Modal open={open} close={close}>
			<ErrorModal open={state.error} message={state.message} />
			<WorkingModal open={state.loading} close={()=>setState({ ...state, error: false, loading: false, message: "" })} />
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
				<div className='inline-flex items-center justify-center space-x-6 w-full'>
					<p className=' py-4 text-center text-sm uppercase text-gray-200 font-montserrat font-thin tracking-widest'>Not a member ? </p>
					<Button onClick={() => navigate("/sign-up")} style={`${buttonStyleLessSoft} text-white/50`} text='Sign-up For Free' />
				</div>
			</FormComp>
		</Modal>
	);
};

export default LoginModal;
