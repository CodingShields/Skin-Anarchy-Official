import { useState, useEffect } from "react";
import contactForms from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/contactForms";

const Contact = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
		success: false,
		successMessage: "",
	});

	const [contactFormData, setContactFormData] = useState(contactForms);

	const [form, setForm] = useState({
		toEmail: "",
		subject: "",
		message: "",
		file: "",
	});

	return (
		<div className='flex flex-col h-fit w-full justify-center items-center  mt-2  py-12 '>
			<div className='flex flex-col w-fit h-fit rounded-md shadow-lg bg-zinc-700 shadow-black justify-center items-center py-10 px-6'>
				<h1 className='text-4xl text-center text-white mb-8 underline'>Contact New Winner</h1>
				<form className='flex flex-col w-fit h-full justify-center items-center '>
					<div className='flex flex-col w-192 justify-between items-center'>
						{/* To and Subject Container */}
						<div className='flex flex-col w-full h-full space-y-6 mb-4'>
							<div className='flex flex-row w-full justify-end items-center text-xl text-end text-white group'>
								<label className=' w-72 group-hover:text-blue-400 group-hover:underline whitespace-nowrap'>To Email:</label>
								<input
									onChange={(e) => setForm({ ...form, toEmail: e.target.value })}
									placeholder='Recipient Email ...'
									type='email'
									className='w-full rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600 hover:shadow-md hover:shadow-blue-400 ml-4'
								/>
							</div>
							<div className='flex flex-row w-full h-full justify-end items-center  text-xl  text-gray-800 group'>
								<label className=' w-72 group-hover:text-blue-400 group-hover:underline text-white whitespace-nowrap text-end'>
									Subject Template:
								</label>

								<select
									name={"subject"}
									onChange={(e) => setForm({ ...form, subject: e.target.value })}
									className='w-full rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600 hover:shadow-md hover:shadow-blue-400 ml-4 '
								>
									{contactFormData.map((item, id) => {
										return (
											<option key={id} value={item.subject}>
												{item.subject}
											</option>
										);
									})}
								</select>
							</div>
						</div>

						<div className='flex flex-col w-full h-full space-y-6 mb-4'>
							<div className='flex flex-row w-full h-full justify-end items-center  text-xl text-end text-gray-800 group'>
								<label className=' w-72 group-hover:text-blue-400 group-hover:underline text-white whitespace-nowrap text-end'>Subject:</label>
								<input
									value={form.subject}
									onChange={(e) => setForm({ ...form, subject: e.target.value })}
									placeholder='Subject ...'
									type='text'
									className='w-full rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600 hover:shadow-md hover:shadow-blue-400 ml-4'
								/>
							</div>

							{/* Message Container */}
							<div className='flex flex-row w-full h-full justify-end items-center  text-xl  text-gray-800 group'>
								<label className='group-hover:text-white group-hover:underline text-white text-end w-72'>Message Template:</label>
								<select
									name={"message"}
									onChange={(e) => setForm({ ...form, message: e.target.value })}
									className='w-full rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600 hover:shadow-md hover:shadow-blue-400 ml-4'
								>
									{contactFormData.map((item, id) => {
										return (
											<option key={id} value={item.message}>
												{item.message}
											</option>
										);
									})}
								</select>
							</div>
							<textarea
								type='text'
								placeholder='Message ...'
								value={form.message}
								className='w-full h-48 rounded-md border-2 border-gray-400 text-black focus:outline-none focus:border-blue-600 hover:shadow-lg hover:shadow-blue-400 '
								onChange={(e) => setForm({ ...form, message: e.target.value })}
							></textarea>
						</div>
					</div>

					<div className='flex flex-row w-full h-full justify-center items-center mt-4 space-x-4 py-6'>
						<label className='w-fit text-xl text-center text-white whitespace-nowrap'>File To Upload:</label>
						<input
							type='file'
							className='w-fit h-12  rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600 text-white px-20 py-8 text-center'
						/>
					</div>
					<button className='bg-blue-600 text-white text-lg w-fit px-8 py-4 rounded-md border-blue-600 border-2 mx-auto hover:bg-blue-400 hover:font-bold active:translate-y-2'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
