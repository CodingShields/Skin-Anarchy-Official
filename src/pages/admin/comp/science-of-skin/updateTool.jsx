import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import hourGlass from "../../../../assets/iconsAnimated/hourGlass.svg";

const categoryArray = [
	"Best New Skincare Treatment",
	"Best New Skincare Product",
	"Best New Skincare Brand",
	"Best New Skincare Brand",
	"Best New Skincare Brand",
];

const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		success: false,
		successMessage: "",
	});

	const [formState, setFormState] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		productName: "",
		productDescription: "",
		productLink: "",
		podcastLink: "",
		brandLogo: null,
		productImage: null,
		images: [],
		imageUrls: [],
	});

	const resetForm = () => {
		setFormState({
			year: "",
			category: "",
			brandName: "",
			brandDescription: "",
			productName: "",
			productDescription: "",
			productLink: "",
			podcastLink: "",
			brandLogo: null,
			productImage: null,
			images: [],
			imageUrls: [],
		});
	};

	useEffect(() => {
		resetForm();
	}, []);

	const handleFormSubmit = async () => {
		try {
			setState({ ...state, uploading: true });
			const colRef = collection(getFirestore(), "scienceOfSkinAwards");
			await addDoc(colRef, {
				year: formState.year,
				category: formState.category,
				brandName: formState.brandName,
				brandDescription: formState.brandDescription,
				productName: formState.productName,
				productDescription: formState.productDescription,
				productLink: formState.productLink,
				podcastLink: formState.podcastLink,
				images: formState.imageUrls,
				id: v4(),
			});
			setTimeout(() => {
				setState({ ...state, uploading: false });
			}, 3000);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const imageDownloadUrl = async () => {
			try {
				const urls = [];
				const images = formState.images;

				for (let i = 0; i < images.length; i++) {
					// Fixed the loop condition
					const image = images[i];
					const storageRef = ref(storage, `scienceOfSkinAwards/${image.name}`);
					await uploadBytes(storageRef, image.image);
					const url = await getDownloadURL(storageRef);
					urls.push(url);
				}
				setFormState({ ...formState, imageUrls: urls });
				// Do something with the URLs, e.g., set them in the state or call another function
			} catch (error) {
				console.error(error);
			}
		};

		imageDownloadUrl();
	}, [formState.images]);

	const yearList = () => {
		let years = [];
		const currentYear = new Date().getFullYear();
		for (let i = 2018; i < currentYear; i++) {
			years.push(i);
		}
		return years;
	};

	const handleImageOnChange = async (e) => {
		e.preventDefault();
		const newImage = e.target.files[0]; // Access the first file in the FileList
		const name = e.target.name;
		if (newImage) {
			const imageUrl = URL.createObjectURL(newImage);
			setFormState({
				...formState,
				images: [
					...formState.images,
					{
						name: name,
						image: newImage,
						imageUrl: imageUrl,
					},
				],
			});
		} else {
			console.error("No file selected");
		}
	};

	return (
		<div className='flex flex-row items-center justify-evenly w-full h-fit bg-white py-6 px-12 rounded-l-lg'>
			<div className='flex flex-col items-center justify-center w-fit h-96  bg-gray-500 py-6 px-8  shadow-black shadow-md rounded-lg hover:bg-gray-400 space-y-8'>
				{state.uploading ? (
					<div className='absolute bg-opacity-50 bg-black w-full h-full z-10 top-0 left-0'>
						<div className='w-full h-full relative left-1/2 top-1/2 '>
							<h1 className='w-full mx-auto text-4xl font-bold animate-pulse text-white r-4'>
								<img src={hourGlass} className='w-32 h-32 ' alt='Hourglass' />
								Uploading...
							</h1>
						</div>
					</div>
				) : (
					""
				)}

				<div className='group'>
					<h1 className='text-2xl font-bold text-center h-12 w-full group-hover:text-blue-600'>Select Year</h1>
					<select
						onChange={(e) => setFormState({ ...formState, year: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
					>
						{yearList().map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
				</div>
				<div className='group'>
					<h1 className='text-2xl font-bold text-center h-12 w-full group-hover:text-blue-600'>Select Category</h1>
					<select
						onChange={(e) => setFormState({ ...formState, category: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
					>
						{yearList().map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='flex flex-col w-fit h-auto justify-center items-center space-y-8 bg-gray-500 shadow-black shadow-md rounded-lg py-8 px-8 hover:bg-gray-400'>
				<div className='flex flex-col w-fit h-fit items-center justify-center'>
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Brand Name</h1>
					<input
						onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center '>
					{" "}
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Brand Description</h1>
					<textarea
						onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
						className='w-72 h-24 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center'>
					{" "}
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Product Name</h1>
					<input
						onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center '>
					{" "}
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Product Description</h1>
					<textarea
						onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
						className='w-72 h-24 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center '>
					{" "}
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Product Link</h1>
					<input
						onChange={(e) => setFormState({ ...formState, productLink: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='url'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center'>
					{" "}
					<h1 className='text-2xl font-bold text-center h-fit w-full'>Podcast Episode Link</h1>
					<input
						onChange={(e) => setFormState({ ...formState, podcastLink: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold'
						type='url'
					/>
				</div>
			</div>
			<div className='flex flex-col w-144 h-auto justify-start items-center space-x-6 space-y-8 bg-gray-500 shadow-black shadow-md rounded-lg py-8 hover:bg-gray-400'>
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Brand Logo</h1>
				<input onChange={handleImageOnChange} type='file' />
				{formState.images.length > 0 && <img className='w-fit h-64 py-4 px-2 ' src={formState.images[0].imageUrl} />}
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Product Image</h1>
				<input onChange={handleImageOnChange} type='file' />
				{formState.images.length > 1 && <img className='w-fit h-64 py-4 px-2' src={formState.images[1].imageUrl} />}
				<div>
					<button
						onClick={handleFormSubmit}
						type='submit'
						className='bg-blue-600 text-white text-lg  px-4 py-2 w-48 rounded-r-md border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
