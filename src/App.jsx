import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import LoginPage from "./pages/components/LoginPage.jsx";
import SignUpPage from "./pages/components/SignUpPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ConnectPage from "./pages/connect/ConnectPage.jsx";
import PodCastPage from "./pages/podcast/PodcastPage.jsx";
import TopPicksPage from "./pages/topPicks/TopPicksPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import ScienceOfSkinAwards from "./pages/awards/ScienceOfSkinAwards.jsx";
import AccountPage from "./pages/account/AccountPage.jsx";
import HomeLayout from "./pages/layout/HomeLayout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import ProtectedRoute from "./pages/components/ProtectedRoute.jsx";
import LogoutPage from "./pages/logout/LogoutPage.jsx";
import PrevBlogs from "./pages/blog/comp/PrevBlogs.jsx";
import MasterClassPage from "./pages/masterClass/MasterClassPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route index element={<LoginPage />} />
					<Route path='sign-up' element={<SignUpPage />} />
					<Route element={<ProtectedRoute />} />
					<Route path='members-area' element={<HomeLayout />}>
						<Route path='home' element={<HomePage />} />
						<Route path='about' element={<AboutPage />} />
						<Route path='connect' element={<ConnectPage />} />
						<Route path='podcast' element={<PodCastPage />} />
						<Route path='top-picks' element={<TopPicksPage />} />
						<Route path='blog' element={<BlogPage />} />
						<Route path='masterclass' element={<MasterClassPage />} />
						<Route path='past-blog' element={<PrevBlogs />} />
						<Route path='science-of-skin-awards' element={<ScienceOfSkinAwards />} />
						<Route path='account' element={<AccountPage />} />
						<Route path='log-out' element={<LogoutPage />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
