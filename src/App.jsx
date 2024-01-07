import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import LoginPage from "./pages/components/loginPage.jsx";
import SignUpPage from "./pages/components/signUpPage.jsx";
import AboutPage from "./pages/about/aboutPage.jsx";
import ConnectPage from "./pages/connect/connectPage.jsx";
import PodCastPage from "./pages/podcast/podcastPage.jsx";
import TopPicksPage from "./pages/topPicks/topPicksPage.jsx";
import BlogPage from "./pages/blog/blogPage.jsx";
import ScienceOfSkinAwards from "./pages/awards/scienceOfSkinAwards.jsx";
import AccountPage from "./pages/account/accountPage.jsx";
import HomeLayout from "./pages/layout/homeLayout.jsx";
import HomePage from "./pages/homePage/homePage.jsx";
import ProtectedRoute from "./pages/components/protectedRoute.jsx";
import LogoutPage from "./pages/logout/logoutPage.jsx";
import PrevBlogs from "./pages/blog/comp/prevBlogs.jsx";
import MasterClassPage from "./pages/masterClass/masterClassPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route index element={<LoginPage />} />
					<Route path='SignUp' element={<SignUpPage />} />
					<Route element={<ProtectedRoute />} />
					<Route path='MembersArea' element={<HomeLayout />}>
						<Route path='Home' element={<HomePage />} />
						<Route path='About' element={<AboutPage />} />
						<Route path='Connect' element={<ConnectPage />} />
						<Route path='PodCast' element={<PodCastPage />} />
						<Route path='TopPicks' element={<TopPicksPage />} />
						<Route path='Blog' element={<BlogPage />} />
						<Route path='MasterClass' element={<MasterClassPage />} />
						<Route path='PrevBlogs' element={<PrevBlogs />} />
						<Route path='ScienceOfSkinAwards' element={<ScienceOfSkinAwards />} />
						<Route path='Account' element={<AccountPage />} />
						<Route path='Logout' element={<LogoutPage />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
