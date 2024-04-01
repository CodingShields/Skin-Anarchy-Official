import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavStoreActions } from "../../stateStore/useNavStateStore";
import { useNavStore } from "../../stateStore/useNavStateStore";
const HomeLayout = () => {
	const [isActive, setIsActive] = useState(false);

	const location = useLocation();

	const isAdminPage = location.pathname.includes("/members-area/account");
	const navBarActive = useNavStore((state) => state.navBarActive);

	console.log(navBarActive);
	useEffect(() => {
		setIsActive(navBarActive);
	}, [navBarActive]);

	return (
		<>
			{!isAdminPage && <Header />}
			<div className={`main ${isActive ? "active" : ""}`}>
				<Outlet />
				<div className='main'>
					<div className='overlay'>
						<div class='inner'>
							<div class='shadow one'></div>
							<div class='shadow two'></div>
						</div>
					</div>
				</div>
			</div>
			{!isAdminPage && <Footer />}
		</>
	);
};

export default HomeLayout;
