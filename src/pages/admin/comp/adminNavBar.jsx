import { useState } from "react";
import { ArrowUturnLeftIcon, HomeIcon, UsersIcon, NewspaperIcon, WrenchScrewdriverIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { Button } from "../../components/Components";
import whiteLogo from "../../../assets/images/whiteLogo.png";
const AdminNavBar = ({ onItemClicked }) => {
	const [activeItem, setActiveItem] = useState("Dashboard");

	const handleItemClick = (itemName) => {
		if (onItemClicked) {
			onItemClicked(itemName);
			setActiveItem(itemName);
		}
	};

	return (
		<div className='fixed w-fit h-full overscroll-y-none z-10'>
			<div className='flex flex-col items-center justify-start h-full bg-black px-8 lg:space-y-16 my-auto whitespace-nowrap border-r-2 border-white'>
				<img src={whiteLogo} className='h-36 py-4 mt-4 mb-12' alt='whiteLogo' />
				<div className='flex flex-col space-y-8 justify-start items-center w-38'>
					<div
						className={`inline-flex justify-start items-center space-x-2 w-full h-12 ${activeItem === "Dashboard" ? "text-gold-500 font-semibold" : "text-white "} transition-all duration-500 ease-in-out`}
					>
						<HomeIcon className='h-6 w-6 ' />
						<Button
							text='Dashboard'
							onClick={() => handleItemClick("Dashboard")}
							style={" font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
					<div
						className={`inline-flex justify-start items-center space-x-2 w-full h-12 ${activeItem === "News Letter" ? "text-gold-500 font-semibold" : "text-white "} transition-all duration-500 ease-in-out`}
					>
						<NewspaperIcon className='h-6 w-6 ' />
						<Button
							text='News Letter'
							onClick={() => handleItemClick("News Letter")}
							style={" font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
					<div
						className={`inline-flex justify-start items-center space-x-2 w-full h-12 ${activeItem === "Members" ? "text-gold-500 font-semibold" : "text-white "} transition-all duration-500 ease-in-out`}
					>
						<UsersIcon className='h-6 w-6 ' />
						<Button
							text='Members'
							onClick={() => handleItemClick("Members")}
							style={" font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
					<div
						className={`inline-flex justify-start items-center space-x-2 w-full h-12 ${activeItem === "Update Tools" ? "text-gold-500 font-semibold" : "text-white "} transition-all duration-500 ease-in-out`}
					>
						<WrenchIcon className='h-6 w-6 ' />
						<Button
							text='Update Tools'
							onClick={() => handleItemClick("Update Tools")}
							style={"font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
					<div
						className={`inline-flex justify-start items-center space-x-2 w-full h-12 ${activeItem === "Tech Support" ? "text-gold-500 font-semibold" : "text-white "} transition-all duration-500 ease-in-out`}
					>
						<WrenchScrewdriverIcon className='h-6 w-6 ' />
						<Button
							text='Tech Support'
							onClick={() => handleItemClick("Tech Support")}
							style={" font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
					<div className='inline-flex justify-start items-center space-x-2 w-full h-12'>
						<ArrowUturnLeftIcon className='h-6 w-6 text-white' />
						<Button
							text='Website'
							onClick={() => handleItemClick("Website")}
							style={"text-white font-montserrat block text-lg inline-flex justify-center items-start h-fit "}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminNavBar;
