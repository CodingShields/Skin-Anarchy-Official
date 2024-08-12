import { CheckBadgeIcon} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import maternity from "../../assets/images/safe-seal/maternity.webp";
const SafeSealTierCard = (props) => {
	const { tier, option1, option2, open, children, tier5 } = props;
	if (!open) return null;
	

	
	
	return (
		<div className='space-y-24'>
			{children}
			<div
				className={`w-[1200px] border px-4 py-8 rounded-bl-xl rounded-tr-xl shadow-2xl shadow-white/20 rounded-br-xl bg-black relative animate-fadeIn h-fit ${tier5 ? "hidden" : "true"} `}
			>
				<p className='text-2xl pb-2  bg-white text-black w-fit font-normal px-4 py-2 absolute -top-12 -left-[.05rem] rounded-tl-xl rounded-tr-xl uppercase'>
					{tier}
				</p>
				<img
					src={safeSeal}
					className='absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-20'
					alt='safe seal'
				/>
				<div className=' flex flex-col justify-center items-start h-full'>
					<div className='inline-flex justify-start items-center py-2'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>{option1}</p>
					</div>
					<div className='inline-flex justify-start items-center relative'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>{option2}</p>
					</div>
				</div>
			</div>
			<div
				className={`w-[1200px] border px-4 py-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl shadow-white/20 bg-black relative animate-fadeIn h-64 ${tier5 ? "hidden" : "visible"} `}
			>
				<p className='text-2xl pb-2  bg-white text-black w-fit font-normal px-4 py-2 absolute -top-12 -left-[.05rem] rounded-tl-xl rounded-tr-xl uppercase'>
					ADD ON: TEEN SKIN CERTIFIED
				</p>
				<img
					src={safeSeal}
					className='absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-20'
					alt='safe seal'
				/>
				<img src={safeSealTeen} className='w-64 h-64 overflow-hidden absolute top-0 left-0' />
				<div className=' flex flex-col justify-center items-center h-48 w-3/4 ml-auto'>
					<div className='inline-flex justify-start items-center py-2'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>
							Add a layer of evaluation on top to ensure the teenage skin friendly products in your line can be highlighted.{" "}
						</p>
					</div>
					<div className='inline-flex justify-start items-center relative'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>
							1 year of licensing of the teen seal issued for display on packaging, social, and website
						</p>
					</div>
				</div>
			</div>
			<div
				className={`w-[1200px] border px-4 py-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl shadow-white/20 bg-black relative animate-fadeIn h-64 hidden `}
			>
				<p className='text-2xl pb-2  bg-white text-black w-fit font-normal px-4 py-2 absolute -top-12 -left-[.05rem] rounded-tl-xl rounded-tr-xl uppercase'>
					ADD ON: MATERNITY SKIN CERTIFIED{" "}
				</p>

				<img
					src={safeSeal}
					className='absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-20'
					alt='safe seal'
				/>
				<img src={maternity} className='w-64 h-64 overflow-hidden absolute top-0 left-0' />
				<div className=' flex flex-col justify-center items-center h-48 w-3/4 ml-auto'>
					<div className='inline-flex justify-start items-center py-2'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>
							Add a layer of evaluation on top to ensure the maternity skin friendly products in your line can be highlighted.{" "}
						</p>
					</div>
					<div className='inline-flex justify-start items-center relative'>
						<CheckBadgeIcon className='w-16 h-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
						<p className=' text-xl whitespace-wrap block w-fit mx-2'>
							1 year of licensing of the teen seal issued for display on packaging, social, and website{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

SafeSealTierCard.propTypes = {
	tier: PropTypes.string,
	option1: PropTypes.string,
	option2: PropTypes.string,
	option3: PropTypes.string,
	open: PropTypes.bool,
	children: PropTypes.node,
	tier5: PropTypes.bool,
};

export default SafeSealTierCard;
