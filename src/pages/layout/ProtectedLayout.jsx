// ProtectedLayout.jsx

import ProtectedRoute from "../components/ProtectedRoute";
import HomeLayout from "./HomeLayout";

function ProtectedLayout() {
	return (
		<ProtectedRoute>
			<HomeLayout></HomeLayout>
		</ProtectedRoute>
	);
}

export default ProtectedLayout;
