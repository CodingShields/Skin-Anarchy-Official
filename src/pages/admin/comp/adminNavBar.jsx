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
	const handleItemClick = (itemName) => {
		if (onItemClicked) {
			onItemClicked(itemName);
		}
	};
	return (
		<div className='flex flex-col bg-blue-500 items-start justify-center w-fit h-full '>
			<div className='flex flex-col items-start justify-center  h-full w-full  px-4 shadow-2xl shadow-black'>
				{navigation.map((item, index) => {
					return (
						<div
							onClick={() => handleItemClick(item.name)}
							className='flex flex-row items-center justify-start w-full h-16 my-8 space-x-4 px-4 rounded-lg group hover:cursor-pointer  '
							key={index}
							value={item.name}
						>
							<item.icon className='w-8 h-8 text-gray-200 group-hover:text-blue-800 group-hover:underline' />
							<p className='text-white text-xl truncate w-32 group-hover:font-bold group-hover:text-blue-800 '>{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AdminNavBar;
