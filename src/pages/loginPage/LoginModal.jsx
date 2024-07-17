import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
import Button from "../components/Button.jsx";
import { InputComp, SelectComp, TextAreaComp, FormComp, Modal } from "../components/Components";
import { buttonStyle, inputStyle, formStyle, buttonStyleLessSoft } from "../../styles/responsiveStyling.js";
const LoginModal = ({ open }) => {
	const navigate = useNavigate();
	const { signIn } = UserAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [openErrorModal, setOpenErrorModal] = useState(false);
	const [state, setState] = useState({
		errorMessage: "",
	});

	const user = UserAuth();

	useEffect(() => {
		initializeState();
	}, []);

	const initializeState = () => {
		setEmail("");
		setPassword("");
		setState({
			errorMessage: "",
			initialLoad: false,
		});
		setOpenModal(false);
		setOpenErrorModal(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({
			errorMessage: "",
			loading: true,
		});
		getFirestore();

		try {
			await signIn(email, password);
			if (user) {
				const db = getFirestore();
				const userId = user.user.uid;
				const userDocRef = doc(db, "users", userId);
				await setDoc(
					userDocRef,
					{
						profile: {
							lastLogin: new Date(),
						},
					},
					{ merge: true }
				);
				setOpenModal(true);
				setTimeout(() => {
					navigate("/members-area/home");
					setState({
						errorMessage: "",
						loading: false,
					});
				}, 3000);
			}
		} catch (error) {
			setState({
				errorMessage: error.code,
			});
			setOpenErrorModal(true); // Ensure that openErrorModal is set to true
			errorTimeOut();
			console.log(error.code, "error code");
			console.log(openErrorModal, "openErrorModal");
		}
	};

	const errorTimeOut = () => {
		setTimeout(() => {
			setState({
				errorMessage: "",
			});
			setOpenModal(false);
			setOpenErrorModal(false);
		}, 4000);
	};

	const buttonStyle =
		"rounded-xl border-2 border-white text-white uppercase font-montserrat sm:text-sm text-xl hover:font-semibold sm:px-4 px-12 py-2 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out";
	return (
		<Modal open={open}>
			<ErrorModal open={openErrorModal} message={state.errorMessage} />
			<WorkingModal open={openModal} />
			<FormComp style={`${formStyle} ${state.loading ? "hidden" : ""}`}>
				<h2 className='text-center sm:text-sm sm:whitespace-nowrap text-2xl text-white font-montserrat font-thin tracking-widest	py-4 uppercase'>
					Sign in to your account
				</h2>
				<InputComp
					style={inputStyle}
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					name='email'
					type='email'
					autoComplete='email'
					required
					placeholder='Email'
				/>
				<InputComp
					style={inputStyle}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
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
							className='ml-2 text-gray-600 sm:text-xs  group-hover:text-white transition-all ease-in-out duration-300 font-montserrat '
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
