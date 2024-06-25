import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";

const PreviousYears = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		commitClicked: false,
		previousYears: [],
    });
    

	return (
		<div>
			<h1>Previous Years</h1>
			Will Add Once DB is filled
		</div>
	);
};

export default PreviousYears;
