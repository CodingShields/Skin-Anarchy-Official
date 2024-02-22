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
