import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext.jsx";
import PrivacyPolicy from "./privacyPolicy.jsx";
import birthdayIcon from "../../assets/icons/formIcons/birthdayIcon.svg";
import emailIcon from "../../assets/icons/formIcons/emailIcon.svg";
import phoneIcon from "../../assets/icons/formIcons/phoneIcon.svg";
import personIcon from "../../assets/icons/formIcons/personIcon.svg";
import passwordIcon from "../../assets/icons/formIcons/passwordIcon.svg";
import { useUserStoreActions } from "../../stateStore/userStore.js";
import { useUserStore } from "../../stateStore/userStore.js";
import whiteLogo from "../../assets/images/logos/white-logo.png";
const SignUp = () => {
	const navigate = useNavigate();
	const { createUser } = UserAuth();
	//   const { resetForm } = useUserStoreActions((actions) => actions.resetForm);
	const { setFirstName } = useUserStoreActions((actions) => actions);
	const { setLastName } = useUserStoreActions((actions) => actions);
	const { setEmail } = useUserStoreActions((actions) => actions);
	const { setBirthday } = useUserStoreActions((actions) => actions);
	const { setPhone } = useUserStoreActions((actions) => actions);
	const { setUserId } = useUserStoreActions((actions) => actions);
	const { setPodcastNotification } = useUserStoreActions((actions) => actions);
	const { setUpComingNotifications } = useUserStoreActions((actions) => actions);
	const { setBlogNotification } = useUserStoreActions((actions) => actions);
	const { setWeeklyNewsletterNotification } = useUserStoreActions((actions) => actions);

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthday: "",
		password: "",
		newPodCastNotification: false,
		upcomingPodcastNotification: false,
		newBlogPost: false,
		newsLetter: false,
		adminAccess: false,
	});
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		renderPrivacyPolicy: false,
	});
	const initializeForm = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthday: "",
		password: "",
		newPodCastNotification: false,
		upcomingPodcastNotification: false,
		newBlogPost: false,
		newsLetter: false,
		admin: false,
	};

	useEffect(() => {
		setForm(initializeForm);
	}, []);

	useEffect(() => {
		if (state.error) {
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 2000);
		}
	}, [state.error]);

	const formatBirthdayToString = (birthday) => {
		const date = birthday;
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}/${day}/${year}`;
	};

	const stateStoreUser = () => {
		setFirstName(form.firstName);
		setLastName(form.lastName);
		setBirthday(formatBirthdayToString(form.birthday));
		setEmail(form.email);
		setPhone(form.phone);
		setPodcastNotification(form.newPodCastNotification);
		setUpComingNotifications(form.upcomingPodcastNotification);
		setBlogNotification(form.newBlogPost);
		setWeeklyNewsletterNotification(form.newsLetter);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const noEmptyFields = Object.values(form).every((item) => item !== "");
		if (!noEmptyFields) {
			setState({
				...state,
				error: true,
				errorMessage: "Please fill out all fields",
			});
		} else if (form.password.length < 6) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must be at least 6 characters",
			});
		} else if (form.password.length > 20) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must be less than 20 characters",
			});
		} else if (form.password.search(/[a-z]/i) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one letter",
			});
		} else if (form.password.search(/[0-9]/) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one digit",
			});
		} else if (form.password.search(/[!@#$%^&*]/) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one special character",
			});
		} else if (form.password.search(/[^a-zA-Z0-9!@#$%^&*]/) > 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must not contain spaces",
			});
		}
		try {
			stateStoreUser();
			await createUser(form);
			navigate("/MembersArea/Home");
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				setState({
					...state,
					error: true,
					errorMessage: "User already exists with this email",
				});
			} else if (error.code === "auth/invalid-email") {
				setState({ ...state, error: true, errorMessage: "Invalid email" });
			} else if (error.code === "auth/weak-password") {
				setState({ ...state, error: true, errorMessage: "Weak password" });
			}
		}
	};

	const handleModal = () => {
		setState({ ...state, renderPrivacyPolicy: !state.renderPrivacyPolicy });
	};

	const handleNotificationChange = (e) => {
		const podCast = e.target.name;
		const upcoming = e.target.name;
		const weekly = e.target.name;
		const blog = e.target.name;
		if (blog === "newBlogPost") {
			setForm({ ...form, newBlogPost: !form.newBlogPost });
		} else if (podCast === "newPodcast") {
			setForm({
				...form,
				newPodCastNotification: !form.newPodCastNotification,
			});
		} else if (upcoming === "upcomingPodcast") {
			setForm({
				...form,
				upcomingPodcastNotification: !form.upcomingPodcastNotification,
			});
		} else if (weekly === "newsLetter") {
			setForm({ ...form, newsLetter: !form.newsLetter });
		}
		console.log(e.target.value);
	};

	return (
		<div className='flex flex-row h-full'>
			<div className='flex flex-col justify-center items-center w-5/6 h-full bg-black  duration-700 ease-in-out animate-fadeIn mx-auto'>
				<div className='h-fit w-full duration-700 ease-in-out '>
					<img className='mx-auto lg:h-32 xl:h-48 w-auto mt-8 my-auto mb-4 delay-300 animate-fadeIn' src={whiteLogo} alt='skinanarchy' />
				</div>
				<h1 className='text-3xl text-center text-white font-montserrat font-thin '> Welcome to the Skin Authority Family</h1>
				<h1 className='text-xl text-center text-white font-montserrat font-thin py-2'>We respect privacy and will never sell your information</h1>
				<form className='flex flex-col justify-start items-center mt-4 space-y-10 bg-black text-white'>
					<fieldset>
						<legend className='text-2xl font-montserrat font-thin text-white leading-6 '>Personal Information</legend>
						<div className='mt-6 space-y-6 gap-x-3'>
							<div className='relative mt-2 rounded-md shadow-sm w-72 text-white'>
								<input
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-9 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									name='firstName'
									value={form.firstName}
									onChange={(e) => {
										setForm({ ...form, firstName: e.target.value });
									}}
									type='text'
									placeholder='First Name'
									required
								/>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<img className='h-5 w-5 text-gray-400' src={personIcon} />
								</div>
							</div>
							<div className='relative mt-2 rounded-md shadow-sm'>
								<input
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-9 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									name='lastName'
									value={form.lastName}
									onChange={(e) => {
										setForm({ ...form, lastName: e.target.value });
									}}
									type='text'
									placeholder='Last Name'
									required
								/>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<img className='h-5 w-5 text-gray-400' src={personIcon} />
								</div>
							</div>
							<div className='relative mt-2 rounded-md shadow-sm'>
								<input
									name='email'
									value={form.email}
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-9 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									onChange={(e) => {
										setForm({ ...form, email: e.target.value });
									}}
									type='email'
									placeholder='Email address'
									required
									autoComplete='username'
								/>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<img className='h-5 w-5 text-gray-400' src={emailIcon} />
								</div>
							</div>
							<div className='relative mt-2  rounded-md shadow-sm'>
								<input
									name='birthday'
									value={form.birthday}
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-12 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									onChange={(e) => {
										setForm({ ...form, birthday: e.target.value });
									}}
									type='birthday'
									placeholder='01/05/1984'
									required
								/>

								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
									<img className='h-5 w-5 text-gray-400' src={birthdayIcon} />
								</div>
							</div>
							<div className='relative mt-2 rounded-md shadow-sm'>
								<input
									name='phone'
									value={form.phone}
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-12 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									onChange={(e) => {
										setForm({ ...form, phone: e.target.value });
									}}
									type='phone'
									placeholder='Cell Phone Number'
									required
								/>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
									<img className='h-5 w-5 text-gray-400' src={phoneIcon} />
								</div>
							</div>
							<div className='relative mt-2 rounded-md shadow-sm'>
								<input
									autoComplete='current-password'
									name='password'
									value={form.password}
									className='block w-full rounded-md border-0 py-1.5 pr-10 indent-9 focus:shadow-xl focus:shadow-gold-500 placeholder:font-montserrat placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
									onChange={(e) => {
										setForm({ ...form, password: e.target.value });
									}}
									type='password'
									placeholder='Password'
									required
								/>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
									<img className='h-5 w-5 text-gray-400' src={passwordIcon} />
								</div>
							</div>
						</div>
					</fieldset>

					<div className='py-12 w-3/4 border-y-2 border-white '>
						<h2 className='text-5xl font-montserrat font-thin leading-7 text-white uppercase'>Skin Anarchy Notifications</h2>
						<p className='mt-4 text-2xl font-montserrat font-thin ml-4 text-white tracking-widest py-4 '>
							We'll always let you know about important changes, never spam your, just pick what else you want to hear about.
						</p>

						<div className='mt-10 space-y-10'>
							<fieldset>
								<legend className='text-3xl font-montserrat font-thin leading-6 text-white uppercase'>Email Notifications</legend>
								<div className='ml-2 mt-6 space-y-6'>
									<div className='relative flex gap-x-3'>
										<div className='flex h-6 items-center'>
											<input
												onChange={(e) => handleNotificationChange(e)}
												value={form.newPodCastNotification}
												id='newPodcast'
												name='newPodcast'
												type='checkbox'
												className='h-4 w-4 rounded border-gold-100 text-gold-500 focus:ring-gold-500 focus:bg-gold-500'
											/>
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-2xl text-white uppercase'>
												New Episode notifications
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified when we drop a New Podcast.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3 text-white'>
										<div className='flex h-6 items-center'>
											<input
												onChange={(e) => handleNotificationChange(e)}
												value={form.upcomingPodcastNotification}
												id='upcomingPodcast'
												name='upcomingPodcast'
												type='checkbox'
												className='h-4 w-4 rounded border-gold-100 text-gold-500 focus:ring-gold-500 focus:bg-gold-500'
											/>
										</div>
										<div className='text-sm leading-6 group'>
											<label htmlFor='candidates' className='font-montserrat text-2xl text-white uppercase'>
												Upcoming Podcasts
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified about upcoming Podcasts.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='flex h-6 items-center'>
											<input
												onChange={(e) => handleNotificationChange(e)}
												value={form.newBlogPost}
												id='newBlogPost'
												name='newBlogPost'
												type='checkbox'
												className='h-4 w-4 rounded hover:border-gold-100 border-4 text-gold-500 hover:ring-gold-500 '
											/>
										</div>
										<div className='text-sm leading-6'>
											<label htmlFor='candidates' className='font-montserrat text-2xl text-white uppercase'>
												Blog Notifications
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified about NEW Blog Posts.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='flex h-6 items-center'>
											<input
												onChange={(e) => handleNotificationChange(e)}
												value={form.newBlogPost}
												id='newsLetter'
												name='newsLetter'
												type='checkbox'
												className='h-4 w-4 rounded border-gold-100 text-gold-500 hover:ring-gold-500 '
											/>
										</div>
										<div className='text-sm leading-6'>
											<label htmlFor='candidates' className='font-montserrat text-2xl text-white uppercase'>
												Weekly NewsLetter
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get Weekly News Letters from Dr. Ekta.</p>
										</div>
									</div>
									{/* <div className='relative flex gap-x-3'>
									<div className='flex h-6 items-center'>
										<input
											id='events'
											name='events'
											type='checkbox'
											className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
										/>
									</div>
									<div className='text-sm leading-6'>
										<label htmlFor='offers' className='font-medium text-gray-900'>
											Upcoming Events
										</label>
										<p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
									</div>
								</div> */}
								</div>
							</fieldset>
							{/* <fieldset>
							<legend className='text-sm font-semibold leading-6 text-gray-900'>Push Notifications</legend>
							<p className='mt-1 text-sm leading-6 text-gray-600'>These are delivered via SMS to your mobile phone.</p>
							<div className='mt-6 space-y-6'>
								<div className='flex items-center gap-x-3'>
									<input
										id='push-everything'
										name='push-notifications'
										type='radio'
										className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
									/>
									<label htmlFor='push-everything' className='block text-sm font-medium leading-6 text-gray-900'>
										Everything
									</label>
								</div>
								<div className='flex items-center gap-x-3'>
									<input
										id='push-email'
										name='push-notifications'
										type='radio'
										className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
									/>
									<label htmlFor='push-email' className='block text-sm font-medium leading-6 text-gray-900'>
										Same as email
									</label>
								</div>
								<div className='flex items-center gap-x-3'>
									<input
										id='push-nothing'
										name='push-notifications'
										type='radio'
										className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
									/>
									<label htmlFor='push-nothing' className='block text-sm font-medium leading-6 text-gray-900'>
										No push notifications
									</label>
								</div>
							</div>
						</fieldset> */}
						</div>
					</div>
					<p className='sign-up-disclaimer-text'>
						To Complete Sign-Up Please View and Agree to{" "}
						<button onClick={handleModal} className='text-blue-500 hover:underline'>
							Privacy Policy
						</button>
					</p>
					<p>Don't worry, we do not sell your data ... we hate that too lol</p>
				</form>
				{state.renderPrivacyPolicy ? (
					<div className='flex fixed justify-center items-center  top-0 left-0 w-full h-full bg-opacity-50	bg-black'>
						<div className='flex flex-col w-3/6 h-4/6 justify-center items-center bg-white rounded-lg shadow-2xl shadow-black py-4 px-6 mb-10 overflow-hidden'>
							<PrivacyPolicy handleModal={handleModal} />
						</div>
					</div>
				) : (
					""
				)}
				{state.error ? (
					<div className='flex fixed justify-center items-center  top-0 left-0 w-full h-full bg-opacity-50	bg-black'>
						<div className='flex flex-col w-fit h-fit justify-center items-center bg-yellow-200 rounded-lg shadow-2xl shadow-black py-4 px-6 mb-10 overflow-hidden'>
							<p className='font-bold color-black text-center'>{state.errorMessage}</p>
						</div>
					</div>
				) : (
					""
				)}
				<button
					onClick={handleSubmit}
					type='button'
					className='rounded-md w-32 bg-blue-200 px-2.5 py-1.5 text-lg font-semibold text-black mx-auto mb-20 shadow-sm hover:bg-white/20'
				>
					Sign-Up
				</button>
			</div>
		</div>
	);
};

export default SignUp;
