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

				<div className='flex flex-col items-center justify-start w-11/12 h-full space-y-6 py-6 px-6 bg-white shadow-lg shadow-black rounded-md hover:bg-gray-400 group'>
					<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white group-hover:border-white'>
						Upload New Top Picks
					</h1>
					<div className='flex flex-row items-center justify-between w-96 h-full mt-4'>
						<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white'>Upload Date:</h1>
						<input className='w-48 text-center hover:font-bold hover:ring-4 hover:ring-blue-500' type='date' />
					</div>
					<div className='flex flex-row items-center justify-between w-96 h-full'>
						<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white'>Year:</h1>
						<select className='w-48 text-center hover:font-bold hover:ring-4 hover:ring-blue-500'>{yearList()}</select>
					</div>
					<div className='flex flex-row items-center justify-between w-96 h-full'>
						<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white'>Category:</h1>
						<select className='w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center'>
							{topPicksCategoryListArray.map((category, index) => {
								return <option key={index}>{category}</option>;
							})}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
