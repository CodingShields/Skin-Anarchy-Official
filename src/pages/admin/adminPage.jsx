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
import DoubleChevRightBtn from "../components/buttons/doubleChevRightBtn";
import DoubleChevLeftBtn from "../components/buttons/doubleChevLeftBtn";

const AdminPage = () => {
	const [renderStep, setRenderStep] = useState("");

	const [navBarRender, setNavBarRender] = useState(true);

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

	const handleNavRender = () => {
		setNavBarRender(!navBarRender);
	};

	useEffect(() => {
		setRenderStep(<AdminDashboard />);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (!navBarRender) {
				return;
			} else {
				// setNavBarRender(!navBarRender);
			}
		}, 4000);
	}, [navBarRender]);

	return (
		<div className='flex h-screen w-full bg-gradient-to-t from-blue-300 via-purple-500 to-pink-500 '>
			<div className='flex flex-row h-full w-full '>
				<div
					className={
						navBarRender
							? "top-44 left-0 w-64 h-full transform-gpu transform-translate translate-x-0 duration-700 ease-in-out "
							: "transform-gpu  w-14 h-full transform-translate -translate-x-42 duration-1000 ease-in-out "
					}
				>
					<AdminNavBar onItemClicked={handleNavigation} />
				</div>

				{!navBarRender ? (
					<div className='animate-pulse ease-in-out duration-700 w-16 h-full  '>
						<DoubleChevRightBtn onClick={handleNavRender} />
					</div>
				) : (
					<div className='focus:translate-x-1  animate-pulse ease-in-out duration-700 w-16 h-full '>
						<DoubleChevLeftBtn onClick={handleNavRender} />
					</div>
				)}
				<div className='w-full  overflow-y-auto'>{renderStep}</div>
			</div>
		</div>
	);
};

export default AdminPage;
