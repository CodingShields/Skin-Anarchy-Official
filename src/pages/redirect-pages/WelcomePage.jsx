import { useNavigate } from "react-router-dom";
import welcomeVid from "../../assets/video/welcomeVid.mp4";
import signature from "../../assets/images/signature.svg";
import { Button } from "../components/Components";
import {buttonStyle} from "../../styles/responsiveStyling";
const WelcomePage = () => {
	const name = "Mike";

	return (
		<div className='w-full h-fit flex justify-center items-center bg-black '>
			<div className='w-1/2 h-fit bg-black text-white flex justify-start items-center flex-col rounded-full z-10'>
				<video autoPlay muted className='w-[1000px] h-fit object-cover absolute top-24 z-10'>
					<source src={welcomeVid} type='video/mp4' />
				</video>
				<div className='py-96 z-50 mt-20'>
					<h1 className='text-4xl text-center font-montserrat '>
						Welcome to Skincare Anarchy Family<span> {name}!</span>
					</h1>
					<p className='w-10/12 text-4xl  mx-auto mt-4 font-montserrat font-thin text-left leading-[64px] mr-2'>
						{" "}
						We are so glad that you have joined. We hope that you enjoy your time here. <br />
					</p>
					<p className='w-10/12 text-4xl  mx-auto mt-4 font-montserrat font-thin text-left leading-[64px] mr-2'>
						If you have questions, send a message through our &quot;Connect&quot; tab, or click the chat icon in the bottom right hand corner of your screen.
					</p>
					<p className='w-full font-montserrat text-4xl font-thin ml-48 mt-4'>Your Host,</p>
					<p className='w-full font-montserrat text-4xl font-thin ml-64 mt-8'> Dr. Ekta</p>
					<img src={signature} alt='signature' className='mr-auto absolute w-full h-64 left-0  top-90' />
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
