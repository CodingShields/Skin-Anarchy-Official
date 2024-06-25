import { useState } from "react";
import logo from "../../assets/images/logo.png";
const PrivacyPolicy = ({ handleModal }) => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		scrollFinished: false,
	});

	const currentDate = new Date();

	return (
        <div className='overflow-y-scroll  w-full h-full bg-white  space-y-8 px-10'>
			<img src={logo} alt='logo' className='w-40 h-40 mx-auto' />
			<h1 className='text-4xl font-bold text-center'>Skinanarchy Privacy Policy</h1>
			<p className='text-center'>Effective Date: [Date]</p>
			<h3 className='text-2xl font-bold text-center'>Introduction</h3>
			<p className='text-center'>
				Welcome to Skinanarchy! Skinanarchy is committed to protecting your privacy and ensuring the security of your
				personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information
				when you use our website and services. By accessing or using the Skinanarchy website, you agree to the terms and
				practices described in this Privacy Policy. If you do not agree with our practices, please do not use our
				services.
			</p>
			<h3 className='text-2xl font-bold text-center '>Information We Collect</h3>
			<div className='block justify-center items-start text-start w-fit h-full mx-auto mr-20 my-4 mx-20 space-y-10'>
				<h4 className='text-xl font-bold '>Personal Information</h4>
				<p className='text-start '>We may collect personal information that you provide to us directly,such as: </p>
				<div className='block justify-center items-center w-fit h-fit'>
					<ol className='text-start list-inside list-disc	'>
						<li>Your name</li>
						<li>Email address</li>
						<li>Contact information</li>
						<li>Billing and payment information</li>
						<li>Shipping address</li>
					</ol>
				</div>
				<div className='block justify-center w-fit h-fit '>
					<h3 className='text-2xl font-bold '>Non-Personal Information</h3>
					<p className='text-start '>
						We may also collect non-personal information automatically when you interact with our website, including:
					</p>

					<ol className='text-start list-inside list-disc	'>
						<li>Log data (e.g., IP address, browser type)</li>
						<li>Device information (e.g., device type, operating system)</li>
						<li>Usage information (e.g., pages visited, interactions)</li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold '>How We Use Your Information</h3>
					<p>We use your information for the following purposes:</p>
					<ol className='text-start list-inside list-disc	'>
						<li>To provide and improve our services. </li>
						<li>To process and fulfill orders. </li>
						<li>To communicate with you, respond to inquiries, and provide customer support. </li>
						<li>To send you marketing and promotional materials, if you have opted in. </li>
						<li>To analyze and enhance the performance and usability of our website. </li>
						<li>To comply with legal obligations and protect our rights and interests. </li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold'>Sharing Your Information</h3>
					<p>We may share your information with third parties in the following circumstances:</p>
					<ol className='text-start list-inside list-disc	'>
						<li>With service providers and partners who assist us in delivering our services. </li>
						<li>To comply with legal obligations or government requests. </li>
						<li>In connection with the sale or transfer of all or part of our business. </li>
						<li>With your consent. </li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold '>Your Choices</h3>
					<p>You have the following choices regarding your information:</p>
					<ol className='text-start list-inside list-disc	'>
						<li>You can access, update, or delete your personal information by contacting us. </li>
						<li>
							You can opt-out of marketing communications at any time by following the instructions provided in the
							communication or by contacting us.{" "}
						</li>
						<li>You can configure your browser to block cookies and other tracking technologies. </li>
					</ol>
				</div>

				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold '>Security</h3>
					<ol className='text-start list-inside list-disc	'>
						<li>
							We take reasonable measures to protect your information from unauthorized access, disclosure, alteration,
							or destruction. However, please be aware that no data transmission over the internet is completely secure.
						</li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold '>Children's Privacy</h3>
					<ol className='text-start list-inside list-disc	'>
						<li>
							Our services are not directed at children under the age of 13. We do not knowingly collect or solicit
							personal information from children.
						</li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold '>Changes to This Privacy Policy</h3>
					<ol className='text-start list-inside list-disc	'>
						<li>
							We may update this Privacy Policy from time to time to reflect changes in our practices and services. We
							will notify you of any material changes by posting the updated policy on our website.
						</li>
					</ol>
				</div>
				<div className='block justify-center items-center w-fit h-fit'>
					<h3 className='text-2xl font-bold text-center'>Contact Us</h3>
					<p>
						If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
						[Contact Information]
					</p>
					<h1>Skinanarchy Privacy Policy</h1>
					<p>Effective Date:</p>
				</div>
				<div className='flex flex-col justify-center justify-start w-full h-fit pb-20'>
					<button onClick={handleModal} className='bg-violet-700 py-2 px-6 w-fit mx-auto rounded-lg text-white cursor-pointer shadow-lg shadow-black hover:bg-blue-600 active:translate-y-2'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
