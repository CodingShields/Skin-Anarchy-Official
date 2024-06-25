import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
import Button from "../components/Button.jsx";

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

	const user = UserAuth(); // Call the hook unconditionally

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
		<div
			className={
				open
					? "w-full h-screen fixed top-0 left-0 transition-all duration-700 animate-fadeIn z-20"
					: "animate-fadeOut w-full h-full fixed top-0 left-0 transition-all "
			}
		>
			<ErrorModal open={openErrorModal} message={state.errorMessage} />
			<WorkingModal open={openModal} />
			<div className='w-full h-full flex flex-col justify-center items-center '>
				<div className='sm:w-3/4 sm:h-fit xl:size-64 bg-black sm:px-4 px-8 sm:py-2 py-10 rounded-2xl border-[1px] text-white border-white bg-opacity-70 z-50'>
					<h2 className='text-center sm:text-sm sm:whitespace-nowrap text-2xl text-white font-montserrat font-thin tracking-widest	py-4 uppercase'>
						Sign in to your account
					</h2>
					<form onSubmit={handleSubmit} className='sm:space-y-4 space-y-6 text-md text-white'>
						<div>
							<label htmlFor='email' className='block sm:text-xs text-sm font-medium sm:leading-3 leading-6 font-montserrat uppercase'>
								Email address
							</label>
							<div className='mt-2'>
								<input
									onChange={(e) => setEmail(e.target.value)}
									value={state.email}
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-char-900 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block sm:text-xs text-sm font-medium sm:leading-3 leading-6 font-montserrat uppercase'>
								Password
							</label>
							<div className='mt-2'>
								<input
									onChange={(e) => setPassword(e.target.value)}
									value={state.password}
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='hover:shadow-md hover:shadow-char-900 block w-full rounded-md border-0 py-1.5 bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-char-90 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='sm:grid-cols-1 grid grid-cols-2 w-full h-fit space-x-4 '>
							<div className='flex items-center justify-start group w-fit mx-auto'>
								<input
									name='remember-me'
									type='checkbox'
									className='h-4 w-4 sm:h-3 sm:w-3 rounded text-black group-hover:ring-1 group-hover:ring-char-900 group-hover:ring-offset-2'
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
						<div className='w-full text-center'>
							<Button onClick={handleSubmit} className={buttonStyle}>
								Sign in
							</Button>
						</div>
					</form>
				</div>
				<p className=' py-4 text-center text-sm uppercase text-gray-200 font-montserrat font-thin tracking-widest'>Not a member ? </p>
				<Button onClick={() => navigate("/sign-up")} className={buttonStyle}>
					Sign-up For Free
				</Button>
			</div>
		</div>
	);
};

export default LoginModal;
