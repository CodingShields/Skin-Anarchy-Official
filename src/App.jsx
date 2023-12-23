import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/components/loginPage.jsx";
import SignUpPage from "./pages/components/signUpPage.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import AboutPage from "./pages/about/aboutPage.jsx";
import ConnectPage from "./pages/connect/connectPage.jsx";
import PodCastPage from "./pages/podcast/podcastPage.jsx";
import TopPicksPage from "./pages/topPicks/topPicksPage.jsx";
import BlogPage from "./pages/blog/blogPage.jsx";
import ScienceOfSkinAwards from "./pages/awards/scienceOfSkinAwards.jsx";
import AdminPage from "./pages/admin/adminPage.jsx";
import HomeLayout from "./pages/layout/homeLayout.jsx";
import ProtectedRoute from "./pages/components/protectedRoute.jsx";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route index element={<LoginPage />} />
					<Route path='SignUp' element={<SignUpPage />} />
					<Route element={<ProtectedRoute/>} /> 
					<Route path='/' element={<HomeLayout />} />
					<Route path='About' element={<AboutPage />} />
					<Route path='Connect' element={<ConnectPage />} />
					<Route path='PodCast' element={<PodCastPage />} />
					<Route path='TopPicks' element={<TopPicksPage />} />
					<Route path='Blog' element={<BlogPage />} />
					<Route path='ScienceOfSkinAwards' element={<ScienceOfSkinAwards />} />
					<Route path='Admin' element={<AdminPage />} />
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
