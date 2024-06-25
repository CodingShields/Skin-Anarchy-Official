const currentYear = new Date().getFullYear();

const contactForms = [
	{
		id: 0,
		subject: "Select a Template",
		message: "Select a Template",
	},
	{
		id: 1,
		subject: "Congratulations!",
		message: `We are pleased to let you know you have been selected as a winner in the ${currentYear} Science of Skin Awards. Congratulations! So that we can properly award you, please fill out the form below. If you have any questions, please contact us at`,
		file: "",
	},
	{
		id: 2,
		subject: `Reminder for the ${currentYear} Science of Skin Awards Submission`,
		message: `We are pleased to let you know you have been selected as a winner in the ${currentYear} Science of Skin Awards. Congratulations! So that we can properly award you, please fill out the form below. If you have any questions, please contact us at`,
		file: "",
	},
	{
		id: 3,
		subject: `Last Chance for the ${currentYear} Science of Skin Awards Submission`,
		message: `We are pleased to let you know you have been selected as a winner in the ${currentYear} Science of Skin Awards. Congratulations! So that we can properly award you, please fill out the form below. If you have any questions, please contact us at`,
		file: "",
	},
];

export default contactForms;
