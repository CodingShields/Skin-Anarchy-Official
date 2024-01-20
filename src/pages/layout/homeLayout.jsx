import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const HomeLayout = () => {
	const location = useLocation();

	const isAdminPage = location.pathname.includes("/MembersArea/Account");

	return (
		<>
			{!isAdminPage && (
				<div className='overflow-hidden bg-white'>
					<Header />
				</div>
			)}
			<main className='flex w-full h-full '>
				<Outlet />
			</main>
			{!isAdminPage && (
				<div className='bottom-0 w-full'>
					<Footer />
				</div>
			)}
		</>
	);
};

export default HomeLayout;
