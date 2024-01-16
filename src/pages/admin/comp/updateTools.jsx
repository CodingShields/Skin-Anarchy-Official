import { useState } from "react";
import updateToolsNavBar from "../../../assets/data/admin/updateTools/updateToolsNavBar";

const UpdateTools = () => {
	const [state, setState] = useState({
		error: "",
		errorMessage: "",
		loading: false,
		success: "",
		successMessage: "",
		adminNavBar: updateToolsNavBar,
	});

	const [compState, setCompState] = useState([]);
	const [activeItem, setActiveItem] = useState();

	const handleNavBarClick = (item) => {
		setCompState(item.value);
		const itemName = item.name;
		setActiveItem(itemName);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='flex flex-col items-center justify-start w-full h-full  bg-white'>
			<h1 className='text-3xl font-bold text-black w-fit h-fit text-center mb-2 mt-4'>Skin Anarchy Database Update Tools</h1>
			<div className='flex flex-row w-full justify-center items-center space-x-6 h-fit border-b-4 border-black pb-4 '>
				{state.adminNavBar.map((item, id) => {
					return (
						<div
							className='flex flex-col items-center justify-center w-fit text-nowrap h-fit space-y-2 mt-4 px-6 group '
							key={id}
							onClick={() => handleNavBarClick(item)}
						>
							<item.icon
								className={classNames(
									"w-8 h-8 text-black group-hover:text-blue-600  group-hover:cursor-pointer group-hover:scale-125  ",
									activeItem === item.name
										? "stroke-green-500 scale-125 group-hover:text-green-500  group-hover:scale-125 transition-all duration-200 ease-in-out"
										: ""
								)}
							/>
							<p
								className={classNames(
									"text-black text-xl truncate w-fit text-pretty group-hover:scale-125  group-hover:text-blue-600 group-hover:cursor-pointer",
									activeItem === item.name
										? "text-green-500 scale-125 font-bold group-hover:text-green-500 underline  transition-all duration-200 ease-in-out"
										: ""
								)}
							>
								{item.name}
							</p>
						</div>
					);
				})}
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full overflow-y-auto bg-gray-200 '>{compState}</div>
		</div>
	);
};

export default UpdateTools;
