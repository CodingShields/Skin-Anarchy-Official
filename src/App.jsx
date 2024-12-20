import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext.jsx";
import GlobalModals from "./pages/components/GlobalModals.jsx";
//About Pages
import MissionStatementComp from "./pages/about/MissionStatementComp.jsx";
import AboutUs from "./pages/about/AboutUs";
import FeaturedPress from "./pages/about/FeaturedPressComp.jsx";

//Podcast Pages
import CurrentPodcastEpisode from "./pages/podcast/CurrentPodcastEpisode.jsx";
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
import SignUpPage from "./pages/Sign-Up/SignUpPage.jsx";
import HomeLayout from "./pages/layout/HomeLayout.jsx";
import ProtectedRoute from "./pages/components/ProtectedRoute.jsx";
import LogoutPage from "./pages/logout/LogoutPage.jsx";

//Account Pages
import AccountPage from "./pages/account/AccountPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import ConnectPage from "./pages/connect/ConnectPage.jsx";

//Safe Seal Page
import SafeSealHome from "./pages/safe-seal/SafeSealHome.jsx";
import SafeSealAdvisors from "./pages/safe-seal/SafeSealAdvisors.jsx";
import SafeSealBrands from "./pages/safe-seal/SafeSealBrands.jsx";
import SafeSealTiers from "./pages/safe-seal/SafeSealTiers.jsx";
import SafeSealReviewCommittee from "./pages/safe-seal/SafeSealReviewCommittee.jsx";
import SafeSealContact from "./pages/safe-seal/SafeSealContact.jsx";
import SafeSealAbout from "./pages/safe-seal/SafeSealAbout.jsx";

//Shop Page
import ShopMain from "./pages/shop/ShopMain.jsx";

//Yugen Page
import YugenPage from "./pages/yugen/YugenPage.jsx";

// Support Page
import SupportPage from "./pages/support/SupportPage.jsx";
// Disclaimer and Privacy Policy PagePages
import DisclaimerPage from "./pages/disclaimer-privacy-policy/DisclaimerPage.jsx";
import PrivacyPolicyPage from "./pages/disclaimer-privacy-policy/PrivacyPolicyPage.jsx";
// Redirect Pages
import ThankYouPage from "./pages/redirect-pages/ThankYouPage.jsx";
import WelcomePage from "./pages/redirect-pages/WelcomePage.jsx";
function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<ModalProvider>
					<GlobalModals />
					<Routes>
						<Route index element={<LoginPage />} />
						<Route path='sign-up' element={<SignUpPage />} />
						<Route path='disclaimer' element={<DisclaimerPage />} />
						<Route path='privacy-policy' element={<PrivacyPolicyPage />} />

						<Route element={<ProtectedRoute />} />
						<Route path='members-area' element={<HomeLayout />}>
							<Route path='home' element={<HomePage />} />
							{/* About Pages */}
							<Route path='about/about-us' element={<AboutUs />} />
							<Route path='about/mission-statement' element={<MissionStatementComp />} />
							<Route path='about/featured-press' element={<FeaturedPress />} />
							{/* PodCast Pages */}
							<Route path='podcast/current-podcast-episode' element={<CurrentPodcastEpisode />} />
							{/* Award Pages */}
							<Route path='awards/top-picks' element={<TopPicksPage />} />
							<Route path='awards/master-class' element={<MasterClassPage />} />
							<Route path='awards/science-of-skin-awards' element={<ScienceOfSkinAwards />} />
							{/* Yugen Pages	 */}
							<Route path='yugen' element={<YugenPage />} />
							{/* Blog Pages */}
							<Route path='skin-anarchy-blog' element={<SkinAnarchyBlog />} />
							<Route path='skin-anarchy-blog/beauty-culture' element={<BeautyCultureBlog />} />
							<Route path='skin-anarchy-blog/podcast-summaries' element={<PodcastSummariesBlog />} />
							<Route path='skin-anarchy-blog/science-of-skin' element={<ScienceOfSkinBlog />} />
							<Route path='skin-anarchy-blog/fragrance' element={<FragranceBlog />} />
							<Route path='past-blog' element={<PrevBlogs />} />
							{/* Safe Seal Page */}
							<Route path='safe-seal/home' element={<SafeSealHome />} />
							<Route path='safe-seal/board-of-advisors' element={<SafeSealAdvisors />} />
							<Route path='safe-seal/safe-seal-brands' element={<SafeSealBrands />} />
							<Route path='safe-seal/tiers' element={<SafeSealTiers />} />
							<Route path='safe-seal/review-committee' element={<SafeSealReviewCommittee />} />
							<Route path='safe-seal/contact' element={<SafeSealContact />} />
							<Route path='safe-seal/about' element={<SafeSealAbout />} />

							{/* Shop Page */}
							<Route path='shop' element={<ShopMain />} />
							<Route path='account' element={<AccountPage />} />
							<Route path='log-out' element={<LogoutPage />} />
							<Route path='connect' element={<ConnectPage />} />
							{/* Support Page */}
							<Route path='support' element={<SupportPage />} />
							{/* Redirect Pages */}
							<Route path='thank-you' element={<ThankYouPage />} />
							<Route path='welcome' element={<WelcomePage />} />
						</Route>
					</Routes>
				</ModalProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
