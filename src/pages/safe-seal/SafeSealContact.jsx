import { useState } from "react";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import PropTypes from "prop-types";
import { db } from "../../fireBase/firebaseConfig";
import { arrayUnion, setDoc, doc } from "firebase/firestore";
import { nanoid } from "nanoid";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import singleChevronDown from "../../assets/icons/singleChevronDown.svg";
import { InputComp, SelectComp, TextAreaComp, Button } from "../components/Components";
import { inputStyle, buttonStyle, selectStyle, smallSelectStyle, textAreaStyle } from "../../styles/responsiveStyling";
import { BuildingOfficeIcon, AtSymbolIcon, UserCircleIcon } from "@heroicons/react/24/outline";
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
const SafeSealContact = () => {
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

			hideLoading();
		} catch (error) {
			showError(error.message);
			await timer(2000);
			hideError();
		}
	};
	return (
		<div className='block min-h-screen w-full h-full text-white font-montserrat tracking-widest font-thin '>
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />
			<div className='w-full h-full flex flex-row justify-evenly items-center'>
				<div className='w-1/2 h-fit flex flex-col justify-center items-center  text-wrap space-y-4'>
					<h1 className='text-6xl uppercase text-left py-6 w-3/4'>Contact Us</h1>
					<p className='text-xl w-2/3 py-4'>Are you interested in the S.A.F.E. Seal for your company?</p>
					<p className='text-xl w-2/3 py-4'>Message us to book a call with Dr. Ekta and learn more.</p>
					<p className='text-lg w-2/3 whitespace-nowrap py-4'>For any inquiries, please reach out to us via this form, or email us at </p>
					<a
						href='mailto:pr@skincareanarchypodcast.com?subject=Safe%20Seal&body=This%20is%20the%20body%20of%20the%20email.'
						className='text-lg w-full  text-center transition-all duration-300 hover:text-gold-500 font-normal'
					>
						<p>pr@skincareanarchypodcast.com</p>
					</a>
				</div>
				<div className='w-auto h-fit flex flex-col justify-center items-center text-white font-montserrat  my-48 '>
					<div className='mx-auto w-full text-center pt-2 pb-8'>
						<img src={whiteLogo} alt='white logo' className='mx-auto h-32' />
					</div>
					<div className='flex flex-col justify-center items-center space-y-8 relative'>
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
								style={`${inputStyle} ${form.phoneCountry && "text-black placeholder:indent-[52px]"}`}
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
						<div className='relative'>
							<h1 className='block text-sm leading-6 text-white tracking-widest mb-2'>What are you interested in?</h1>
							<SelectComp
								onChange={(e) => setForm({ ...form, interest: e.target.value })}
								style={`${selectStyle} font-normal`}
								options={formInterest}
							/>
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
				</div>
			</div>
		</div>
	);
};

SafeSealContact.propTypes = {
	handleFormSubmit: PropTypes.func,
};

export default SafeSealContact;
