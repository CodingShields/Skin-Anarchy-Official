import { useNavigate } from "react-router-dom";
import { Button } from "../components/Components";
const PolicyBar = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-row w-full justify-center items-end sm:space-x-8 space-x-48 h-fit  cursor-pointer z-30 relative'>
			<Button
				text='Disclaimer'
				style=' font-montserrat text-[13px] py-4 text-white/30 transition-all ease-in-out duration-300 hover:text-white uppercase'
				onClick={() => navigate("/disclaimer")}
			/>
			<Button
				text='Privacy Policy'
				style=' font-montserrat text-[13px] py-4 text-white/30 transition-all ease-in-out duration-300 hover:text-white uppercase'
				onClick={() => navigate("/privacy-policy")}
			/>
		</div>
	);
};

export default PolicyBar;
