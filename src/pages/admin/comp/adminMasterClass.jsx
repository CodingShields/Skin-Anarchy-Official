import { useState, useEffect } from "react";
import WorkingModal from "../../components/WorkingModal";
import ErrorModal from "../../components/ErrorModal";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/underlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cat } from "@cloudinary/transformation-builder-sdk/qualifiers/focusOn";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { png } from "@cloudinary/url-gen/qualifiers/format";

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
		publicID: null,
	});
	const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

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
		const uploadImage = async () => {
			try {
				const url = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload/`;
				await fetch(url, {
					method: "POST",
					body: JSON.stringify({
						file: state.imagePreviewUrl,
						upload_preset: "skinAnarchyBGRemoval",
					}),
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						console.log(data.public_id);
						setState({
							...state,
							publicID: data.public_id,
						});
					});
			} catch (error) {
				console.error("Error uploading the image", error);
			}
		};
		uploadImage();
	}, [state.imagePreviewUrl]);
	const cld = new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });

	const myImage = cld.image("test2");
	myImage.effect(backgroundRemoval());

	const testTransparentBG = new CloudinaryImage("test2", { cloud: { cloudName: cloudinaryCloudName } })
		.delivery(format(png()))
		.backgroundColor("#00000000");

	return (
		<div className='text-black flex flex-col justify-center items-center place-content-center w-full h-11/12 bg-gray-100'>
			{state.error && <ErrorModal errorMessage={state.errorMessage} />}
			{state.uploading && <WorkingModal loading={state.uploading} />}
			<h1 className='text-2xl'>Master Class</h1>
			<h1>Initial Sample Image</h1>
			<input type='file' onChange={handleImageChange} />
			{/* Display the selected image before uploading */}
			{state.imagePreviewUrl && <img src={state.imagePreviewUrl} alt='Selected Image' />}
			<div className='h-fit w-fit bg-black'>
				<AdvancedImage className='bg-red-400' cldImg={myImage} />
				{state.imagePreviewUrl && (
					<img
						className='h-96 w-96'
						src={cld.image("test2").effect(backgroundRemoval()).delivery("q_auto").format("auto").toURL()}
						alt='Test Transparent BG'
					/>
				)}
			</div>
			{/* <div className='container'>
				<h1 className='title'>React &amp; Cloudinary Upload Widget</h1>
			</div>

			<div className='container'>
				<h2>Unsigned with Upload Preset</h2>
				<UploadWidget onUpload={handleOnUpload}>
					{({ open }) => {
						function handleOnClick(e) {
							e.preventDefault();
							open();
						}
						return <button onClick={handleOnClick}>Upload an Image</button>;
					}}
				</UploadWidget>

				{error && <p>{error}</p>}

				{url && (
					<>
						<p>
							<img src={url} alt='Uploaded resource' />
						</p>
						<p>{url}</p>
					</>
				)}
			</div>

			<div className='container'>
				<h2>Resources</h2>
				<p>
					<a href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-upload-widget-preset'>See the code on github.com.</a>
				</p>
			</div> */}
		</div>
	);
};

export default AdminMasterClass;
