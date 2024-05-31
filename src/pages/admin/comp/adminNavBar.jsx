import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon, HomeIcon, UsersIcon, NewspaperIcon, WrenchScrewdriverIcon, WrenchIcon } from "@heroicons/react/24/outline";
import whiteLogo from "../../../assets/images/whiteLogo.png";
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
		<div className='fixed w-fit h-full overscroll-y-none z-10'>
			<div className='flex flex-col items-center justify-center grow h-full bg-black px-8 lg:space-y-16 my-auto'>
				<img src={whiteLogo} className='h-36 py-4 mt-4' alt='whiteLogo' />
				<h1 className='text-white text-2xl font-glacialRegular text-center'>Admin</h1>

				{navigation.map((item, index) => {
					return (
						<div
							onClick={() => handleItemClick(item.name)}
							className={classNames(
								"  h-lvh flex space-x-4 group hover:cursor-pointer  ",
								activeItem === item.name && " ring-white ring-2 rounded-xl transition-all duration-500 ease-in-out h-fit w-fit px-4 py-2"
							)}
							key={index}
							value={item.name}
						>
							<item.icon
								className={classNames(
									"w-4 h-6 text-gray-200  group-hover:text-gold-500 group-hover:underline ",
									activeItem === item.name ? "stroke-gold-500 mr-4 group-hover:stroke-white " : ""
								)}
							/>
							<p
								className={classNames(
									activeItem === item.name
										? "scale-125  text-gold-500 group-hover:text-white whitespace-nowrap font-glacialRegular "
										: "text-white text-md w-fit group-hover:font-bold group-hover:text-gold-500 whitespace-nowrap font-glacialRegular"
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
