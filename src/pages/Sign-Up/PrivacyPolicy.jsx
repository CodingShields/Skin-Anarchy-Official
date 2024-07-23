import whiteLogo from "../../assets/images/logos/white-logo.png";
import PropTypes from "prop-types";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
const PrivacyPolicy = ({ close }) => {
	return (
		<div className='w-full h-fit text-white py-12'>
			<div className='w-3/4 h-fit flex flex-col justify-center items-center mx-auto '>
				<img src={whiteLogo} className='w-36' />

				<h1 className='text-4xl uppercase font-montserrat font-thin pt-12 pb-12'>Skin Anarchy Privacy Policy</h1>
				<div className='w-[1000px] border-[.5px] border-white px-14'>
					<ol className=' text-white mx-auto list-decimal	 py-12'>
						<li className='text-lg tracking-widest font-normal pb-2 '>Introduction</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							Welcome to Skin Anarchy&apos;s podcast website and online shop. We are committed to protecting your privacy and ensuring that your
							personal information is handled in a safe and responsible manner.
						</p>

						<li className='text-lg tracking-widest font-normal pb-4'>
							<h1>Information We Collect</h1>{" "}
						</li>
						<div className='w-10/12 mx-auto pb-8'>
							<ul className=' text-white mx-auto list-disc space-y-2 '>
								<li className='text-md tracking-widest font-normal '>Personal Information:</li>
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									When you create an account, make a purchase, or sign up for our newsletter, we may collect personal information such as your name,
									email address, shipping address, billing address, phone number, and payment information.
								</p>
								<li className='text-md tracking-widest font-normal'> Usage Data:</li>
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									We track clicks, page views, and other interactions on our website to improve our services.
								</p>
								<li className='text-md tracking-widest font-normal'>Cookies: </li>
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									We use cookies to enhance your experience on our website. Cookies help us understand how you interact with our site and personalize
									your experience.
								</p>
								<li className='text-md tracking-widest font-normal'>Transaction Data:</li>
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									Information related to your purchases, including the products you buy, payment method, and transaction details.
								</p>
							</ul>
						</div>

						<li className='text-lg tracking-widest font-normal pb-4'>
							<h1>How We Use Your Information</h1>{" "}
						</li>
						<div className='w-10/12 mx-auto pb-8'>
							<ul className=' text-white mx-auto list-disc space-y-2 '>
								<li className='text-md tracking-widest font-normal'>Account Management:</li>
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>To manage your account and provide you with personalized services.</p>
								<li className='text-md tracking-widest font-normal'>Order Fulfillment:</li>{" "}
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									To process and fulfill your orders, including shipping, returns, and customer service.
								</p>
								<li className='text-md tracking-widest font-normal'>Marketing: </li>{" "}
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									To send you promotional offers, newsletters, and other relevant information if you opt-in to receive them.
								</p>
								<li className='text-md tracking-widest font-normal'>Security:</li>{" "}
								<p className='text-md ml-6 text-start pb-2 tracking-widest'>
									To protect our website, prevent fraud, and ensure the security of our services.
								</p>
							</ul>
						</div>
						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Security</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							We implement various security measures to protect your personal information. However, no method of transmission over the internet or
							electronic storage is completely secure, and we cannot guarantee absolute security.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Your Rights</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us
							directly.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Children&apos;s Privacy</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
							If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from
							our records.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Data Retention</h1>{" "}
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							We retain your personal information and transaction data for as long as necessary to fulfill the purposes outlined in this privacy
							policy, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type
							of information and the context in which it was collected.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Third-Party Links</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of
							these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>User Consent</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							By using our website and providing your personal information, you consent to the collection, use, and sharing of your information as
							described in this privacy policy. You have the right to withdraw your consent at any time by contacting us, but this may limit your
							ability to use certain features of our website.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>International Data Transfers</h1>{" "}
						</li>

						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							If you are accessing our website from outside your country of residence, your information may be transferred to, stored, and processed
							in a country that has different data protection laws than your country. We take steps to ensure that your information is protected in
							accordance with this privacy policy.
						</p>
						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Changes to This Policy</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
						</p>

						<li className='text-lg tracking-widest font-normal pb-2'>
							<h1>Contact Us</h1>
						</li>
						<p className='text-md ml-6 text-start pb-8 tracking-widest'>
							If you have any questions or concerns about this privacy policy, please contact us at [Insert Contact Information].
						</p>
					</ol>
					<div className='inline-flex justify-center items-center w-full mb-2'>
						<Button text='Close' style={buttonStyle} onClick={close} />
					</div>
				</div>
			</div>
		</div>
	);
};

PrivacyPolicy.propTypes = {
	handleModal: PropTypes.func,
};

export default PrivacyPolicy;
