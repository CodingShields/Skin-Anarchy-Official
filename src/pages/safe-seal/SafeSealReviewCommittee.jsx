import { useState } from "react";
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
// import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
// import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import ContactForm from "../connect/ContactForm";
import FormModal from "../components/FormModal";
const SafeSealReviewCommittee = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<div className="w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin">
			<FormModal
				open={showForm}
				close={() => setShowForm(!showForm)}
			>
				<ContactForm
					open={showForm}
					close={() => setShowForm(!showForm)}
				/>
			</FormModal>

			<img
				src={safeSealBG}
				className="w-full h-full object-cover object-center opacity-50 lg:opacity-30 absolute top-0"
			/>
			<div className="block h-full w-full lg:w-10/12 mx-auto lg:flex flex-row justify-center items-center text-white  pt-24 lg:pt-48 ">
				<div className="w-11/12 lg:w-1/2 h-fit mx-auto lg:mx-0">
					<h1 className="text-3xl lg:text-5xl mb-8 hidden lg:visible uppercase">
						<span className="tracking-widest mr-2 font-normal">S.A.F.E</span>{" "}
						Seal Review Committee
					</h1>
					<div className="w-11/12 mx-auto py-4">
						<h1 className="text-3xl lg:text-5xl mb-2  uppercase">
							<span className="tracking-widest mr-2 font-normal text-gold-500 brightness-100">
								S.A.F.E
							</span>{" "}
							Seal{" "}
							<span className="text-3xl lg:text-5xl mb-8">
								{" "}
								Review Committee
							</span>
						</h1>
					</div>

					<div className="w-11/12 lg:w-full mx-auto">
						<p className="py-4 text-lg  lg:text-2xl lg:ml-2 mt-2 text-justify break-all leading-8 lg:leading-[60px] tracking-normal brightness-100 lg:brightness-none font-monserrat	">
							The{" "}
							<span className="text-gold-500 brightness-100 font-semibold">
								S.A.F.E.
							</span>{" "}
							Review Committee is comprised of experts across multiple
							disciplines, each possessing a master’s degree or higher and an
							impressive repertoire of expertise relevant to evaluating
							submissions for the SAFE seal. Similar to academic peer review,
							committee members are chosen based on their ability to assess
							specific components of each submission, such as ingredient
							compatibility.
						</p>
						<p className="py-4 text-lg  lg:text-2xl lg:ml-2 mt-2 text-justify break-all leading-8 lg:leading-[60px] tracking-normal brightness-100 lg:brightness-none font-monserrat	">
							To maintain impartiality and adhere to standard protocols akin to
							those of academic medical review boards, the identities of our
							reviewers are kept confidential. This ensures a holistic and
							multifaceted scientific validation of each submission&rsquo;s
							efficacy and scientific logic.{" "}
						</p>
					</div>
				</div>
				<div className="w-64 lg:w-[900px] mx-auto brightness-100 lg:brightness-50">
					<img
						src={safeSeal}
						alt="safe seal"
						className="w-full h-auto object-center object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-center items-center h-fit w-10/12 mx-auto lg:w-full lg:space-x-8 pb-24 lg:mt-16 space-y-4 lg:space-y-0">
				<p className="text-white font-montserrat text-[15px] lg:text-2xl text-center brightness-200">
					To learn more about joining our review committee, please contact us
					via email.
				</p>
				<Button
					text="contact"
					style={buttonStyle}
					onClick={() => setShowForm(true)}
				/>
			</div>
		</div>
	);
};

export default SafeSealReviewCommittee;
