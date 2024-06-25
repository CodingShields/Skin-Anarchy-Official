import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { imageDownloadUrl, yearList, addHashtags } from "../../../../utilities/utilities";


const topPicksCategoryList = [
	{
		name:"Select"
	},
	{
		name: "fragrance",
		shopLink: "",
		subCategories: ["candles", "perfumes"],
	},
	{
		name: "hair",
		shopLink: "",
		subCategories: ["Dry Shampoo, Oils, Masks, & Scalp Care", "Shampoo, Conditioner & Leave-ins", "Tools & Styling Products"],
	},
	{
		name: "makeup",
		shopLink: "",
		subCategories: ["Blushes, Bronzers, Highlighters", "Eyes & Brows", "Lips & Nails", "Primer, Foundation, Concealor"],
	},
	{
		name: "skincare",
		shopLink: "",
		subCategories: [
			"body care",
			"cleansers",
			"eye creams",
			"Eye Masks, Lash & Brow Serums",
			"Lips, Hands, & Feet",
			"makeup remover & mists",
			"moisturizers",
			"oils",
			"serums",
			"skincare devices",
			"sunscreens",
			"supplements",
			"toners & essence",
			"Treatments, Peels, Patches",
		],
	},
];
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
		subCategoryMap: [],
		subCategory: "",
		brandName: "",
		brandDescription: "",
		productName: "",
		productDescription: "",
		productLink: "",
		podcastLink: "",
		brandImage: "",
		productImage: "",
		hashTags: [],
	});

	console.log(formState.hashTags);

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
			brandImage: null,
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
			});
			setTimeout(() => {
				setState({ ...state, uploading: false });
			}, 3000);
		} catch (error) {
			console.error(error);
		}
	};

const handleImageOnChange = async (e) => {
	const name = e.target.name;
	e.preventDefault();
	const newImage = e.target.files[0];
	try {
		const imageUrl = await imageDownloadUrl(newImage);
		setFormState({ ...formState, [name]: imageUrl });
	} catch (error) {
		console.error("Error uploading image:", error);
	}
};

	const findSubCategory = (category) => {
			console.log(category);
		return topPicksCategoryList.find((obj) => obj.name === category).subCategories;
	}

	return (
		<div className='w-fit h-full overflow-x-clip'>
			<div className='grid grid-cols-2 w-full h-fit gap-14'>
				<div className=' flex flex-col w-96 h-fit items-start justify-center text-xl space-y-2 bg-black p-4 rounded-xl'>
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
					<select
						onChange={(e) => setFormState({ ...formState, year: e.target.value })}
						className='w-40 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{yearList().map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
					<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Select Category</h1>
					<select
						onChange={(e) => setFormState({ ...formState, category: e.target.value, subCategoryMap: findSubCategory(e.target.value) })}
						className='w-40 uppercase border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{topPicksCategoryList.map((item, index) => {
							return <option key={index}>{item.name}</option>;
						})}
					</select>
					<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Select Sub Category</h1>
					<select
						onChange={(e) => setFormState({ ...formState, subCategory: e.target.value })}
						className='w-80 border-2 uppercase border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{formState.subCategoryMap?.map((item, index) => {
							return <option key={index}>{item}</option>;
						})}
					</select>
					<h1 className=' text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
					<input
						onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
						className=' w-80 border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>
					<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Brand Description</h1>
					<textarea
						spellCheck='true'
						onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
						className='w-80 border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>

					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Name</h1>
					<input
						spellCheck='true'
						onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
						className=' w-80 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						type='text'
					/>

					<div className='group '>
						{" "}
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
							className='w-80 border-2 border-black rounded-md group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
				</div>
				<div className=' flex flex-col w-96 h-full items-start justify-start text-xl space-y-2 bg-black p-4 rounded-xl'>
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
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Search HashTags</h1>
						<input
							className='border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
							onChange={(e) => setFormState({ ...formState, hashTags: [addHashtags(e.target.value) ]})}
						/>
						<h1>{formState.hashTags}</h1>
					</div>
					<div className='group '>
						<h1 className=' text-white'>Brand Logo</h1>
						<input className='text-white' name='brandImage' onChange={(e) => handleImageOnChange(e)} type='file' />
						{formState.brandImage !== null && <img className='w-36 h-fit py-4 px-2 mx-auto ' src={formState.brandImage} />}
					</div>
					<div className='group '>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Product Image</h1>
						<input className='text-white' name='productImage' onChange={handleImageOnChange} type='file' />
						{formState.productImage !== null && <img className='w-36 h-fit py-4 px-2 mx-auto' src={formState.productImage} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPicksUpdateTool;
