import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext.jsx";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal.jsx";
import WorkingModal from "../components/WorkingModal.jsx";
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
	return (
		<div
			className={
				open
					? "w-full h-full fixed top-0 left-0 transition-all duration-700 translate-y-64 z-20"
					: "-translate-y-[600px] w-full h-full fixed top-0 left-0 transition-all duration-700 "
			}
		>
			<ErrorModal open={openErrorModal} message={state.errorMessage} />
			<WorkingModal open={openModal} />
			<div className='w-full h-fit flex flex-col justify-center items-center '>
				<h2 className='text-center text-2xl text-white font-montserrat font-thin tracking-widest	py-4 '>Sign in to your account</h2>
				<div className='xl:size-64 bg-black px-8 py-10 rounded-2xl border-[1px] text-white border-white bg-opacity-70 z-50'>
					<form onSubmit={handleSubmit} className='space-y-6 text-md text-white'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 font-montserrat uppercase'>
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
							<label htmlFor='password' className='block text-sm font-medium leading-6 font-montserrat uppercase'>
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
									className='ml-2 text-gray-600 group-hover:text-white transition-all ease-in-out duration-300 font-montserrat '
								>
									Remember me
								</label>
							</div>

							<div className='text-md leading-6'>
								<a href='#' className=' text-gray-600 hover:text-white transition-all ease-in-out duration-300 font-montserrat '>
									Forgot password?
								</a>
							</div>
						</div>

						<div className='block w-full text-center'>
							<button
								type='submit'
								className=' font-montserrat font-thin mx-auto rounded-md bg-black px-12 py-2.5 text-md text-white border-2 border-gray-600 shadow-sm  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:font-semibold hover:text-black transition-all ease-in-out duration-500 '
							>
								Sign in
							</button>
						</div>
					</form>
					<p className=' py-4 text-center text-md text-gray-200 font-montserrat font-thin tracking-widest'>Not a member ? </p>

					<button
						onClick={() => navigate("/sign-up")}
						className='font-thin font-montserrat leading-6 duration-300 transition-all ease-in-out tracking-widest'
					>
						<span className='cursor-pointer tracking-widest underline underline-offset-4 hover:animate-pulse text-center'>Click Here </span>To Sign-up
						For Free
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;