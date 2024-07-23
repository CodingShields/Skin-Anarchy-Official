import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext.jsx";
import { Modal } from "../components/Components.jsx";
// import PrivacyPolicy from "./privacyPolicy.jsx";
import birthdayIcon from "../../assets/icons/formIcons/birthdayIcon.svg";
import emailIcon from "../../assets/icons/formIcons/emailIcon.svg";
import phoneIcon from "../../assets/icons/formIcons/phoneIcon.svg";
import personIcon from "../../assets/icons/formIcons/personIcon.svg";
import passwordIcon from "../../assets/icons/formIcons/passwordIcon.svg";
import { useUserStoreActions } from "../../stateStore/userStore.js";
import { useUserStore } from "../../stateStore/userStore.js";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import PrivacyPolicy from "../disclaimer-privacy-policy/PrivacyPolicyPage.jsx";
import { Button, InputComp, InputCheckBox } from "../components/Components.jsx";
import { buttonStyle, inputStyle } from "../../styles/responsiveStyling";
import { UserCircleIcon, PhoneIcon, AtSymbolIcon, CalendarDaysIcon, LockClosedIcon, BellAlertIcon, BellSlashIcon } from "@heroicons/react/24/outline";
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
		confirmEmail: "",
		birthday: "",
		password: "",
		confirmPassword: "",
		newPodCastNotification: true,
		upcomingPodcastNotification: true,
		newBlogPost: true,
		newsLetter: true,
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
		confirmEmail: "",
		birthday: "",
		password: "",
		confirmPassword: "",
		newPodCastNotification: true,
		upcomingPodcastNotification: true,
		newBlogPost: true,
		newsLetter: true,
		adminAccess: false,
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

	return (
		<div className='flex flex-row h-full'>
			<Modal open={state.renderPrivacyPolicy}></Modal>
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
							<div className='relative mt-2 rounded-md shadow-sm w-72 text-white space-y-4'>
								<InputComp
									icon={<UserCircleIcon className='w-5 h-5 text-gray-400' />}
									type='text'
									style={inputStyle}
									placeholder='First Name'
									name='firstName'
									value={form.firstName}
									onChange={(e) => {
										setForm({ ...form, firstName: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<UserCircleIcon className='w-5 h-5 text-gray-400' />}
									type='text'
									style={inputStyle}
									placeholder='Last Name'
									name='lastName'
									value={form.lastName}
									onChange={(e) => {
										setForm({ ...form, lastName: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<CalendarDaysIcon className='w-5 h-5 text-gray-400' />}
									type='date'
									style={inputStyle}
									name='email'
									value={form.birthday}
									onChange={(e) => {
										setForm({ ...form, birthday: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<AtSymbolIcon className='w-5 h-5 text-gray-400' />}
									type='email'
									style={inputStyle}
									placeholder='Email'
									name='email'
									value={form.email}
									onChange={(e) => {
										setForm({ ...form, email: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<AtSymbolIcon className='w-5 h-5 text-gray-400' />}
									type='email'
									style={inputStyle}
									placeholder='Confirm Email'
									name='confirmEmail'
									value={form.email}
									onChange={(e) => {
										setForm({ ...form, email: e.target.value });
									}}
									required
								/>

								<InputComp
									icon={<PhoneIcon className='w-5 h-5 text-gray-400' />}
									type='phone'
									style={inputStyle}
									name='phone'
									placeholder='Phone Number'
									value={form.phone}
									onChange={(e) => {
										setForm({ ...form, phone: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<LockClosedIcon className='w-5 h-5 text-gray-400' />}
									type='password'
									placeholder='Password'
									style={inputStyle}
									name='phone'
									value={form.phone}
									onChange={(e) => {
										setForm({ ...form, passWord: e.target.value });
									}}
									required
								/>
								<InputComp
									icon={<LockClosedIcon className='w-5 h-5 text-gray-400' />}
									type='password'
									placeholder='Confirm Password'
									style={inputStyle}
									name='phone'
									value={form.phone}
									onChange={(e) => {
										setForm({ ...form, confirmPassword: e.target.value });
									}}
									required
								/>
							</div>
						</div>
					</fieldset>

					<div className='py-12 w-3/4 border-y-2 border-white '>
						<h2 className='text-3xl font-montserrat font-thin leading-7 text-white uppercase'>Skin Anarchy Notifications</h2>
						<p className='mt-4 text-xl font-montserrat font-thin ml-4 text-white tracking-widest py-4 '>
							We'll always let you know about important changes, never spam your, just pick what else you want to hear about.
						</p>

						<div className='mt-10 space-y-10'>
							<fieldset>
								<legend className='text-3xl font-montserrat font-thin leading-6 text-white uppercase'>Email Notifications</legend>
								<div className='ml-2 mt-6 space-y-6'>
									<div className='relative flex gap-x-3'>
										<div className='inline-flex justify-center items-start space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-6 h-6 mt-2 accent-gold-500 bg-gray-600`}
												checked={form.newPodCastNotification}
												value={form.newPodCastNotification}
												onChange={() => {
													setForm({ ...form, newPodCastNotification: !form.newPodCastNotification });
												}}
											/>
											{form.newPodCastNotification === true ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300 animate-fadeIn' />
											)}
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-2xl text-white uppercase'>
												New Episode notifications
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified when we drop a New Podcast.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='inline-flex justify-center items-start space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-6 h-6 mt-2 accent-gold-500 bg-gray-600`}
												checked={form.upcomingPodcastNotification}
												value={form.upcomingPodcastNotification}
												onChange={() => {
													setForm({ ...form, upcomingPodcastNotification: !form.upcomingPodcastNotification });
												}}
											/>
											{form.upcomingPodcastNotification ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300 animate-fadeIn' />
											)}
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-2xl text-white uppercase'>
												Upcoming Podcasts
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified about upcoming Podcasts.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='inline-flex justify-center items-start space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-6 h-6 mt-2 accent-gold-500 bg-gray-600`}
												checked={form.newBlogPost}
												value={form.newBlogPost}
												onChange={() => {
													setForm({ ...form, newBlogPost: !form.newBlogPost });
												}}
											/>
											{form.newBlogPost ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300 animate-fadeIn' />
											)}
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-2xl text-white uppercase'>
												Blog Notifications
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified about NEW Blog Posts.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='inline-flex justify-center items-start space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-6 h-6 mt-2 accent-gold-500 bg-gray-600 active:accent-gold-500`}
												checked={form.newsLetter}
												value={form.newsLetter}
												onChange={() => {
													setForm({ ...form, newsLetter: !form.newsLetter });
												}}
											/>
											{form.newsLetter ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300 animate-fadeIn' />
											)}
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-2xl text-white uppercase'>
												Weekly NewsLetter
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get Weekly News Letters from Dr. Ekta.</p>
										</div>
									</div>
								</div>
							</fieldset>
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
						<div className='flex flex-col w-3/6 h-fit justify-center items-center bg-white rounded-lg shadow-2xl shadow-black py-4 px-6 mb-10 overflow-hidden'>
							<PrivacyPolicy close={() => setState({ ...state, renderPrivacyPolicy: false })} />{" "}
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
				<Button text='Submit' onClick={handleSubmit} style={buttonStyle} />
			</div>
		</div>
	);
};

export default SignUp;
