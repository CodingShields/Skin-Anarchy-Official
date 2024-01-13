import { useState, useEffect } from "react";
import contactForm from "../../../../assets/data/admin/science-of-skin/contactForms.jsx";

const Contact = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
		success: false,
		successMessage: "",
	});

	const [contactFormData, setContactFormData] = useState(contactForm);
	const [emailData, setEmailData] = useState({});

	const handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setEmailData({
			...emailData,
			[name]: value,
		});
	};

	const handleMessageOnChange = (e) => {};

	return (
		<div className='flex flex-col h-fit w-full justify-center items-center  mt-2  '>
			<div className='flex flex-col w-11/12 h-3/4 bg-zinc-100 rounded-md shadow-lg bg-zinc-400 shadow-black p-4 justify-center items-center'>
				<h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>Contact New Winner</h1>
				<form className='flex flex-col w-fit h-full justify-center items-center '>
					<div className='flex flex-row w-fit h-full justify-center items-center '>
						<div className='flex flex-col w-fit h-fit justify-center items-center mx-auto '>
							<label className='text-xl font-bold text-center text-gray-800'>Subject Template:</label>
							<select
								name={"subject"}
								onChange={handleOnChange}
								className='w-64 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600'
							>
								{contactFormData.map((item, id) => {
									return (
										<option key={id} value={item.subject}>
											{item.subject}
										</option>
									);
								})}
							</select>
							<div className='flex flex-col w-fit h-fit justify-center items-center '>
								<label className='w-fit text-center'>Would you like to make changes ?</label>
								<button className='w-fit h-fit rounded-md border-2 bg-black py-2 px-14 text-white border-gray-400 focus:outline-none focus:border-blue-600'>
									Change Subject
								</button>
							</div>
						</div>
						<div className='flex flex-col w-192 justify-start items-center '>
							<input
								onChange={(e) => handleOnChange(e)}
								value={emailData.subject ? emailData.subject : ""}
								placeholder='Subject ...'
								type='text'
								className='w-3/4 h-12 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600'
							/>
						</div>
					</div>
					<div className='flex flex-row w-full h-full justify-center items-center px-4 space-x-2 space-y-4'>
						<div className='flex flex-col w-192 h-full justify-center items-center mx-auto my-auto'>
							<label className='text-xl font-bold text-center text-gray-800'>Message Template</label>
							<select
								name={"message"}
								onChange={handleOnChange}
								value={emailData.message ? emailData.message : ""}
								className='w-64 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600'
							>
								{contactFormData.map((item, id) => {
									return (
										<option key={id} value={item.message}>
											{item.message}
										</option>
									);
								})}
							</select>
							<button className='w-fit h-12 rounded-md border-2 bg-black px-4 px-18 border-gray-400 focus:outline-none focus:border-blue-600'>
								Change Subject
							</button>
						</div>
						<div className='flex flex-col w-192 h-fit justify-center items-center mx-auto '>
							<textarea
								type='text'
								placeholder='Message ...'
								value={emailData.message ? emailData.message : ""}
								className='w-192 h-48 rounded-md border-2 border-gray-400 text-black focus:outline-none focus:border-blue-600 '
								onChange={(e) => handleMessageOnChange(e)}
							>
								{emailData.message}
							</textarea>
						</div>

					</div>
					<div className='flex flex-col w-full h-full justify-center items-center space-y-6 mt-4'>
						<label className='text-xl font-bold text-center text-gray-800'>File To Upload</label>
						<input type='file' className='w-fit h-12 rounded-md border-2 border-gray-400 text-black focus:outline-none focus:border-blue-600 ' />
						<button className='bg-blue-600 text-white text-lg px-4 py-2 w-64 rounded-md border-blue-600 border-2 mx-auto hover:bg-blue-400 hover:font-bold active:translate-y-2'>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
