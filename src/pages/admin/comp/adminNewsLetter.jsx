import { useState } from "react";
// import emailjs from "emailjs-com";
import ContactsTab from "./newsletter/ContactsTab";
import EmailTab from "./newsletter/EmailTab";
const AdminNewsLetter = ({ open }) => {
	const [state, setState] = useState({
		error: "",
		errorMessage: "",
		loading: false,
		success: "",
		successMessage: "",
		contactsTab: false,
		emailTab: false,
	});
	if (!open) return null;

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
		<div className='flex flex-col min-h-screen w-full relative justify-start items-center'>
			<h1 className='text-3xl font-bold text-red-500 mb-2 text-center py-2'>This Tool is not active</h1>

			{/* <div className='flex flex-row w-fit justify-center items-center h-fit my-2 mx-auto '>
				<button
					onClick={(e) => handleTabClick(e)}
					value='contactsTab'
					className='bg-black text-white text-md p-2 rounded-l-lg shadow-lg w-fit h-fit active:translate-y-2 hover:text-black hover:bg-gold-500'
				>
					Contacts
				</button>
				<button
					value={"emailTab"}
					onClick={(e) => handleTabClick(e)}
					className='bg-black text-white text-md p-2 rounded-r-lg shadow-lg w-fit h-fit active:translate-y-2 hover:text-black hover:bg-gold-500'
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
			</div> */}
		</div>
	);
};

export default AdminNewsLetter;
