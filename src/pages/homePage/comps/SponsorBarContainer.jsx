import sponsorImages from "../../../assets/data/homepage/sponsorImages";
import algenist from "../../../assets/images/sponsor-images/algenist.svg";
import allenby from "../../../assets/images/sponsor-images/allenby.svg";
import ameon from "../../../assets/images/sponsor-images/ameon.svg";
import Anisa from "../../../assets/images/sponsor-images/Anisa.svg";
import arcona from "../../../assets/images/sponsor-images/arcona.svg";
import atelier from "../../../assets/images/sponsor-images/atelier.svg";
import avaMD from "../../../assets/images/sponsor-images/avaMD.svg";
import ayla from "../../../assets/images/sponsor-images/ayla.svg";
import babor from "../../../assets/images/sponsor-images/babor.svg";
import barefootscientist from "../../../assets/images/sponsor-images/barefootscientist.svg";
import beauty107 from "../../../assets/images/sponsor-images/beauty107.svg";
import beautyologie from "../../../assets/images/sponsor-images/beautyologie.svg";
import beekman1802 from "../../../assets/images/sponsor-images/beekman1802.svg";
import bluemercury from "../../../assets/images/sponsor-images/bluemercury.svg";
import boscia from "../../../assets/images/sponsor-images/boscia.svg";
import brilliance from "../../../assets/images/sponsor-images/Brilliance.svg";
import calecim from "../../../assets/images/sponsor-images/calecim.svg";
import capsum from "../../../assets/images/sponsor-images/capsum.svg";
import carbontheory from "../../../assets/images/sponsor-images/carbon theory.svg";
import care from "../../../assets/images/sponsor-images/care.svg";
import cerave from "../../../assets/images/sponsor-images/cerave.svg";
import clinicalskin from "../../../assets/images/sponsor-images/clinicalskin.svg";
import codex from "../../../assets/images/sponsor-images/codex.svg";
import dermaflash from "../../../assets/images/sponsor-images/Dermaflash.svg";
import drdennisgross from "../../../assets/images/sponsor-images/drdennisgross.svg";
import droplette from "../../../assets/images/sponsor-images/Droplette.svg";
import drRossi from "../../../assets/images/sponsor-images/drRossi.svg";
import editrix from "../../../assets/images/sponsor-images/editrix.svg";
import emmotiv from "../../../assets/images/sponsor-images/emmotiv.svg";
import emogene from "../../../assets/images/sponsor-images/Emogene.svg";
import exponent from "../../../assets/images/sponsor-images/exponent.svg";
import fig1 from "../../../assets/images/sponsor-images/fig1.svg";
import freshChemistry from "../../../assets/images/sponsor-images/freshChemistry.svg";
import goodFaceProject from "../../../assets/images/sponsor-images/goodFaceProject.svg";
import heartCompany from "../../../assets/images/sponsor-images/heartCompany.svg";
import hellosunday from "../../../assets/images/sponsor-images/hellosunday.svg";
import herbFlora from "../../../assets/images/sponsor-images/herbFlora.svg";
import houseofhill from "../../../assets/images/sponsor-images/houseofhill.svg";
import houseofM from "../../../assets/images/sponsor-images/houseofM.svg";
import inkeyList from "../../../assets/images/sponsor-images/inkeyList.svg";
import janMarini from "../../../assets/images/sponsor-images/janMarini.svg";
import JTAV from "../../../assets/images/sponsor-images/JTAV.svg";
import lafervance from "../../../assets/images/sponsor-images/lafervance.svg";
import lulaav from "../../../assets/images/sponsor-images/lulaav.svg";
import meCosmetics from "../../../assets/images/sponsor-images/meCosmetics.svg";
import medik8 from "../../../assets/images/sponsor-images/medik8.svg";
import michalmorrison from "../../../assets/images/sponsor-images/michalmorrison.svg";
import moroccanoil from "../../../assets/images/sponsor-images/moroccanoil.svg";
import nicholsmd from "../../../assets/images/sponsor-images/nicholsmd.svg";
import Odele from "../../../assets/images/sponsor-images/Odele.svg";
import olura from "../../../assets/images/sponsor-images/olura.svg";
import Omorovicza from "../../../assets/images/sponsor-images/Omorovicza.svg";
import onelogy from "../../../assets/images/sponsor-images/onelogy.svg";
import oneskin from "../../../assets/images/sponsor-images/oneskin.svg";
import Osmosis from "../../../assets/images/sponsor-images/Osmosis.svg";
import proven from "../../../assets/images/sponsor-images/proven.svg";
import retrouve from "../../../assets/images/sponsor-images/retrouve.svg";
import revea from "../../../assets/images/sponsor-images/revea.svg";
import reverie from "../../../assets/images/sponsor-images/reverie.svg";
import revision from "../../../assets/images/sponsor-images/revision.svg";
import ReVive from "../../../assets/images/sponsor-images/ReVive.svg";
import rumore from "../../../assets/images/sponsor-images/rumore.svg";
import simpure from "../../../assets/images/sponsor-images/simpure.svg";
import skinatwork from "../../../assets/images/sponsor-images/skinatwork.svg";
import skinceuticals from "../../../assets/images/sponsor-images/skinceuticals.svg";
import Skinfix from "../../../assets/images/sponsor-images/Skinfix.svg";
import skinrx from "../../../assets/images/sponsor-images/skinrx.svg";
import stamina from "../../../assets/images/sponsor-images/stamina.svg";
import sweetSpotLabs from "../../../assets/images/sponsor-images/sweetSpotLabs.svg";
import thyrst from "../../../assets/images/sponsor-images/thyrst.svg";
import veytsman from "../../../assets/images/sponsor-images/veytsman.svg";
import Womaness from "../../../assets/images/sponsor-images/Womaness.svg";
import "../../../styles/custom.scss";

const SponsorBarContainer = () => {
	console.log(sponsorImages.length);
	return (
		<div className='relative sponsorBar '>
			<h1></h1>
			<div className='sponsorBar-content'>
				{/* Images */}
				{sponsorImages.map((sponsor, index) => {
					return (
						<div className='sponsorBar-item' key={index}>
							<img src={sponsor} />
						</div>
					);
				})}
				{sponsorImages.map((sponsor, index) => {
					return (
						<div className='sponsorBar-item' key={index}>
							<img src={sponsor} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SponsorBarContainer;
