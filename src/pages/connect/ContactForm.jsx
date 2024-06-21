import { useState } from "react";
import { db } from "../../fireBase/firebaseConfig";
import { arrayUnion, setDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import singleChevronDown from "../../assets/icons/singleChevronDown.svg";
import WorkingModal from "../components/WorkingModal";
import ErrorModal from "../components/ErrorModal";
const ContactForm = ({ close }) => {
	
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
	});

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		company: "",
		phoneCountry: "",
		phone: "",
		email: "",
		interest: "",
		message: "",
	});

	const currentDate = new Date();
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const docRef = doc(db, "forms", "contact");
			await setDoc(
				docRef,
				{
					unreadMessages: arrayUnion({
						id: nanoid(),
						date: currentDate.toDateString(),
						read: false,
						reply: false,
						data: form,
					}),
				},
				{ merge: true }
			),
				handleModalClose()
		} catch (e) {
			console.error("Error adding document: ", e, e.message);
		}
	};

	const handleModalClose = () => {
		close();
	};

	return (
		<div className='flex flex-col h-fit bg-black text-white p-10 rounded-lg font-montserrat	 '>
			<WorkingModal message={state.message} open={state.loading} />
			<ErrorModal open={state.error} message={state.message} />
			<div className='mx-auto w-full text-center  '>
				<img src={whiteLogo} alt='white logo' className='mx-auto h-32' />
			</div>
			<form action='#' method='POST' className='mx-auto  max-w-xl mt-4 '>
				{" "}
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
					<div>
						<label htmlFor='first-name' className='block text-sm  leading-6 '>
							First name
						</label>
						<div className='mt-2.5'>
							<input
								onChange={(e) => setForm({ ...form, firstName: e.target.value })}
								required
								type='text'
								name='first-name'
								id='first-name'
								autoComplete='given-name'
								className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label htmlFor='last-name' className='block text-sm  leading-6 text-white'>
							Last name
						</label>
						<div className='mt-2.5'>
							<input
								onChange={(e) => setForm({ ...form, lastName: e.target.value })}
								required
								type='text'
								name='last-name'
								id='last-name'
								autoComplete='family-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='company' className='block text-sm  leading-6 text-white'>
							Company
						</label>
						<div className='mt-2.5'>
							<input
								onChange={(e) => setForm({ ...form, company: e.target.value })}
								required
								type='text'
								name='company'
								id='company'
								autoComplete='organization'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='email' className='block text-sm  leading-6 text-white'>
							Email
						</label>
						<div className='mt-2.5'>
							<input
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								required
								type='email'
								name='email'
								id='email'
								autoComplete='email'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='phone-number' className='block text-sm  leading-6 text-black'>
							Phone number
						</label>
						<div className='relative mt-2.5'>
							<div className='absolute inset-y-0 left-0 flex items-center'>
								<label htmlFor='country' className='sr-only'>
									Country
								</label>
								<select
									onChange={(e) => setForm({ ...form, phoneCountry: e.target.value })}
									id='country'
									name='country'
									className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm'
								>
									<option value='us'>US</option>
									<option value='eu'>EU</option>
								</select>
								<img src={singleChevronDown} className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400' aria-hidden='true' />
							</div>
							<input
								onChange={(e) => setForm({ ...form, phone: e.target.value })}
								required
								type='tel'
								name='phone-number'
								id='phone-number'
								autoComplete='tel'
								className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<h1 className='block text-sm  leading-6 text-white'>What are you interested in?</h1>
						<select
							onChange={(e) => setForm({ ...form, interest: e.target.value })}
							required
							className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset caret-black  ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500   sm:text-sm sm:leading-6'
						>
							<option className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'>
								Select an option
							</option>

							<option className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'>
								Sponsorship
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'>
								Being a guest on the show
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'>
								Both
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'>
								Other
							</option>
						</select>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='message' className='block text-sm  leading-6 text-white'>
							Message
						</label>
						<div className='mt-2.5'>
							<textarea
								onChange={(e) => setForm({ ...form, message: e.target.value })}
								name='message'
								id='message'
								rows={4}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className='mt-10'>
					<button
						onClick={handleFormSubmit}
						type='submit'
						className='block w-full rounded-md bg-black hover:bg-white hover:text-black transition-all ease-in-out duration-500 px-3.5 py-2.5 text-center text-sm   text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
					>
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
