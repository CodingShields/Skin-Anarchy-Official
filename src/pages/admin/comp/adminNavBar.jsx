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
		<div className='flex flex-col items-start justify-center w-fit h-full bg-blue-600 px-8 py-12 lg:space-y-16 md:space-y-24'>
			{navigation.map((item, index) => {
				return (
					<div
						onClick={() => handleItemClick(item.name)}
						className={classNames(
							"  h-fit flex space-x-4  py-4  group hover:cursor-pointer  ",
							activeItem === item.name && " bg-blue-600 transition-all duration-500 ease-in-out h-fit w-fit px-4 py-4 "
						)}
						key={index}
						value={item.name}
					>
						<item.icon
							className={classNames(
								"w-6 h-6 text-gray-200  group-hover:text-blue-800 group-hover:underline ",
								activeItem === item.name ? "stroke-green-500 mr-4 group-hover:stroke-green-500 " : ""
							)}
						/>
						<p
							className={classNames(
								activeItem === item.name
									? "scale-125 font-bold text-green-500 group-hover:text-green-500 whitespace-nowrap "
									: "text-white text-lg truncate w-fit group-hover:font-bold group-hover:text-blue-800 whitespace-nowrap"
							)}
						>
							{item.name}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default AdminNavBar;
