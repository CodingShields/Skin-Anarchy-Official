import { useNavigate } from "react-router-dom";

const PolicyBar = () => {

    const navigate = useNavigate();
	return (
		<div className='flex flex-row w-full justify-center items-end sm:space-x-8 space-x-48 h-fit  fixed bottom-0 cursor-pointer z-10'>
			<button
				className='font-thin font-montserrat  py-4 text-white/30 transition-all ease-in-out duration-300 hover:text-white uppercase'
				onClick={() => navigate("/disclaimer")}
			>
				Disclaimer
			</button>
			<button
				className='font-thin font-montserrat  py-4 text-white/30 uppercase transition-all ease-in-out duration-300 hover:text-white '
				onClick={() => navigate("/privacy-policy")}
			>
				Privacy Policy
			</button>
		</div>
	);
};

export default PolicyBar;
