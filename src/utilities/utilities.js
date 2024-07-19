import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { storage, db } from "../fireBase/firebaseConfig";
import { UserAuth } from "../context/AuthContext";

const userDeviceInfo = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const imageBlobCreator = (image) => {
	const newImageUrl = URL.createObjectURL(image);
	return newImageUrl;
};

const imageDownloadUrl = async (image) => {
	console.log(image)
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

const yearList = () => {
	let years = [];
	const currentYear = new Date().getFullYear();
	for (let i = 2018; i < currentYear; i++) {
		years.push(i);
	}
	return years;
};

const addHashtags = (inputText) => {
	// Logic to split input text and return array of hashtags
	const hashtags = inputText.match(/#\w+/g) || []; // Match hashtags (starting with # and followed by word characters)
	return hashtags.map((tag) => tag.toLowerCase()); // Convert all hashtags to lowercase for consistency
};

const StartPageLoadTop = () => {
	window.scrollTo(0, 0);
};

const checkAdminAccess = async () => {
	const currentUser = UserAuth();
	const userId = currentUser.user.uid;
	console.log(userId);
	try {
		const docRef = doc(db, "users", `${userId}`);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const adminAccess = docSnap.data().profile.adminAccess;
			console.log(adminAccess);
			return adminAccess;
		} else {
			console.log("No such document!");
		}
	} catch (error) {
		console.log("Error getting document:", error);
	}
};

const findCurrentUser = async () => {
	const currentUser = UserAuth();
	const userId = currentUser.user.uid;
	try {
		await getDocs(collection(db, "users")).then((snapshot) => {
			const users = snapshot.docs.map((doc) => ({
				id: userId,
				...doc.data(),
			}));
			const currentUserProfile = users.find((user) => user.id === userId && user.profile);
			console.log(currentUserProfile);
			return currentUserProfile;
		});
	} catch (error) {
		console.log(error);
	}
};

const formatTimeStamp = (timestamp) => {
	const date = timestamp.toDate();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${month}/${day}/${year}`;
};

const formatDate = (date) => {
	const dateArray = date.split("-");
	const year = dateArray[0];
	const month = dateArray[1];
	const day = dateArray[2];
	return `${month}-${day}-${year}`;
};

const handleSearch = (arr, searchItem) => {
	console.log(arr);
	console.log(searchItem);
	const arrVal = arr.filter((arr) => arr.value === searchItem);
	if (arrVal.length > 0) {
		return arrVal;
	} else {
		return null;
	}
};

export {
	handleSearch,
	formatDate,
	formatTimeStamp,
	userDeviceInfo,
	imageBlobCreator,
	imageDownloadUrl,
	yearList,
	addHashtags,
	StartPageLoadTop,
	checkAdminAccess,
	findCurrentUser,
};
