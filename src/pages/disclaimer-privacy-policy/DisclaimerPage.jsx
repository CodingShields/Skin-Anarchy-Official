import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import whiteLogo from "../../assets/images/logos/white-logo.png";

const DisclaimerPage = () => {
	const navigate = useNavigate();
	const { user } = UserAuth();
	console.log(user);

	const isMember = () => {
		if (user) {
			navigate("/members-area/home");
		} else {
			navigate("/");
		}
	};

	return (
		<div className='w-full h-fit text-white'>
			<div className='w-3/4 h-fit flex flex-col justify-center items-center mx-auto py-24'>
				<img src={whiteLogo} className='w-64' />
				<h1 className='text-7xl uppercase font-montserrat font-thin pt-12 pb-24'>Skin Anarchy Disclaimer</h1>
				<div className='w-[1000px] border-[.5px] border-white px-14'>
					<ol className=' text-white mx-auto list-decimal	 py-12'>
						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>General Information</h1>{" "}
						</li>

						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							The content provided on Skin Anarchy&apos;s podcast website and online shop is for informational and entertainment purposes only. The
							opinions expressed on the podcast are those of the hosts and guests and do not necessarily reflect the views of Skin Anarchy.
						</p>
						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>No Professional Advice</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							The information shared on the podcast and website should not be considered professional advice. Always seek the advice of a qualified
							professional for any medical, legal, or financial matters.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>User Accounts and Conduct</h1>
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							Users are responsible for maintaining the confidentiality of their account information. We reserve the right to ban any user from the
							website for inappropriate behavior or violation of our terms of service.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>User-Generated Content</h1>{" "}
						</li>

						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							We are not responsible for user-generated content, such as comments, reviews, and forum posts. We reserve the right to remove any
							content that violates our policies or is deemed inappropriate.
						</p>
						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Intellectual Property</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							All content on this website, including text, graphics, logos, images, and audio clips, is the property of Skin Anarchy or its content
							suppliers and is protected by intellectual property laws. Unauthorized use of any content is strictly prohibited.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>E-commerce Terms</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							All purchases made through our online shop are subject to our terms and conditions. Please review our return and refund policy before
							making a purchase.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Accuracy of Information</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the completeness,
							accuracy, or reliability of any content on the podcast or website.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>External Links</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							Our website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Limitation of Liability</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							Skin Anarchy is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or podcast
							content.{" "}
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Indemnification</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							By using our website, you agree to indemnify and hold Skin Anarchy, its affiliates, officers, directors, employees, and agents harmless
							from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the website or your
							violation of these terms.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>No Warranties</h1>{" "}
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							The website and its content are provided &quot;as is&quot; and without any warranties, express or implied. We disclaim all warranties,
							including but not limited to, implied warranties of merchantability and fitness for a particular purpose.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Changes to This Disclaimer</h1>
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							We may update this disclaimer from time to time. Any changes will be posted on this page with an updated effective date. Continued use
							of the website after any such changes constitutes your acceptance of the new terms.
						</p>

						<li className='text-2xl tracking-widest font-extralight pb-2'>
							<h1>Contact Us</h1>
						</li>
						<p className='text-lg ml-6 text-start pb-8 tracking-widest'>
							If you have any questions or concerns about this disclaimer, please contact us at [Insert Contact Information].
						</p>
					</ol>
					<div className='inline-flex justify-center items-center w-full py-6'>
						<button
							onClick={isMember}
							className='uppercase font-montserrat transition-all duration-500 ease-in-out hover:bg-white hover:text-black tracking-widest px-6 py-2 rounded-xl'
						>
							Back To Website
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisclaimerPage;
