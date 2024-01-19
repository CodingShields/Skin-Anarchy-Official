import { useState } from "react";
import emailjs from "emailjs-com";
import ContactsTab from "./newsletter/ContactsTab";
import EmailTab from "./newsletter/EmailTab";
const AdminNewsLetter = () => {
	const [state, setState] = useState({
		error: "",
		errorMessage: "",
		loading: false,
		success: "",
		successMessage: "",
		contactsTab: false,
		emailTab: false,
	});

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const handleTabClick = (e) => {
		const tab = e.target.value;
		if (tab === "contactsTab") {
			setState({ ...state, contactsTab: true, emailTab: false });
		} else if (tab === "emailTab") {
			setState({ ...state, contactsTab: false, emailTab: true });
		} else {
			return;
		}
	};

	return (
		<div className='flex flex-col h-full w-full justify-start items-center'>
				<h1 className='text-5xl font-bold text-gray-700 mb-2 text-center py-2'>News Letter</h1>

			<div className='flex flex-row w-fit justify-center items-center h-fit my-2 mx-auto '>
				<button
					onClick={(e) => handleTabClick(e)}
					value='contactsTab'
					className='bg-blue-500 text-white text-2xl px-8 py-4 rounded-l-lg shadow-lg w-fit h-fit active:translate-y-2 hover:text-black hover:bg-blue-300'
				>
					Contacts
				</button>
				<button
					value={"emailTab"}
					onClick={(e) => handleTabClick(e)}
					className='bg-blue-500 text-white text-2xl px-8 py-4 rounded-r-lg shadow-lg w-fit h-fit active:translate-y-2 hover:text-black hover:bg-blue-300'
				>
					Email Tool
				</button>
			</div>

			<div
				className={classNames(
					"transition-transform duration-700 ease-in-out transform-gpu",
					state.contactsTab ? "flex flex-col items-center justify-center w-full h-full my-auto" : "h-0 scale-0 delay-200"
				)}
			>
				<ContactsTab />
			</div>
			<div
				className={classNames(
					"transition-transform duration-700 ease-in-out",
					state.emailTab ? "flex flex-col items-center justify-center w-full h-full my-auto" : "h-0 scale-0 delay-200"
				)}
			>
				{" "}
				<EmailTab />
			</div>
		</div>
	);
};

export default AdminNewsLetter;
