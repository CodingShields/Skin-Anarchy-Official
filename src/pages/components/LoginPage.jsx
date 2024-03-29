import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import whiteLogo from "../../assets/images/whiteLogo.png";
import WorkingModal from "./WorkingModal.jsx";
import ErrorModal from "./ErrorModal.jsx";

const LoginPage = () => {
	const navigate = useNavigate();
	const { signIn } = UserAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [openErrorModal, setOpenErrorModal] = useState(false);
	const [state, setState] = useState({
		errorMessage: "",
		initialLoad: false,
	});

	const user = UserAuth(); // Call the hook unconditionally

	useEffect(() => {
		initializeState();
		setState({
			initialLoad: true,
		});
		setTimeout(() => {
			setState({
				initialLoad: false,
			});
		}, 5000);
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

	return (
		<div className='w-full h-full bg-black '>
			<ErrorModal open={openErrorModal} message={state.errorMessage} />
			<WorkingModal open={openModal} />
			<div
				className={
					state.initialLoad
						? "flex h-full w-full scale-150 translate-y-50 duration-1000 ease-in-out animate-fadeIn"
						: "flex h-full w-full scale-y-100 -translate-y-50  duration-1000 ease-in-out animate-rotateLogo pt-24 pb-24"
				}
			>
				<img className='mx-auto lg:h-24 xl:h-72 w-auto mt-8 my-auto' src={whiteLogo} alt='skinanarchy' />
			</div>
			<div
				className={
					state.initialLoad
						? " h-full w-full flex flex-col justify-center items-center space-y-8 scale-0 duration-700"
						: " h-full w-full flex flex-col justify-center items-center space-y-8 translate-y-100 scale-100 duration-700"
				}
			>
				<h2 className='text-center text-xl font-bold  text-white font-openSans tracking-wider	'>Sign in to your account</h2>
				<div className='xl:size-64 bg-black px-8 py-10 rounded-2xl border-[1px] text-white border-white bg-opacity-70'>
					<form onSubmit={handleSubmit} className='space-y-6 text-md text-white'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 font-glacialRegular'>
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
							<label htmlFor='password' className='block text-sm font-medium leading-6 font-glacialRegular '>
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

						<div className='grid grid-cols-2 w-full h-fit space-x-4 '>
							<div className='flex items-center justify-start group '>
								<input
									name='remember-me'
									type='checkbox'
									className='h-4 w-4 rounded text-black group-hover:ring-1 group-hover:ring-char-900 group-hover:ring-offset-2'
								/>
								<label
									htmlFor='remember-me'
									className='ml-2 text-gray-600 group-hover:text-white transition-all ease-in-out duration-300 font-glacialRegular '
								>
									Remember me
								</label>
							</div>

							<div className='text-sm leading-6'>
								<a href='#' className=' text-gray-600 hover:text-white transition-all ease-in-out duration-300 font-glacialRegular '>
									Forgot password?
								</a>
							</div>
						</div>

						<div className='block w-full text-center'>
							<button
								type='submit'
								className='font-glacialRegular mx-auto rounded-md bg-black px-8 py-2.5 text-sm font-semibold text-white border-2 border-gray-600 shadow-sm hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all ease-in-out duration-500 hover:text-black hover:shadow-xl hover:shadow-black'
							>
								Sign in
							</button>
						</div>
					</form>
				</div>

				<p className='mt-10 text-center text-md text-black'>
					Not a member ?
					<button
						onClick={() => navigate("/SignUp")}
						className='font-semibold leading-6 hover:scale-125 hover:-translate-y-4 duration-300 transition-all ease-in-out'
					>
						Click Here To Sign-up For Free
					</button>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
