import { useState } from "react";
import WorkingModal from "../../../components/WorkingModal";
import ErrorModal from "../../../components/ErrorModal";

const MasterClass = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		uploading: false,
		success: false,
		image: [],
		modifiedImage: [],
		imagePreviewUrl: null, // Added for storing image preview URL
	});

	const handleImageChange = (e) => {
		e.preventDefault();

		// Ensure a file was selected
        const file = e.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				// Use reader.result, which contains the file's data URL
				setState((prevState) => ({
					...prevState,
					image: file,
					imagePreviewUrl: reader.result,
				}));
			};

			reader.onerror = (error) => {
				console.error("Error reading file:", error);
			};

			// Read the file as a data URL
			reader.readAsDataURL(file);
	};

	return (
		<div className='text-black flex flex-col justify-center items-center place-content-center w-full p-96 h-full bg-gray-100'>
			{state.error && <ErrorModal errorMessage={state.errorMessage} />}
			{state.uploading && <WorkingModal loading={state.uploading} />}
			<h1 className='text-2xl'>Master Class</h1>
			<h1>Initial Sample Image</h1>
			<input type='file' onChange={handleImageChange} />
			<button onClick={handleImageUpload}>Upload</button>
			{/* Display the selected image before uploading */}
			{state.imagePreviewUrl && <img className='w-96 h-96 p-12' src={state.imagePreviewUrl} alt='Preview' />}
		</div>
	);
};

export default MasterClass;
