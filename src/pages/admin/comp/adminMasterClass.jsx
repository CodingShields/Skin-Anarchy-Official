import { useState, useEffect } from "react";
import WorkingModal from "../../components/WorkingModal";
import ErrorModal from "../../components/ErrorModal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/underlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
const AdminMasterClass = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		uploading: false,
		success: false,
		image: [],
		modifiedImage: [],
		imagePreviewUrl: null,
		newImage: null,
		publicId: null,
	});
	const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

	const cld = new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });

	const handleImageChange = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setState({
				...state,
				image: file,
				imagePreviewUrl: reader.result, // Set the image preview URL
			});
		};
		reader.readAsDataURL(file);
	};

	useEffect(() => {
		const newImage = cld.image(state.image, {
			actions: [backgroundRemoval(), scale("500")],
		});
		setState({ ...state, newImage: newImage.toURL() });
	}, [state.image]);

	console.log(state.newImage);

	return (
		<div className='text-black flex flex-col justify-center items-center place-content-center w-full h-11/12 bg-gray-100'>
			{state.error && <ErrorModal errorMessage={state.errorMessage} />}
			{state.uploading && <WorkingModal loading={state.uploading} />}
			<h1 className='text-2xl'>Master Class</h1>
			<h1>Initial Sample Image</h1>
			<input type='file' onChange={handleImageChange} />
			{/* Display the selected image before uploading */}
			{state.imagePreviewUrl && <img src={state.imagePreviewUrl} alt='Selected Image' />}
			{state.newImage && <img className='w-64 h-96' src={state.newImage} alt='Selected Image' />}
		</div>
	);
};

export default AdminMasterClass;
