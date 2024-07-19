import { useState } from "react";

import { PageWrapper, SelectComp, InputComp, TextAreaComp, Button, FormComp } from "../components/Components";
import { buttonStyle, inputStyle, textAreaStyle, formStyle } from "../../styles/responsiveStyling";
import { handleSearch, imageDownloadUrl } from "../../utilities/utilities";
import { UserIcon, AtSymbolIcon, PhotoIcon} from "@heroicons/react/24/outline";
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
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
		initialHelp: "",
		form: [],
		formOpen: false,
		userName: "",
		userEmail: "",
		description: "",
		image: "",
	});

	const handleOnChange = (e) => {
		e.preventDefault();
		setState({
			...state,
			initialHelp: "",
			form: [],
			formOpen: false,
		});
		const formOptions = handleSearch(options, e.target.value);
		setState({ ...state, initialHelp: e.target.value, form: formOptions, formOpen: true });
	};

	const handleImage = (e) => {
		e.preventDefault();
		const image = e?.target?.files[0];
		imageDownloadUrl(image).then((url) => {
			setState({ ...state, image: url });
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("test");
	};

    console.log(state.image)

	return (
		<PageWrapper>
			<div className='w-full h-3/4 flex flex-col justify-center items-center mt-48'>
				<h1 className='text-5xl text-white font-montserrat uppercase font-thin tracking-widest'>Skin Anarchy Support</h1>
				<div className='w-1/4 mx-auto border rounded-2xl p-8 mt-12 text-center flex flex-col justify-center items-center'>
					<h1 className='text-2xl text-white font-montserrat uppercase font-thin tracking-widest'>How can we help you?</h1>
					<SelectComp
						value={state.initialHelp}
						onChange={handleOnChange}
						style='w-72 rounded-md mt-6 border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
						options={options}
					/>
				</div>
				<div className='mt-8'>
					<FormComp style={formStyle} open={state.formOpen}>
						<h1 className='text-2xl text-white font-montserrat uppercase font-thin tracking-widest'>Support Form Submission</h1>
						<InputComp
							value={state.userName}
							style={inputStyle}
							placeholder='Name'
							type='text'
							onChange={(e) => setState({ ...state, userName: e.target.value })}
							icon={<UserIcon className='h-8 w-8 text-gray-400' />}
						/>
						<InputComp
							value={state.userEmail}
							style={inputStyle}
							placeholder='Email'
							type='email'
							onChange={(e) => setState({ ...state, userEmail: e.target.value })}
							icon={<AtSymbolIcon className='h-8 w-8 text-gray-400' />}
						/>
						<TextAreaComp
							value={state.description}
							style={textAreaStyle}
							placeholder={`${state.form && state.form.length > 0 ? state.form[0].name : "Please give a"} Description`}
							onChange={(e) => setState({ ...state, description: e.target.value })}
						/>
						<InputComp
							value={state.image ? state.image : ""}
							style={`${inputStyle}bg-white`}
							placeholder='Name'
							type='file'
							icon={<PhotoIcon className='h-8 w-8 text-gray-400' />}
							onChange={handleImage}
						/>
						{state.image.length > 0 && <img src={state?.image} className='w-64 h-64 mx-auto' />}
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
