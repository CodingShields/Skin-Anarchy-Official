import { useEffect, useState } from "react";
import ValidateEmptyInputElements from "../../../components/ValidateEmptyInputElements";
import ScienceOfSkinAwardsCategoriesArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/scienceOfSkinAwardsCategoriesArray";
import UrlLinkCheck from "../../../components/UrlLinkCheck";
import ErrorModal from "../../../components/ErrorModal";
import UploadingModal from "../../../components/UploadingModal";
import FormCompleteModal from "../../../components/FormCompleteModal";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import tagsArray from "../../../../assets/data/tagsArray";
const DataUpload = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		uploading: false,
		uploadComplete: false,
		productUrl: false,
		podcastUrl: false,
		showUploadingModal: false,
		showFormCompleteModal: false,
	});

	const [formData, setFormData] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		productName: "",
		productDescription: "",
		productUrl: "",
		podcastUrl: "",
		images: [],
		formDataCompleted: false,
	});
	const [imageUrls, setImageUrls] = useState([]);

	const resetState = () => {
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			success: false,
			successMessage: "",
			uploading: false,
			uploadComplete: false,
			productUrl: false,
			podcastUrl: false,
			showUploadingModal: false,
			showFormCompleteModal: false,
		});
		setFormData({
			year: "",
			category: "",
			brandName: "",
			brandDescription: "",
			productName: "",
			productDescription: "",
			productUrl: "",
			podcastUrl: "",
			images: [],
			tags: [],
			formDataCompleted: false,
		});
		setImageUrls([]);
	};

	useEffect(() => {
		return () => {
			resetState();
		};
	}, []);

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
		const imageName = e.target.name;
		if (newImage) {
			const imageUrl = URL.createObjectURL(newImage);
			setFormData({
				...formData,
				images: [...formData.images, { name: imageName, imageUrl: imageUrl, image: newImage }],
			});
		} else {
			console.error("No file selected");
		}
	};

	const handleFireStoreUpload = async () => {
		try {
			const urls = [];

			for (let i = 0; i < formData.images.length; i++) {
				const image = formData.images[i].image;
				const imageRef = ref(storage, `scienceOfSkinAwards/${image.name + v4()}`);

				await uploadBytes(imageRef, image).then((snapshot) => {
					return getDownloadURL(snapshot.ref).then((url) => {
						urls.push(url);
					});
				});
			}
            setImageUrls(urls);
            console.log(urls);
            console.log(urls.length);
		} catch (error) {
			setState({ ...state, error: true, errorMessage: error.message });
			runErrorTimer();
			console.error(error);
		}
	};


	const handleFireStoreDataUpload = async (e) => {
		e.preventDefault();
		setState({ ...state, showUploadingModal: true });
        try {
			await handleFireStoreUpload();
		} catch (error) {
			setState({
				...state,
				error: true,
				errorMessage: error.message,
			});
			runErrorTimer();
			console.error(error);
		}
        try {
            setState({ ...state, uploading: true });
			const colRef = collection(getFirestore(), "scienceOfSkinAwards");
			await addDoc(colRef, {
				upLoadDate: new Date(),
				year: formData.year,
				category: formData.category,
				productName: formData.productName,
				productDescription: formData.productDescription,
				productUrl: formData.productUrl,
				podcastUrl: formData.podcastUrl,
				brandName: formData.brandName,
				brandDescription: formData.brandDescription,
				tags: formData.tags,
                images: imageUrls,
            });
            setState({ ...state, uploadComplete: true });
            setTimeout(() => {
                setState({ ...state, uploading: false, showUploadingModal: false });
            }, 3000);
            resetState();
		} catch (error) {
			setState({
				...state,
				error: true,
				errorMessage: error.message,
			});
			runErrorTimer();
			console.error(error);
		}
	};

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
			setState({
				...state,
				[urlName]: true,
			});
			setFormData({ ...formData, [urlName]: url });
		} else {
			setState({
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
			setState({ ...state, error: true, errorMessage: `The field " ${emptyField}" is empty.` });
			runErrorTimer();
			console.log(`The field "${emptyField}" is empty.`);
		} else {
			setFormData({ ...formData, formDataCompleted: true });
			setState({ ...state, showFormCompleteModal: true });
			setTimeout(() => {
				setState({ ...state, showFormCompleteModal: false });
			}, 3000);
		}
	};

	const handleTagsOnChange = (e) => {
		e.preventDefault();
        const tag = e.target.value;
		setFormData({ ...formData, tags: [...formData.tags, tag] });
	};

    const handleTagsOnClick = (e) => {
        e.preventDefault();
        const tag = e.target.value;
        const newTags = formData.tags.filter((item) => item !== tag);
        setFormData({ ...formData, tags: newTags });
    };

	function runErrorTimer() {
		setTimeout(() => {
			setState({ ...state, error: false, errorMessage: "" });
		}, 3000);
    }
    

        

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='w-full h-full'>
			<div className='w-fit h-fit bg-zinc-700 mx-auto px-4 py-4 rounded-lg '>
				<div className='grid grid-cols-2 gap-4 place-items-center px-4 '>
					<div className='w-full flex flex-col group'>
						{state.error ? <ErrorModal errorMessage={state.errorMessage} /> : null}
						{state.showUploadingModal && <UploadingModal uploadComplete={state.uploadComplete} />}
						{state.showFormCompleteModal && <FormCompleteModal />}
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
								!state.productUrl ? "text-red-500" : "text-green-500 font-semibold"
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
							<UrlLinkCheck urlError={state.productUrl} />
						</div>
					</div>
					<div className='group w-full flex flex-col space-y-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Podcast Episode URL Link</h1>
						<input
							key='podcastUrl'
							onChange={(e) => setFormData({ ...formData, podcastUrl: e.target.value })}
							className={classNames(
								"w-full border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400",
								!state.podcastUrl ? "text-red-500" : "text-green-500 font-semibold "
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
							<UrlLinkCheck urlError={state.podcastUrl} />
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
					<div className='group w-full'>
						<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Tags</h1>
						<div className='w-full flex flex-row'>
							<select
								onChange={handleTagsOnChange}
								className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400'
							>
								{tagsArray.map((tag, index) => {
									return (
										<option disabled={Array.isArray(formData.tags) && formData.tags.includes(tag)} key={index} value={tag}>
											{tag}
										</option>
									);
								})}
							</select>

							<ValidateEmptyInputElements data={formData.tags} />
						</div>
						<div className='w-full h-full text-lg text-center text-white py-2 grid grid-cols-4 mx-auto gap-2'>
							{Array.isArray(formData.tags) &&
								formData.tags.map((tag, index) => {
									return (
										<div key={index} className='border-2 py-1 px-2 rounded-xl hover:border-2 hover:border-red-400 font-italic bg-white hover:bg-red-300 mt-2 w-24 h-fit group'>
                                            <button
                                                onClick={handleTagsOnClick}
                                                value={tag}
                                                className=' text-black text-sm hover:text-white '>{tag}</button>
										</div>
									);
								})}
						</div>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white text-center flex flex-col justify-between w-full py-4 px-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Brand Logo</h1>

						<div className='w-full flex flex-row '>
							<input name='brandLogoImage' className='text-white truncate ' onChange={handleImageUploadOnChange} type='file' />
							<img src={formData.images[0]?.imageUrl} alt='Brand Logo' className='w-24 h-24' />
							<ValidateEmptyInputElements data={formData.images[0]?.imageUrl} />
						</div>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center w-full py-4 px-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Product Image</h1>
						<div className='w-full flex flex-row '>
							<input className='text-white' name='productImage' onChange={handleImageUploadOnChange} type='file' />
							<img src={formData.images[1]?.imageUrl} alt='Product Image' className='w-24 h-24' />
							<ValidateEmptyInputElements data={formData.images[1]?.imageUrl} />
						</div>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center w-full py-4 px-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Award Image</h1>
						<div className='w-full flex flex-row '>
							<input className='text-white' name='awardImage' onChange={handleImageUploadOnChange} type='file' />
							<img src={formData.images[2]?.imageUrl} alt='Award Image' className='w-24 h-24' />
							<ValidateEmptyInputElements data={formData.images[2]?.imageUrl} />
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-evenly items-center w-full h-fit text-xl text-center text-white py-2 m-0 my-auto'>
					<button
						onClick={handleConfirmFormDataClick}
						className='bg-blue-500 h-fit w-64 px-4 py-2 rounded-md text-black hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
					>
						{formData.formDataCompleted ? "Click Upload Data" : "Confirm Form Data"}
					</button>
					<button
						disabled={!formData.formDataCompleted}
						className={
							!formData.formDataCompleted
								? "cursor-not-allowed bg-blue-500 h-fit w-64 px-4 py-2 rounded-md text-black hover:bg-red-500"
								: "cursor-pointer bg-blue-500 h-fit w-64 px-4 py-2 rounded-md text-black hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2"
						}
						onClick={handleFireStoreDataUpload}
					>
						Upload Data
					</button>
				</div>
			</div>
		</div>
	);
};

export default DataUpload;
