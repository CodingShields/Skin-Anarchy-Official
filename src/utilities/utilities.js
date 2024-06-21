import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { storage, db } from "../fireBase/firebaseConfig";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

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

const addHashtags = (inputText) => {
	// Logic to split input text and return array of hashtags
	const hashtags = inputText.match(/#\w+/g) || []; // Match hashtags (starting with # and followed by word characters)
	return hashtags.map((tag) => tag.toLowerCase()); // Convert all hashtags to lowercase for consistency
};

export { addHashtags };

const StartPageLoadTop = () => {
	window.scrollTo(0, 0);
};

export { StartPageLoadTop };

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

export { checkAdminAccess };

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
		});
	} catch (error) {
		console.log(error);
	}
};

export { findCurrentUser };

const formatTimeStamp = (timestamp) => {
	const date = timestamp.toDate();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${month}/${day}/${year}`;
};

export { formatTimeStamp };
	
	const formatDate = (date) => {
		const dateArray = date.split("-");
		const year = dateArray[0];
		const month = dateArray[1];
		const day = dateArray[2];
		return `${month}-${day}-${year}`;
};
	
export { formatDate };
	

