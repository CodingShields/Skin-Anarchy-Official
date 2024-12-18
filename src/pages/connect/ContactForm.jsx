import { useState } from "react";
import PropTypes from "prop-types";
import { db } from "../../fireBase/firebaseConfig";
import { arrayUnion, setDoc, doc } from "firebase/firestore";
import { nanoid } from "nanoid";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import singleChevronDown from "../../assets/icons/singleChevronDown.svg";
import { InputComp, SelectComp, TextAreaComp, Button, FormComp} from "../components/Components";
import { inputStyle, buttonStyle, formStyle, selectStyle, smallSelectStyle, textAreaStyle } from "../../styles/responsiveStyling";
import { XCircleIcon, BuildingOfficeIcon, AtSymbolIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useModal } from "../../context/ModalContext";
import { timer } from "../../utilities/utilities";
const country = [
	{ value: "us", name: "US" },
	{ value: "eu", name: "EU" },
];

const formInterest = [
	{ value: null, name: "Select an option" },
	{ value: "sponsorship", name: "Sponsorship" },
	{ value: "guestShow", name: "Being a guest on the show" },
	{ value: "safeSeal", name: "S.A.F.E. Seal" },
	{ value: "both", name: "Both" },
	{ value: "other", name: "Other" },
];

const ContactForm = ({ close, open }) => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		company: "",
		phoneCountry: "us",
		phone: "",
		email: "",
		interest: "",
		message: "",
	});
	const { showError, showLoading, hideLoading, hideError } = useModal();

	const currentDate = new Date();

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		showLoading();
		try {
			const docRef = doc(db, "forms", "contact");
			await setDoc(
				docRef,
				{
					unreadMessages: arrayUnion({
						id: nanoid(),
						date: currentDate.toDateString(),
						time: currentDate.toLocaleTimeString(),
						name: `${form.firstName} ${form.lastName}`,
						company: form.company,
						email: form.email,
						phoneCountry: form.phoneCountry,
						phone: form.phone,
						interest: form.interest,
						message: form.message,
						read: false,
						reply: false,
					}),
				},
				{ merge: true }
			);
			await timer(2000);
			hideLoading();
			close(); // Close modal after successful form submission
		} catch (error) {
			showError(error.message);
			await timer(2000);
			hideError();
		}
	};

	return (
		<FormComp open={open} style={formStyle}>
			<div className='relative'>
				<Button
					onClick={close}
					style='absolute right-0 top-0 flex flex-col hover:text-white text-black justify-center items-center transition-all ease-in-out hover:text-white duration-300 group font-montserrat font-thin'
					text='close'
					icon={<XCircleIcon className='w-8 h-8 text-white/50 transition-all ease-in-out group-hover:text-white duration-300' />}
				/>
			</div>
			<div className='mx-auto w-full text-center pt-2 pb-8'>
				<img src={whiteLogo} alt='white logo' className='mx-auto h-32' />
			</div>
			<div className='flex flex-col justify-center items-center space-y-8'>
				<InputComp
					type='text'
					style={`${inputStyle} ${form.firstName && "text-black"}`}
					onChange={(e) => setForm({ ...form, firstName: e.target.value })}
					placeholder='First Name'
					name='first-name'
					id='first-name'
					autoComplete='given-name'
					required
					autoFocus
					value={form.firstName}
					icon={<UserCircleIcon className='w-6 h-6 text-black/50' />}
				/>
				<InputComp
					type='text'
					style={`${inputStyle} ${form.lastName && "text-black"}`}
					onChange={(e) => setForm({ ...form, lastName: e.target.value })}
					placeholder='Last Name'
					name='last-name'
					id='last-name'
					autoComplete='family-name'
					required
					autoFocus
					value={form.lastName}
					icon={<UserCircleIcon className='w-6 h-6 text-black/50' />}
				/>
				<InputComp
					type='text'
					style={`${inputStyle} ${form.company && "text-black"}`}
					onChange={(e) => setForm({ ...form, company: e.target.value })}
					placeholder='Company Name'
					name='company-name'
					id='company-name'
					autoComplete='company-name'
					required
					autoFocus
					value={form.company}
					icon={<BuildingOfficeIcon className='w-6 h-6 text-black/50' />}
				/>
				<InputComp
					type='email'
					style={`${inputStyle} ${form.email && "text-black"}`}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
					placeholder='Email'
					name='email'
					id='email'
					autoComplete='email'
					required
					autoFocus
					value={form.email}
					icon={<AtSymbolIcon className='w-6 h-6 text-black/50' />}
				/>
				<div className='relative w-full'>
					<div className='absolute inset-y-0 left-0 flex items-center z-30'>
						<SelectComp
							options={country}
							value={form.phoneCountry}
							onChange={(e) => setForm({ ...form, phoneCountry: e.target.value })}
							id='country'
							name='country'
							style={`${smallSelectStyle} ${form.phoneCountry && "text-black font-normal "}`}
							required
						/>
						<img src={singleChevronDown} className='pointer-events-none absolute right-2 top-0 h-full w-5 text-black' aria-hidden='true' />
					</div>
					<InputComp
						type='tel'
						style={`${inputStyle} ${form.phoneCountry && "text-black placeholder:indent-[2.5rem] indent-[2.5rem]"}`}
						onChange={(e) => setForm({ ...form, phone: e.target.value })}
						placeholder='Phone Number'
						name='phone-number'
						id='phone-number'
						autoComplete='tel'
						required
						autoFocus
						value={form.phone}
					/>
				</div>
				<div>
					<h1 className='block text-sm leading-6 text-white tracking-widest mb-2'>What are you interested in?</h1>
					<SelectComp onChange={(e) => setForm({ ...form, interest: e.target.value })} style={`${selectStyle} font-normal`} options={formInterest} />
				</div>
				<TextAreaComp
					onChange={(e) => setForm({ ...form, message: e.target.value })}
					name='message'
					id='message'
					rows={4}
					defaultValue=''
					value={form.message}
					placeholder='Message'
					style={`${textAreaStyle} font-normal`}
				/>
			</div>
			<div className='pt-8 w-full inline-flex justify-center'>
				<Button onClick={handleFormSubmit} type='submit' style={buttonStyle} text='Submit' />
			</div>
		</FormComp>
	);
};

ContactForm.propTypes = {
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
};

export default ContactForm;
