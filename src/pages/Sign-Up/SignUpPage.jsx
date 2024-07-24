import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext.jsx";
import { useUserStoreActions } from "../../stateStore/userStore.js";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import { Button, InputComp, InputCheckBox, Modal } from "../components/Components.jsx";
import { buttonStyle, inputStyle } from "../../styles/responsiveStyling";
import { UserCircleIcon, PhoneIcon, AtSymbolIcon, CalendarDaysIcon, LockClosedIcon, BellAlertIcon, BellSlashIcon } from "@heroicons/react/24/outline";
import WorkingModal from "../components/WorkingModal.jsx";
import ErrorModal from "../components/ErrorModal.jsx";
const SignUp = () => {
	const navigate = useNavigate();
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
	const [form, setForm] = useState({ initializeForm });
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		privacyPolicyOpen: false,
		openModal: false,
	});
	const { createUser } = UserAuth();

	const formatBirthdayToString = (birthday) => {
		const date = birthday;
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}/${day}/${year}`;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const noEmptyFields = Object.values(form).every((item) => item !== "");
		if (noEmptyFields) {
			setState({
				...state,
				error: true,
				errorMessage: "Please fill out all fields",
				openModal: true,
			});
			console.log("Please fill out all fields");
		} else if (form.password.length < 6) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must be at least 6 characters",
			});
			console.log("Password must be at least 6 characters");
		} else if (form.password.length > 20) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must be less than 20 characters",
			});
			console.log("Password must be less than 20 characters");
		} else if (form.password.search(/[a-z]/i) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one letter",
			});
			console.log("Password must contain at least one letter");
		} else if (form.password.search(/[0-9]/) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one digit",
			});
			console.log("Password must contain at least one digit");
		} else if (form.password.search(/[!@#$%^&*]/) < 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must contain at least one special character",
			});
			console.log("Password must contain at least one special character");
		} else if (form.password.search(/[^a-zA-Z0-9!@#$%^&*]/) > 0) {
			setState({
				...state,
				error: true,
				errorMessage: "Password must not contain spaces",
			});
			console.log("Password must not contain spaces");
		} else if (form.password !== form.confirmPassword) {
			setState({
				...state,
				error: true,
				errorMessage: "Passwords do not match",
			});
			console.log("Passwords do not match");
		} else if (form.email !== form.confirmEmail) {
			setState({
				...state,
				error: true,
				errorMessage: "Emails do not match",
			});
			console.log("Emails do not match");
		} else {
			try {
				await createUser(form);
				navigate("/welcome");
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
		}
	};
	return (
		<div className='h-screen'>
			<Modal open={state.openModal} close={() => setState({ ...state, openModal: !state.openModal })}>
				<ErrorModal
					open={state.error}
					message={state.errorMessage}
					close={() => setState({ ...state, error: false, message: "", openModal: false })}
				/>
				<WorkingModal open={state.loading} />
				<PrivacyPolicy close={() => setState({ ...state, privacyPolicyOpen: false, openModal: false })} open={state.privacyPolicyOpen} />
			</Modal>

			<div className='flex flex-col justify-center items-center w-5/6 h-fit bg-black  duration-700 ease-in-out animate-fadeIn mx-auto mt-8'>
				<div className='h-fit w-full duration-700 ease-in-out '>
					<img className='mx-auto lg:h-32 xl:h-48 w-auto my-16  delay-300 animate-fadeIn ' src={whiteLogo} alt='skinanarchy' />
				</div>
				<h1 className='text-3xl text-center text-white font-montserrat font-thin '> Welcome to the Skin Authority Family</h1>
				<h1 className='text-lg text-center text-white font-montserrat font-semibold py-2'>We respect privacy and will never sell your information</h1>
				<form className='flex flex-col justify-start items-center mt-4 space-y-10 bg-black text-white mb-24'>
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
										setForm({ ...form, birthday: formatBirthdayToString(e.target.value) });
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
									type='tel'
									style={inputStyle}
									name='phone'
									placeholder='Phone Number'
									pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
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
									value={form.password}
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
									value={form.confirmPassword}
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
										<div className='inline-flex justify-center items-center space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-5 h-5  accent-gold-500 bg-gray-600 active:accent-gold-500`}
												checked={form.newPodCastNotification}
												value={form.newPodCastNotification}
												onChange={() => {
													setForm({ ...form, newPodCastNotification: !form.newPodCastNotification });
												}}
											/>
											{form.newPodCastNotification === true ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300/50 animate-fadeIn' />
											)}
										</div>
										<div>
											<label htmlFor='comments' className='font-montserrat text-xl text-white uppercase'>
												New Episode notifications
											</label>
											<p className='text-white font-montserrat font-thin text-lg indent-4 uppercase py-2'>Get notified when we drop a New Podcast.</p>
										</div>
									</div>
									<div className='relative flex gap-x-3'>
										<div className='inline-flex justify-center items-center space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-5 h-5  accent-gold-500 bg-gray-600 active:accent-gold-500`}
												checked={form.upcomingPodcastNotification}
												value={form.upcomingPodcastNotification}
												onChange={() => {
													setForm({ ...form, upcomingPodcastNotification: !form.upcomingPodcastNotification });
												}}
											/>
											{form.upcomingPodcastNotification ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300/50 animate-fadeIn' />
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
										<div className='inline-flex justify-center items-center space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-5 h-5  accent-gold-500 bg-gray-600 active:accent-gold-500`}
												checked={form.newBlogPost}
												value={form.newBlogPost}
												onChange={() => {
													setForm({ ...form, newBlogPost: !form.newBlogPost });
												}}
											/>
											{form.newBlogPost ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300/50 animate-fadeIn' />
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
										<div className='inline-flex justify-center items-center space-x-6'>
											<InputCheckBox
												type='checkbox'
												style={` w-5 h-5  accent-gold-500 bg-gray-600 active:accent-gold-500`}
												checked={form.newsLetter}
												value={form.newsLetter}
												onChange={() => {
													setForm({ ...form, newsLetter: !form.newsLetter });
												}}
											/>
											{form.newsLetter ? (
												<BellAlertIcon className='w-8 h-8 text-white animate-fadeIn' />
											) : (
												<BellSlashIcon className='w-8 h-8 text-red-300/50 animate-fadeIn' />
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
					<div className='inline-flex justify-start items-center space-x-2 mb-4 w-3/4'>
						<p className='font-montserrat uppercase tracking-widest'>Please Review Our </p>
						<Button
							text='Privacy Policy'
							onClick={() => setState({ ...state, privacyPolicyOpen: true, openModal: true })}
							style='text-xl uppercase font-montserrat text-white/30 transition-all ease-in-out duration-300 hover:text-white pl-4'
						/>
					</div>
					<Button text='Submit' onClick={handleSubmit} style={buttonStyle} />
				</form>
			</div>
		</div>
	);
};

export default SignUp;
