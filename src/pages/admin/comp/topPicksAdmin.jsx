import { useEffect, useState } from "react";
import topPicksCategoryListArray from "../../../assets/data/admin/updateTools/topPicks/topPicksCategoryListArray";
const TopPicksAdmin = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
	});
	const [prevTopPicksData, setPrevTopPicksData] = useState([
		{
			year: "",
			category: "",
		},
	]);
	const [newTopPicksData, setNewTopPicksData] = useState([
		{
			uploadDate: "",
			year: "",
			category: "",
			product: "",
			brand: "",
			link: "",
		},
	]);

	const yearList = () => {
		const year = new Date().getFullYear();
		const years = [];
		for (let i = 2010; i <= year; i++) {
			years.push(i);
		}
		return years.map((year, index) => {
			return <option key={index}>{year}</option>;
		});
	};

	const handlePrevOnchange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		console.log(value);
		console.log(name);
		setPrevTopPicksData((prevState) => ({
			...prevState[0],
			[name]: value,
		}));
	};

	useEffect(() => {
		setPrevTopPicksData({
			year: "",
			category: "",
		}),
			setNewTopPicksData({
				uploadDate: "",
				year: "",
				category: "",
				product: "",
				brand: "",
				link: "",
			});
	}, []);

	console.log(prevTopPicksData);
	return (
		<div className='flex flex-col items-center justify-start w-fit h-full mt-20 '>
			<h1 className='text-5xl font-bold text-black w-fit text-center mr-2 mb-4 '>Top Picks</h1>
			<div className='flex flex-row items-center justify-start w-fit h-fit space-x-48'>
				
				
			</div>
		</div>
	);
};

export default TopPicksAdmin;
