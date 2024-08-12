import { useState} from "react";
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import ContactForm from "../connect/ContactForm";
import FormModal from "../components/FormModal";
const SafeSealReviewCommittee = () => {
    const [showForm, setShowForm] = useState(false);
	return (
        <div className='w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin'>
            <FormModal open={showForm} close={() => setShowForm(!showForm)} >
                <ContactForm open={showForm} close={() => setShowForm(!showForm)}/>
            </FormModal>
            
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />
			<div className='flex flex-row justify-center items-center text-white min-h-screen pt-48 '>
				<div className='w-1/2 h-full'>
					<h1 className='text-5xl mb-8'>
						<span className='tracking-widest mr-2 font-normal'>S.A.F.E</span> Seal Review Committee
					</h1>
					<p className='py-4 text-2xl ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						The S.A.F.E. Review Committee is comprised of experts across multiple disciplines, each possessing a master’s degree or higher and an
						impressive repertoire of expertise relevant to evaluating submissions for the SAFE seal. Similar to academic peer review, committee
						members are chosen based on their ability to assess specific components of each submission, such as ingredient compatibility.
					</p>
					<p className='py-4 text-2xl ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						To maintain impartiality and adhere to standard protocols akin to those of academic medical review boards, the identities of our reviewers
						are kept confidential. This ensures a holistic and multifaceted scientific validation of each submission's efficacy and scientific logic.{" "}
					</p>
				</div>
				<div className='w-fit'>
					<img src={safeSeal} alt='safe seal' className='w-[900px] h-auto' />
				</div>
			</div>
			<div className='flex flex-row justify-center items-center h-fit w-full space-x-8 pb-24'>
				<p className='text-white font-montserrat text-lg text-center'>
					To learn more about joining our review committee, please contact us via email.
				</p>
				<Button text='contact' style={buttonStyle} onClick={() => setShowForm(true)} />
			</div>
		</div>
	);
};

export default SafeSealReviewCommittee;
