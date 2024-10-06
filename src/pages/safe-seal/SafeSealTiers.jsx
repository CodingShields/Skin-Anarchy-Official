import { useState } from "react";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import SafeSealTierCard from "./SafeSealTierCard";
import SafeSealNav from "./SafeSealNav";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
const SafeSealTiers = () => {
	const [state, setState] = useState({
		tier: 0,
	});
	console.log(state.tier);

	const handleNavSelect = (id) => {
		setState({ ...state, tier: id });
	};
	return (
		<div className="w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin">
			<img
				src={safeSealBG}
				className="w-full h-full object-cover opacity-30 absolute top-0"
			/>
			<div className="flex flex-col justify-center items-center text-white min-h-screen py-24 lg:py-48">
				<h1 className="text-3xl text-center lg:text-5xl mb-8">
					Product Review Tier Options
				</h1>
				<SafeSealNav activeNav={handleNavSelect} />
				<div className="w-full flex flex-col lg:flex-row justify-center items-start pt-24 space-x-8">
					<SafeSealTierCard
						open={state.tier === 0}
						tier5={false}
						tier="Tier 1"
						option1="Review of 4 Product SKUs"
						option2="1 year licensing of the seal issued for display on packaging, social, and website"
					/>
					<SafeSealTierCard
						open={state.tier === 1}
						tier5={false}
						tier="Tier 2"
						option1="Review of products in brand portfolio (up to 10 SKUs)"
						option2="1 year licensing of the seal issued for display on packaging, social, and website"
					/>
					<SafeSealTierCard
						open={state.tier === 2}
						tier5={false}
						tier="Tier 3"
						option1="Review of products in brand portfolio (up to 25 SKUs)"
						option2="1 year licensing of the seal issued for display on packaging, social, and website"
					/>
					<SafeSealTierCard
						open={state.tier === 3}
						tier5={false}
						tier="CUSTOM / NON-FORMULA BASED"
						option1="Review of 1 Product SKU"
						option2="1 year licensing of the seal issued for display on packaging, social, and website"
					/>
					<SafeSealTierCard
						open={state.tier === 4}
						tier5={false}
						tier="Custom Product Review"
						option1="Review of 1 Product SKU"
						option2="1 year licensing of the seal issued for display on packaging, social, and website"
					/>
					<SafeSealTierCard
						open={state.tier === 5}
						tier5={true}
					>
						<div
							className={`w-full lg:w-[1600px] border px-4 py-8 rounded-bl-xl rounded-tr-xl rounded-br-xl bg-black relative animate-fadeIn h-fit flex flex-col lg:flex-row shadow-2xl shadow-white/20`}
						>
							<div className="flex flex-col justify-center items-start h-full w-full lg:w-1/2">
								<p className="text-2xl pb-2  bg-white text-black w-fit font-normal px-4 py-2 absolute -top-12 -left-[.05rem] rounded-tl-xl rounded-tr-xl uppercase">
									Evaluation Criteria{" "}
								</p>
								<div className="text-lg lg:text-xl leading-10 w-full lg:w-10/12 space-y-4 pl-2 py-2 text-justify">
									<p className="indent-8 w-11/12 lg:w-full lg:leading-8 lg:mx-auto">
										At{" "}
										<span className="text-2xl uppercase font-normal ml-2">
											Skin Anarchy
										</span>
										, we meticulously evaluate skin care products through a
										rigorous set of criteria to ensure excellence and safety.{" "}
									</p>
									<p className="indent-8 w-11/12 lg:w-full lg:leading-8 mx-auto">
										Our comprehensive literature review delves into existing
										research and scientific studies, ensuring that every
										ingredient used is thoroughly vetted for safety and
										efficacy.
									</p>
									<p className="indent-8 w-11/12 lg:w-full lg:leading-8 mx-auto">
										We assess the efficacy data to determine how well the
										product performs its intended function, and evaluate the
										result time frame to set realistic expectations for users.
										Our analysis also includes a close examination of potential
										side effects, ensuring transparency and safety.{" "}
									</p>
									<p className="indent-8 w-11/12 lg:w-full lg:leading-8 mx-auto">
										Data analysis is conducted to interpret results accurately,
										adhering to stringent laboratory standards for reliability.
										We scrutinize packaging integrity to confirm that products
										are delivered in optimal condition, and consider clinical
										reviews to understand real-world effectiveness.{" "}
									</p>
									<p className="indent-8 w-11/12 lg:w-full lg:leading-8 mx-auto">
										Additionally, we perform patch testing to gauge individual
										reactions and carefully manage the testing timeline to
										ensure thorough and reliable outcomes. This comprehensive
										approach allows us to provide our customers with skin care
										solutions that are both effective and safe.
									</p>
								</div>{" "}
							</div>

							<div className=" flex flex-col justify-center items-start h-full space-y-8">
								<div className="inline-flex justify-start items-center py-2">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Comprehensive Literature Review
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Ingredient Safety
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Efficacy Data
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Result Time Frame
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Side Effects
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Data Analysis
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Laboratory Standards
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Packaging Integrity
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Clinical Reviews
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Patch Resting
									</p>
								</div>
								<div className="inline-flex justify-start items-center relative">
									<CheckBadgeIcon className="w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] " />
									<p className=" text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap block  w-11/12 text-wrap lg:w-fit mx-2">
										Testing Timeline
									</p>
								</div>
							</div>

							<img
								src={safeSeal}
								className="absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-20"
								alt="safe seal"
							/>
						</div>
					</SafeSealTierCard>
				</div>
			</div>
		</div>
	);
};

export default SafeSealTiers;
