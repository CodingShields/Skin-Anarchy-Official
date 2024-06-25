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
			<h1> Master Class</h1>
			<div className='w-1/2 h-fit flex-row justify-evenly items-center'>
				<button> View Previous Master Classes</button>
				<button> Submit a New Master Class</button>
			</div>
			<div>
				<h1>Master Class Title</h1>
				<input type='text' />
				<h1>Master Class Date</h1>
				<input type='date' />
				<h1>Master Class Time</h1>
				<input type='time' />
				<h1>Master Class Description</h1>
				<textarea type='text' />
				<h1>Master Class Image</h1>
				<input type='file' />
				<button>Submit</button>
			</div>
			<div>
				<h1>OutReach </h1>
				<h1>OutReach Title</h1>
				<input type='text' />
				<h1>OutReach Date</h1>
				<input type='date' />
				<h1>OutReach Time</h1>
				<input type='time' />
				<h1>OutReach Description</h1>
				<textarea type='text' />
				<h1>OutReach Image</h1>
				<input type='file' />
				<h1> Who would you like to send it to?</h1>
				<div className='w-full flex flex-col justify-evenly items-center place-content-center h-fit '>
					<h1>All Contacts</h1>
					<input type='checkbox' />
					<h1>Only Subscribers</h1>
					<input type='checkbox' />
					<h1>Only Non Subscribers</h1>
				</div>
			</div>
		</div>
	);
};

export default AdminMasterClass;
