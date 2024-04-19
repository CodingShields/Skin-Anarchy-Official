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
	const [renderStep, setRenderStep] = useState("");

	const navigate = useNavigate();

	const handleNavigation = (name) => {
		const navTarget = name;
		if (navTarget === "Website") {
			navigate("/members-area/home");
		} else if (navTarget === "Dashboard") {
			setRenderStep(<AdminDashboard />);
		} else if (navTarget === "News Letter") {
			setRenderStep(<AdminNewsLetter />);
		} else if (navTarget === "Members") {
			setRenderStep(<AdminUserManagement />);
		} else if (navTarget === "Tech Support") {
			setRenderStep(<TechSupport />);
		} else if (navTarget === "Update Tools") {
			setRenderStep(<UpdateTools />);
		} else {
			return;
		}
	};

	useEffect(() => {
		setRenderStep(<AdminDashboard />);
	}, []);

	return (
		<div className='flex flex-row  w-full max-h-fit bg-white overscroll-contain'>
			<div className='h-full w-fit '>
				<AdminNavBar onItemClicked={handleNavigation} />
			</div>

			<div className='w-full h-full overscroll-contain'>{renderStep}</div>
		</div>
	);
};

export default AdminPage;