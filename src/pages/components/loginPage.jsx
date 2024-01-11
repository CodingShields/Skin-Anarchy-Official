import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { getFirestore, doc, updateDoc, setDoc } from "firebase/firestore";
import logo from "../../assets/images/logo.png";

const LoginPage = () => {
	const navigate = useNavigate();
	const { signIn } = UserAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
	});
	const initializeState = () => {
		setEmail("");
		setPassword("");
		setState({
			error: false,
			errorMessage: "",
		});
	};

	useEffect(() => {
		initializeState();
	}, []);

	const user = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({ error: false, errorMessage: "" });
		try {
			await signIn(email, password);
			console.log("User logged in successfully");
			if (user) {
				console.log("test");
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
				navigate("/MembersArea/Home");
			}
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				setState({
					error: true,
					errorMessage: "User not found. Please try again.",
				});
			} else if (error.code === "auth/wrong-password") {
				setState({
					error: true,
					errorMessage: "Invalid credentials. Please try again.",
				});
			} else {
				setState({
					error: true,
					errorMessage: "Something went wrong. Please try again.",
				});
			}
		}
	};

	useEffect(() => {
		if (state.error) {
			setTimeout(() => {
				setState({ error: false, errorMessage: "" });
			}, 3000);
		}
	}, [state.error]);

	return (
		<div className='flex w-full h-screen  flex-col justify-center  items-center space-y-8'>
			<div className='h-fit w-full'>
				<img className='mx-auto h-48 w-auto' src={logo} alt='skinanarchy' />
			</div>

			<div className='w-112 flex flex-col justify-center items-center space-y-8'>
				<h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
				<div className='bg-white px-10 py-24 rounded-2xl shadow-gray-600 shadow-2xl border-2 border-gray-300'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
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
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
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
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='flex flex-row w-full h-fit space-x-4'>
							<div className='flex items-center justify-start '>
								<input name='remember-me' type='checkbox' className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' />
								<label htmlFor='remember-me' className='ml-2 text-sm leading-6 text-gray-900'>
									Remember me
								</label>
							</div>

							<div className='text-sm leading-6'>
								<a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
									Forgot password?
								</a>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Sign in
							</button>
						</div>
					</form>

					<div>
						{/* <div className='relative mt-10'>
							<div className='absolute inset-0 flex items-center' aria-hidden='true'>
								<div className='w-full border-t border-gray-200' />
							</div>
							<div className='relative flex justify-center text-sm font-medium leading-6'>
								<span className='bg-white px-6 text-gray-900'>Or continue with</span>
							</div>
						</div> */}
						{/* 
						<div className='mt-6 grid grid-cols-2 gap-4'>
							<a
								href='#'
								className='flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]'
							>
								<svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
									<path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
								</svg>
								<span className='text-sm font-semibold leading-6'>Twitter</span>
							</a>

							<a
								href='#'
								className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
							>
								<svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='text-sm font-semibold leading-6'>GitHub</span>
							</a>
						</div> */}
					</div>
				</div>
				{state.error ? (
					<div className='flex fixed justify-center items-center  top-0 left-0 w-full h-full bg-opacity-50	bg-black'>
						<div className='flex flex-col w-fit h-fit justify-center items-center bg-yellow-200 rounded-lg shadow-2xl shadow-black py-4 px-6 mb-10 overflow-hidden'>
							<p className='font-bold color-black text-center'>{state.errorMessage}</p>
						</div>
					</div>
				) : (
					""
				)}

				<p className='mt-10 text-center text-md text-black'>
					Not a member?{" "}
					<button onClick={(e) => navigate("/SignUp")} className='font-semibold leading-6  hover:text-violet-500 hover:-translate-y-1'>
						Click Here To Sign-up For Free
					</button>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
