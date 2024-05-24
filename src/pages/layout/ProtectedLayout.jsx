// ProtectedLayout.jsx

import ProtectedRoute from "../components/ProtectedRoute";
import HomeLayout from "./HomeLayout";
import { Outlet } from "react-router-dom";
function ProtectedLayout() {
	return (
		<ProtectedRoute>
			<HomeLayout>
				<Outlet />
			</HomeLayout>
		</ProtectedRoute>
	);
}

export default ProtectedLayout;
