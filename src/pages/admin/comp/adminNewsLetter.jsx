import { useState } from "react";
import emailjs from "emailjs-com";

const AdminNewsLetter = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full '>
			<div className='flex flex-col items-center justify-center w-11/12 h-11/12 p-4 bg-white rounded-lg shadow-lg '>
				<h1>Email</h1>
				<h1>To:</h1>
				{/* <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
				<h1>Subject:</h1>
				{/* <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} /> */}
				<h1>Message:</h1>
				{/* <textarea value={message} onChange={(e) => setMessage(e.target.value)} /> */}
				<button className='w-1/2 p-2 my-4 text-white bg-blue-500 rounded-lg'>test</button>
			</div>
		</div>
	);
};

export default AdminNewsLetter;
