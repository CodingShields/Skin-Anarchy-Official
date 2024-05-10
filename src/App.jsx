import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

//About Pages
import AboutPage from "./pages/about/AboutPage.jsx";

//Podcast Pages
import CurrentPodcastEpisode from "./pages/podcast/CurrentPodcastEpisode.jsx";
import BrandFoundersPodcasts from "./pages/podcast/BrandFoundersPodcasts.jsx";
import CelebrityPodcasts from "./pages/podcast/CelebrityPodcasts.jsx";
import TopDoctorsPodcasts from "./pages/podcast/TopsDoctorsPodcasts.jsx";
import ThoughtLeadersPodcasts from "./pages/podcast/ThoughtLeadersPodcasts.jsx";
import TopMakeUpArtistPodcasts from "./pages/podcast/TopMakeUpArtistPodcasts.jsx";
import EditorsAndJournalistsPodcasts from "./pages/podcast/EditorsAndJournalistsPodcasts.jsx";
//Awards Pages
import TopPicksPage from "./pages/awards/TopPicksPage.jsx";
import ScienceOfSkinAwards from "./pages/awards/ScienceOfSkinAwards.jsx";
import MasterClassPage from "./pages/awards/MasterClassPage.jsx";

//Blog Pages
import SkinAnarchyBlog from "./pages/blog/SkinAnarchyBlog.jsx";
import BeautyCultureBlog from "./pages/blog/BeautyCultureBlog.jsx";
import PodcastSummariesBlog from "./pages/blog/PodcastSummariesBlog.jsx";
import ScienceOfSkinBlog from "./pages/blog/ScienceOfSkinBlog.jsx";
import FragranceBlog from "./pages/blog/FragranceBlog.jsx";
import PrevBlogs from "./pages/blog/PrevBlogs.jsx";

//Components
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import SignUpPage from "./pages/components/SignUpPage.jsx";
import HomeLayout from "./pages/layout/HomeLayout.jsx";
import ProtectedRoute from "./pages/components/ProtectedRoute.jsx";
import LogoutPage from "./pages/logout/LogoutPage.jsx";

//Account Pages
import AccountPage from "./pages/account/AccountPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import ConnectPage from "./pages/connect/ConnectPage.jsx";

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
						{/* About Pages */}
						<Route path='about-us' element={<AboutPage />} />
						{/* PodCast Pages */}
						<Route path='podcast/current-podcast-episode' element={<CurrentPodcastEpisode />} />
						<Route path='podcast/celebrity-podcasts' element={<CelebrityPodcasts />} />
						<Route path='podcast/top-doctors-podcasts' element={<TopDoctorsPodcasts />} />
						<Route path='podcast/brand-founders-podcasts' element={<BrandFoundersPodcasts />} />
						<Route path='podcast/thought-leaders-podcasts' element={<ThoughtLeadersPodcasts />} />
						<Route path='podcast/top-make-up-artists-podcasts' element={<TopMakeUpArtistPodcasts />} />
						<Route path='podcast/editors-and-journalists-podcasts' element={<EditorsAndJournalistsPodcasts />} />
						{/* Award Pages */}
						<Route path='awards/top-picks' element={<TopPicksPage />} />
						{/* <Route path='awards/master-class' element={<MasterClassPage />} /> */}
						<Route path='awards/science-of-skin-awards' element={<ScienceOfSkinAwards />} />
						{/* Blog Pages */}
						<Route path='skin-anarchy-blog' element={<SkinAnarchyBlog />} />
						<Route path='skin-anarchy-blog/beauty-culture' element={<BeautyCultureBlog />} />
						<Route path='skin-anarchy-blog/podcast-summaries' element={<PodcastSummariesBlog />} />
						<Route path='skin-anarchy-blog/science-of-skin' element={<ScienceOfSkinBlog />} />
						<Route path='skin-anarchy-blog/fragrance' element={<FragranceBlog />} />
						<Route path='past-blog' element={<PrevBlogs />} />
						<Route path='account' element={<AccountPage />} />
						<Route path='log-out' element={<LogoutPage />} />
						<Route path='connect' element={<ConnectPage />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
