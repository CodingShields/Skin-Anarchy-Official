import { useState, useEffect } from "react";
import { db } from "../../fireBase/firebaseConfig";
import { arrayUnion, setDoc, doc } from "firebase/firestore";
import { PageWrapper, SelectComp, InputComp, TextAreaComp, Button, FormComp } from "../components/Components";
import { inputStyle, buttonStyle, formStyle, smallSelectStyle, textAreaStyle } from "../../styles/responsiveStyling";
import { handleSearch, imageDownloadUrl, StartPageLoadTop, timer, resetForm } from "../../utilities/utilities";
import { UserIcon, AtSymbolIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useModal } from "../../context/ModalContext";
import { nanoid } from "nanoid";
import singleChevronDown from "../../assets/icons/singleChevronDown.svg";

const country = [
	{ value: "us", name: "US" },
	{ value: "eu", name: "EU" },
];
const options = [
	{
		name: "Select an option",
		value: null,
	},
	{
		name: "Account Error",
		value: "accountError",
	},
	{
		name: "Payment Error",
		value: "paymentError",
	},
	{
		name: "Website Error",
		value: "websiteError",
	},
	{
		name: "Other",
		value: "other",
	},
];
const SupportPage = () => {
	const initialFormState = {
		formOpen: false,
		reason: "",
		firstName: "",
		lastName: "",
		company: "",
		phoneCountry: "us",
		phone: "",
		email: "",
		interest: "",
		description: "",
		image: "",
	};

	const [form, setForm] = useState(initialFormState);
	const { showError, showLoading, hideLoading, showSuccess, showModal, hideModal } = useModal();
	const currentDate = new Date();

	const handleOnChange = (e) => {
		e.preventDefault();
		const formOptions = handleSearch(options, e.target.value);
		setForm({ ...form, reason: e.target.value, form: formOptions, formOpen: true });
	};

	const handleImage = async (e) => {
		await showModal();
		await showLoading();
		try {
			const file = e.target.files[0];
			if (file) {
				const url = await imageDownloadUrl(file);
				setForm({ ...form, image: url });
				await timer(2000);
				hideModal();
			}
		} catch (error) {
			hideLoading();
			showError(error.message);
			await timer(2000);
			hideModal();
		}
	};
	const handleSubmit = async (e) => {
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
						reason: form.reason,
						company: form.company,
						email: form.email,
						phoneCountry: form.phoneCountry,
						phone: form.phone,
						message: form.description,
						image: form.image,
						read: false,
						reply: false,
					}),
				},
				{ merge: true }
			);
			await timer(2000);
			hideLoading();
			showSuccess();
			await timer(2000);
			hideModal();
			resetForm(setForm, initialFormState);
			StartPageLoadTop();
		} catch (error) {
			hideLoading();
			showError(error.message);
			await timer(2000);
			hideModal();
		}
	};

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<PageWrapper>
			<div className='w-full h-3/4 flex flex-col justify-center items-center mt-48 animate-fadeIn pb-12 '>
				<h1 className='text-5xl text-white font-montserrat uppercase font-thin tracking-widest'>Skin Anarchy Support</h1>
				<div className='w-1/4 mx-auto border rounded-2xl p-8 mt-12 text-center flex flex-col justify-center items-center'>
					<h1 className='text-2xl text-white font-montserrat uppercase font-thin tracking-widest'>How can we help you?</h1>
					<SelectComp
						value={form.reason}
						onChange={handleOnChange}
						style='w-72 rounded-md mt-6 border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
						options={options}
					/>
				</div>
				<div className='mt-8'>
					<FormComp style={formStyle} open={form.formOpen}>
						<h1 className='text-2xl text-white font-montserrat uppercase font-thin tracking-widest'>Support Form Submission</h1>
						<InputComp
							value={form.firstName}
							style={inputStyle}
							placeholder='Name'
							type='text'
							onChange={(e) => setForm({ ...form, firstName: e.target.value })}
							icon={<UserIcon className='h-8 w-8 text-gray-400' />}
						/>
						<InputComp
							value={form.lastName}
							style={inputStyle}
							placeholder='Name'
							type='text'
							onChange={(e) => setForm({ ...form, lastName: e.target.value })}
							icon={<UserIcon className='h-8 w-8 text-gray-400' />}
						/>
						<InputComp
							value={form.email}
							style={inputStyle}
							placeholder='Email'
							type='email'
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							icon={<AtSymbolIcon className='h-8 w-8 text-gray-400' />}
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
						<TextAreaComp
							value={form.description}
							style={`${textAreaStyle} text-black`}
							placeholder={`Please give a Description`}
							onChange={(e) => setForm({ ...form, description: e.target.value })}
						/>
						<InputComp
							style={`${inputStyle}bg-white`}
							placeholder='Name'
							type='file'
							icon={<PhotoIcon className='h-8 w-8 text-gray-400' />}
							onChange={handleImage}
						/>
						{form.image && <img src={form.image} className='w-64 h-auto mx-auto' alt='Uploaded Preview' />}
						<div className='w-full flex justify-center'>
							<Button style={buttonStyle} onClick={handleSubmit}>
								Submit
							</Button>
						</div>
					</FormComp>
				</div>
			</div>
		</PageWrapper>
	);
};

export default SupportPage;
