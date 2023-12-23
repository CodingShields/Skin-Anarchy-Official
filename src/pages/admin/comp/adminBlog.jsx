import { useState } from "react";

const AdminBlog = () => {
	const sections = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

	const [blogData, setBlogData] = useState({
		sections: 4,
		title: "",
		content: "",
		image: "",
	});

	const handleChange = (e) => {
		setBlogData({
			...blogData,
			sections: e.target.value,
		});
	};

	// Create an array of section numbers based on the selected value
	const sectionNumbers = Array.from({ length: parseInt(blogData.sections, 10) }, (_, index) => index + 1);

	return (
		<div className='flex flex-col items-start justify-center w-full h-full bg-gray-200 '>
			<div className='flex flex-row items-center justify-center w-full h-48 my-8 '>
				<p className='text-4xl font-bold text-gray-700 bg-gray-400 border-4 w-fit py-8 px-48'>Admin Blog</p>
			</div>
			<div className='flex grid gap-1 text-center font-bold items-center justify-center w-2/5 h-3/4 border-4 border-black overflow-y-scroll mx-auto px-12 pb-12'>
				<p
				className="text-lg font-bold text-gray-700 border-4 w-fit py-8 px-24"
				>Initial Upload *REMOVE AFTER MEDIUM TRANSFER*</p>
				<p
				className="text-lg font-bold text-gray-700 border-4 text-center w-auto py-4 px-12"
				>Content</p>
				<p
				className="text-lg font-bold text-gray-700 border-4 text-center w-auto py-4 px-12"
				>How many sections?</p>
				<select onChange={handleChange}>
					{sections.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
				<p>Data</p>
				<input
					className='bg-gray-400 border-4 text-end border-gray-700 rounded-lg h-24 w-auto shadow-lg px-6 py-2 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl'
					type='date'
				/>
				<p>BlogTitle</p>
				<input
					className='bg-gray-400 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-auto hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl'
					type='text'
				/>
				<p>Image</p>
				<input
					className='w-auto h-16 bg-gray-400 border-4 border-gray-700 rounded-lg font-normal shadow-lg py-4 px-8 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl'
					type='file'
				/>

				{/* Map over sectionNumbers to render sections */}
				{sectionNumbers.map((sectionNumber, index) => (
					<div className='flex flex-col items-center justify-center w-full h-full ' key={index}>
						<p>Section {sectionNumber}</p>
						<textarea
							className='w-full h-48
						bg-gray-400 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-1/4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl
						'
							type='text'
						/>
					</div>
				))}
			</div>
			<div className='flex flex-row items-center justify-center w-full h-48 my-2'>
				<button className='bg-gray-400 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 my-4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl'>
					Upload
				</button>
			</div>
		</div>
	);
};

export default AdminBlog;
