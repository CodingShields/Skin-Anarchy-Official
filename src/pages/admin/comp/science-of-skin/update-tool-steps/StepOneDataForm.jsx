import { useState} from "react";
import ValidateEmptyInputElements from "../../../../components/ValidateEmptyInputElements";
import ScienceOfSkinAwardsCategoriesArray from "../../../../../assets/data/admin/updateTools/scienceOfSkinAwards/scienceOfSkinAwardsCategoriesArray";
import UrlLinkCheck from "../../../../components/UrlLinkCheck";
import ErrorModal from "../../../../components/errorModal";
const StepOneDataForm = ({ setChildFormData }) => {
	const [childState, setChildState] = useState({
		loading: false,
		uploading: false,
		error: false,
		errorMessage: "",
		productUrl: false,
		podcastUrl: false,
	});
	const [formData, setFormData] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		brandLogoImage: [],
		productName: "",
		productDescription: "",
		productImage: [],
		productUrl: "",
		podcastUrl: "",
		formDataCompleted: false,
	});

	const yearList = () => {
		let years = ["Choose Year ..."];
		const currentYear = new Date().getFullYear();
		for (let i = 2018; i < currentYear; i++) {
			years.push(i);
		}
		return years;
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const handleImageUploadOnChange = async (e) => {
		e.preventDefault();
		const newImage = e.target.files[0];
		const name = e.target.name;
		if (newImage) {
			const imageUrl = URL.createObjectURL(newImage);
			setFormData({
				...formData,
				[name]: [{ files: newImage }, { imageUrl: imageUrl }],
			});
		} else {
			console.error("No file selected");
		}
	};
    console.log(formData);
    
	const validateUrl = (url) => {
		const regEx =
			/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return regEx.test(url);
	};

	const handleUrlCheck = (e) => {
		e.preventDefault();
		const urlName = e.target.value;
		const url = formData[urlName];
		if (validateUrl(url)) {
			setChildState({
				...state,
				[urlName]: true,
			});
			setFormData({ ...formData, [urlName]: url });
		} else {
			setChildState({
				...state,
				[urlName]: false,
			});
		}
	};

	const handleConfirmFormDataClick = (e) => {
		e.preventDefault();

		const emptyField = Object.keys(formData).find((key) => {
			const value = formData[key];
			if (Array.isArray(value)) {
				return value.length === 0;
			}
			return value === "";
		});

		if (emptyField) {
			setChildState({ ...childState, error: true, errorMessage: `The field " ${emptyField}" is empty.` });
			runErrorTimer();
			console.log(`The field "${emptyField}" is empty.`);
		} else {
			// All form fields are filled, so proceed with setting the state
			setFormData({ ...formData, formDataCompleted: true });
			setChildFormData(formData);
		}
	};

	function runErrorTimer() {
		setTimeout(() => {
			setChildState({ ...childState, error: false, errorMessage: "" });
		}, 3000);
	}

	return (
		<div>
			<div className='grid grid-cols-2 gap-4 place-items-center px-4 '>
				<div className='w-full flex flex-col group'>
					{childState.error ? <ErrorModal errorMessage={childState.errorMessage} /> : null}
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Select Year</h1>
					<div className='group w-full flex flex-row'>
						<select
							onChange={(e) => setFormData({ ...formData, year: e.target.value })}
							className=' w-1/2 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						>
							{yearList().map((year, index) => {
								return (
									<option className='text-center' key={index} value={year}>
										{year}
									</option>
								);
							})}
						</select>
						<ValidateEmptyInputElements data={formData.year} />
					</div>
				</div>
				<div className='w-full flex flex-col group'>
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Select Product Category</h1>
					<div className='group w-full flex flex-row'>
						<select
							onChange={(e) => setFormData({ ...formData, category: e.target.value })}
							className='w-1/2 border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						>
							{ScienceOfSkinAwardsCategoriesArray.map((year, index) => {
								return (
									<option className='text-center' key={index} value={year}>
										{year}
									</option>
								);
							})}
						</select>
						<ValidateEmptyInputElements data={formData.category} />
					</div>
				</div>

				<div className='group w-full flex flex-col'>
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Name</h1>
					<div className='flex flex-row'>
						<input
							spellCheck='true'
							onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
							className='w-3/4 border-2  border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
						<ValidateEmptyInputElements data={formData.productName} />
					</div>
				</div>

				<div className='group w-full flex flex-col'>
					{" "}
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Description</h1>
					<div className='w-full flex flex-row'>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
							className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400 w-96 h-24'
							type='text'
						/>
						<ValidateEmptyInputElements data={formData.productDescription} />
					</div>
				</div>
				<div className='group w-full flex flex-col space-y-2 '>
					<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Product URL Link</h1>
					<input
						id='productUrl'
						value={formData.productUrl}
						onChange={(e) => setFormData({ ...formData, productUrl: e.target.value })}
						className={classNames(
							"border-2 w-full h-12 rounded-md group-hover:font-bold text-black shadow-lg group-hover:shadow-white focus:shadow-blue-400 focus:font-bold",
							!childState.productUrl ? "text-red-500" : "text-green-500 font-semibold"
						)}
						type='url'
					/>
					<div className='flex flex-row justify-between py-2'>
						<button
							value='productUrl'
							onClick={handleUrlCheck}
							className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
						>
							Check Link
						</button>
						<UrlLinkCheck urlError={childState.productUrl} />
					</div>
				</div>
				<div className='group w-full flex flex-col space-y-2'>
					<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Podcast Episode URL Link</h1>
					<input
						key='podcastUrl'
						onChange={(e) => setFormData({ ...formData, podcastUrl: e.target.value })}
						className={classNames(
							"w-full border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400",
							!childState.podcastUrl ? "text-red-500" : "text-green-500 font-semibold "
						)}
						type='url'
					/>
					<div className='flex flex-row justify-between py-2'>
						<button
							value='podcastUrl'
							onClick={handleUrlCheck}
							className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
						>
							Check Link
						</button>
						<UrlLinkCheck urlError={childState.podcastUrl} />
					</div>
				</div>
				<div className='group w-full flex flex-col'>
					<h1 className=' text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
					<div className='w-full flex flex-row'>
						<input
							onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
							className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
						<ValidateEmptyInputElements data={formData.brandName} />
					</div>
				</div>
				<div className='group w-full flex flex-col'>
					<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Brand Description</h1>
					<div className='w-full flex flex-row'>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormData({ ...formData, brandDescription: e.target.value })}
							className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400 w-96 h-24'
							type='text'
						/>{" "}
						<ValidateEmptyInputElements data={formData.brandDescription} />
					</div>
				</div>
				<div className='group border-2 border-gray-600 hover:border-2 hover:border-white text-center flex flex-col justify-between w-full py-4 px-2'>
					<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Brand Logo</h1>

					<div className='w-full flex flex-row '>
						<input name='brandLogoImage' className='text-white truncate ' onChange={handleImageUploadOnChange} type='file' />
						<ValidateEmptyInputElements data={formData.brandLogoImage} />
					</div>
				</div>
				<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center w-full py-4 px-2'>
					<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Product Image</h1>
					<div className='w-full flex flex-row '>
						<input className='text-white' name='productImage' onChange={handleImageUploadOnChange} type='file' />
						<ValidateEmptyInputElements data={formData.productImage} />
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center w-full h-fit text-xl text-center text-white py-2 m-0 my-auto'>
				<button
					onClick={handleConfirmFormDataClick}
					className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md text-black hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
				>
					Confirm Form Data
				</button>
			</div>
		</div>
	);
};

export default StepOneDataForm;
