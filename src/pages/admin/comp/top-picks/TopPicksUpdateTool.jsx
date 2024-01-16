import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import hourGlass from "../../../../assets/iconsAnimated/hourGlass.svg";
import topPicksCategoryListArray from "../../../../assets/data/admin/updateTools/topPicks/topPicksCategoryListArray";
import scienceOfSkinAwardTemplate from "../../../../assets/images/logos/scienceOfSkinAwardTemplate.svg";
const TopPicksUpdateTool = () => {
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
			const colRef = collection(getFirestore(), "topPicks");
			await addDoc(colRef, {
				uploadDate: new Date(),
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
		<div className='flex w-fit h-fit justify-center bg-zinc-700 py-6 px-12 rounded-lg  space-x-12 mx-auto my-8 shadow-xl shadow-gray-500'>
			<div className='flex flex-col items-center justify-start w-fit h-fit  py-6 px-8 space-y-8'>
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
					<h1 className='text-2xl text-center h-12 w-full group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
					<select
						onChange={(e) => setFormState({ ...formState, year: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
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
					<h1 className='text-2xl text-center h-12 w-full group-hover:text-blue-500 group-hover:font-bold text-white'>Select Category</h1>
					<select
						onChange={(e) => setFormState({ ...formState, category: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{topPicksCategoryListArray.map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='flex flex-col items-center justify-start w-fit h-fit  py-6 px-8 space-y-8'>
				<div className='flex flex-col w-fit h-fit items-center justify-center group '>
					<h1 className='text-2xl  text-center h-fit w-full text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name</h1>
					<input
						onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center group'>
					{" "}
					<h1 className='text-2xl group-hover:font-bold text-center h-fit w-full text-white group-hover:text-blue-400 '>Brand Description</h1>
					<textarea
						onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
						className='w-72 h-24 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center group'>
					{" "}
					<h1 className='text-2xl text-center h-fit w-full text-white group-hover:text-blue-500 group-hover:font-bold '>Product Name</h1>
					<input
						onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center group '>
					{" "}
					<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Product Description</h1>
					<textarea
						onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
						className='w-72 h-24 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center group'>
					<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Product Link</h1>
					<input
						onChange={(e) => setFormState({ ...formState, productLink: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-blue-500 group-hover:font-bold text-white shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='url'
					/>
				</div>
				<div className='flex flex-col w-fit h-fit items-center justify-center group'>
					<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Podcast Episode Link</h1>
					<input
						onChange={(e) => setFormState({ ...formState, podcastLink: e.target.value })}
						className='w-72 h-12 border-2 border-black rounded-md group-hover:text-blue-500  text-white shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='url'
					/>
				</div>
			</div>
			<div className='flex flex-col items-center justify-evenly w-fit h-full  py-6 px-8 space-y-8'>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					<h1 className='text-2xl text-center h-fit w-full'>Brand Logo</h1>
					<h1 className='w-96 text-center text-red-500 text-sm italic mt-2'>IMAGES NEED TO BE A SVG FORMAT AND WITH A TRANSPARENT BACKGROUND</h1>
					<input className='w-fit h-fit py-4 px-2 text-white' onChange={handleImageOnChange} type='file' />
					{formState.images.length > 0 && <img className='w-fit h-64 py-4 px-2 ' src={formState.images[0].imageUrl} />}
				</div>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					{" "}
					<h1 className='text-2xl text-center h-fit w-full text-white'>Product Image</h1>
					<input className='w-fit h-fit py-4 px-2 text-white' onChange={handleImageOnChange} type='file' />
					{formState.images.length > 1 && <img className='w-fit h-64 py-4 px-2' src={formState.images[1].imageUrl} />}
				</div>
			</div>
			<div className='flex flex-col items-center justify-evenly w-fit h-full  py-6 px-8 space-y-8'>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					{" "}
					<h1 className='text-2xl text-center h-fit w-full text-white'>Top Pick Image</h1>
					{formState.images.length > 1 && <img className='w-fit h-64 py-4 px-2' src={formState.images[1].imageUrl} />}
				</div>

				<div>
					<button
						onClick={handleFormSubmit}
						type='submit'
						className='bg-blue-600 text-white font-semibold text-lg  px-4 py-2 w-48  hover:text-white hover:bg-blue-400 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white'
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopPicksUpdateTool;
