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
		<div className='flex flex-col  items-start justify-center w-fit h-full shadow-2xl shadow-black bg-blue-600'>
			<div className='flex flex-col items-center justify-center  h-full w-48  space-y-10'>
				{navigation.map((item, index) => {
					return (
						<div
							onClick={() => handleItemClick(item.name)}
							className={classNames(
								"flex flex-row items-center justify-center  m-auto w-fit  min-h-max my-2 space-x-4 px-2 py-4 rounded-r-lg group hover:cursor-pointer  ",
								activeItem === item.name
									? "translate-x-8 pr-6 bg-blue-600 transition-all duration-500 ease-in-out  border-r-8 border-green-500 h-fit   "
									: ""
							)}
							key={index}
							value={item.name}
						>
							<item.icon
								className={classNames(
									"w-6 h-6 text-gray-200  group-hover:text-blue-800 group-hover:underline ",
									activeItem === item.name ? "stroke-green-500 mr-4 group-hover:stroke-green-500 scale-y-125" : ""
								)}
							/>
							<p
								className={classNames(
									activeItem === item.name
										? "scale-125 font-bold text-green-500 group-hover:text-green-500 whitespace-nowrap my-auto"
										: "text-white text-lg truncate w-fit group-hover:font-bold group-hover:text-blue-800 whitespace-nowrap"
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
