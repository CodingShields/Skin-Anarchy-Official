import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import hourGlass from "../../../../assets/iconsAnimated/hourGlass.svg";
import topPicksCategoryListArray from "../../../../assets/data/admin/updateTools/topPicks/topPicksCategoryListArray";
import scienceOfSkinAwardTemplate from "../../../../assets/images/logos/scienceOfSkinAwardTemplate.svg";
import AdjustImageButtons from "../../../components/buttons/AdjustImageButtons";
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
					const storageRef = ref(storage, `topPicks/${image.name}`);
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

		function classNames(...classes) {
			return classes.filter(Boolean).join(" ");
		}
		const [position, setPosition] = useState({
			x: 0,
			y: 0,
		});

		const handleDirection = (name) => {
			if (name === "up") {
				setPosition({ ...position, y: position.y - 10 });
			} else if (name === "down") {
				setPosition({ ...position, y: position.y + 10 });
			} else if (name === "left") {
				setPosition({ ...position, x: position.x - 10 });
			} else if (name === "right") {
				setPosition({ ...position, x: position.x + 10 });
			}
		};


	return (
		// Tab Window
		<div className='flex w-full h-full '>
			{/* Error Modal */}
			{/* {state.uploading ? (
				<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-10 top-0 left-0'>
					<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
						<h1 className='w-full text-2xl font-bold animate-pulse text-white text-center '>
							Uploading... <img src={hourGlass} className='w-32 h-32 mx-auto' />
						</h1>
					</div>
				</div>
			) : (
				""
			)} */}

			{/* Main Container */}
			<div className='flex flex-row w-fit h-fit bg-zinc-700 rounded-lg  shadow-xl shadow-gray-500 p-4'>
				{/* Left Container */}
				<div className=' flex flex-col w-fit h-fit items-start justify-center text-xl space-y-2'>
					<div className='group '>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
						<select
							onChange={(e) => setFormState({ ...formState, year: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
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
					<div className='group '>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Select Category</h1>
						<select
							onChange={(e) => setFormState({ ...formState, category: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
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
					<div className='group '>
						<h1 className=' text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
						<input
							onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='group '>
						<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Brand Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='group '>
						<h1 className=' text-white'>Brand Logo</h1>
						<input className='text-white' onChange={handleImageOnChange} type='file' />
						{formState.images.length > 0 && <img className='w-fit h-fit py-4 px-2 ' src={formState.images[0].imageUrl} />}
					</div>
				</div>
				{/* Middle Container */}
				<div className=' flex flex-col w-fit h-fit items-start justify-center text-xl space-y-2'>
					<div className='group '>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Name</h1>
						<input
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>

					<div className='group '>
						{" "}
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
							className='border-2 border-black rounded-md group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='group '>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, productLink: e.target.value })}
							className='border-2 border-black rounded-md group-hover:font-bold text-black shadow-lg hover:shadow-white focus:shadow-blue-400 focus:font-bold'
							type='url'
						/>
					</div>
					<div className='group '>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Podcast Episode Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, podcastLink: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='url'
						/>
					</div>
					<div className='group '>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Product Image</h1>
						<input className='text-white' onChange={handleImageOnChange} type='file' />
						{formState.images.length > 1 && <img className='w-fit h-fit py-4 px-2' src={formState.images[1].imageUrl} />}
					</div>
				</div>
				{/* Right Container */}
				<div className=' flex flex-col w-fit h-fit items-start justify-center text-xl text-center text-white'>
					<h1 className='text-center w-full text-2xl font-semibold pb-4 underline'>Science Of Skin Award Image</h1>
					<div onClick={(e) => handleImageSelection(e)} id='html2Image' className='w-112 h-112 bg-white relative object-center'>
						{/* Award Image Background */}
						<img src={!state.awardImageApproved ? scienceOfSkinAwardTemplate : water} alt='backgroundImage' />
						{/* Template Award Image */}
						<img id='productImage' className='absolute bottom-0 right-0' src={formState.images.length > 0 && formState.images[0].imageUrl} />
						<div className='flex flex-col justify-center items-center w-full h-full absolute bottom-0 ml-4 mb-4 rounded-full'>
							<img id='award' className='w-fit h-fit ' src={formState.awardImage ? formState.awardImage : ""} />
							<h1
								style={{
									left: 200 + position.x + "px",
									top: 325 + position.y + "px",
								}}
								id='awardYearText'
								className='text-2xl text-black font-bold absolute'
							>
								{formState.year}
							</h1>
						</div>
					</div>

					<div className='flex flex-col w-full items-center justify-center text-xl h-fit  hover:text-blue-400 hover:font-semi-bold  '>
						<AdjustImageButtons setDirection={handleDirection} />
						<div className='flex flex-row w-full h-fit justify-between items-center'>
							<div className='w-full'>
								<h1 className='text-white'>Select BackGround</h1>
								<select className='text-black'>
									<option>Background</option>
									<option>Award</option>
									<option>Product</option>
								</select>
							</div>
							<div className='w-full'>
								<h1 className='text-white'>Select Image To Adjust</h1>
								<select className='text-black'>
									<option>Background</option>
									<option>Award</option>
									<option>Product</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPicksUpdateTool;
