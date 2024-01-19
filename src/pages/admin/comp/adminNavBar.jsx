import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon, HomeIcon, UsersIcon, NewspaperIcon, WrenchScrewdriverIcon, WrenchIcon } from "@heroicons/react/24/outline";

const AdminNavBar = ({ onItemClicked }) => {
	const navigation = [
		{
			name: "Dashboard",
			icon: HomeIcon,
			helperMessage: "Skinanarchy Overview",
		},
		{
			name: "News Letter",
			icon: NewspaperIcon,
			helperMessage: "Manage News Letter",
		},

		{
			name: "Members",
			icon: UsersIcon,
			helperMessage: "Manage Users",
		},
		{
			name: "Update Tools",
			icon: WrenchIcon,
			helperMessage: "Update Tools",
		},

		{
			name: "Tech Support",
			icon: WrenchScrewdriverIcon,
			helperMessage: "Tech Support",
		},
		{
			name: "Website",
			icon: ArrowUturnLeftIcon,
			helperMessage: "Return To WebSite",
		},
	];

	const [activeItem, setActiveItem] = useState();

	const handleItemClick = (itemName) => {
		if (onItemClicked) {
			onItemClicked(itemName);
			setActiveItem(itemName);
		}
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='flex flex-col  items-start justify-center w-72 h-full shadow-2xl shadow-black bg-blue-600'>
			<div className='flex flex-col items-center justify-center  h-screen w-full  px-4 '>
				{navigation.map((item, index) => {
					return (
						<div
							onClick={() => handleItemClick(item.name)}
							className={classNames(
								"flex flex-row items-center justify-start w-full h-full my-8 space-x-4 px-4 rounded-r-lg group hover:cursor-pointer  ",
								activeItem === item.name
									? "translate-x-10 pr-8 bg-blue-600 transition-all duration-500 ease-in-out  border-r-8 border-green-500 h-24  "
									: ""
							)}
							key={index}
							value={item.name}
						>
							<item.icon
								className={classNames(
									"w-8 h-8 text-gray-200  group-hover:text-blue-800 group-hover:underline",
									activeItem === item.name ? "stroke-green-500 mr-4 group-hover:stroke-green-500  scale-150 mr-8" : ""
								)}
							/>
							<p
								className={classNames(
									activeItem === item.name
										? "scale-150 font-bold text-green-500 group-hover:text-green-500"
										: "text-white text-xl truncate w-32 group-hover:font-bold group-hover:text-blue-800 "
								)}
							>
								{item.name}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AdminNavBar;
