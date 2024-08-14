import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Nav Pages
import AdminDashboard from "../admin/comp/adminDashboard";
import AdminNewsLetter from "../admin/comp/adminNewsLetter";
import AdminUserManagement from "../admin/comp/adminUserManagement";
import AdminNavBar from "./comp/adminNavBar";
import TechSupport from "./comp/techSupport";
import UpdateTools from "./comp/updateTools.jsx";
//Nav Icons

const AdminPage = () => {
	const [navSelected, setNavSelected] = useState("Dashboard");

	const handleNavigation = (name) => {
		const navTarget = name;
		setNavSelected(navTarget);
	};
console.log(navSelected)
	return (
		<div className=' w-full h-full bg-white overscroll-y-none'>
			<div className='w-full overflow-x-clip'>
				<AdminNavBar onItemClicked={handleNavigation} />
			</div>
			<div className='w-full h-full relative'>
				<AdminDashboard open={navSelected === "Dashboard"} />
				<AdminNewsLetter open={navSelected === "News Letter"} />
				<AdminUserManagement open={navSelected === "Members"} />
				<TechSupport open={navSelected === "Tech Support"} />
				<UpdateTools open={navSelected === "Update Tools"} />
			</div>
		</div>
	);
};

export default AdminPage;
