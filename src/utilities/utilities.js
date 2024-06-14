import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from "../fireBase/firebaseConfig";


const imageBlobCreator = (image) => {
	const newImageUrl = URL.createObjectURL(image);
	return newImageUrl;
};
export { imageBlobCreator };


const imageDownloadUrl = async (image) => {
	try {
		const storageRef = ref(storage, `topPicks`);
		await uploadBytes(storageRef, image);
		const url = await getDownloadURL(storageRef);
		return url;
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error; // Re-throw the error to handle it elsewhere if needed
	}
};


export { imageDownloadUrl };

const yearList = () => {
	let years = [];
	const currentYear = new Date().getFullYear();
	for (let i = 2018; i < currentYear; i++) {
		years.push(i);
	}
	return years;
};

export { yearList };


const addHashtags = (inputText)=> {
    // Logic to split input text and return array of hashtags
    const hashtags = inputText.match(/#\w+/g) || []; // Match hashtags (starting with # and followed by word characters)
    return hashtags.map(tag => tag.toLowerCase()); // Convert all hashtags to lowercase for consistency
}

export { addHashtags };