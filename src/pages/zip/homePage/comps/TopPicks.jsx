import codex from "../../../assets/images/topPicks/codex.svg";
import elta from "../../../assets/images/topPicks/elta.svg";
import epicutis from "../../../assets/images/topPicks/epicutis.svg";
import hairOil from "../../../assets/images/topPicks/hair-oil.svg";
import janMarini from "../../../assets/images/topPicks/jan-marini.svg";
import makeUpMario from "../../../assets/images/topPicks/make-up-mario.svg";
import oneSkin from "../../../assets/images/topPicks/one-skin.svg";
import pcaSkin from "../../../assets/images/topPicks/pca-skin.svg";
import revive from "../../../assets/images/topPicks/revive.svg";
import victoriaBeckham from "../../../assets/images/topPicks/victoria-beckham.svg";

const topPicks = [
    codex,
    elta,
    epicutis,
    hairOil,
    janMarini,
    makeUpMario,
    oneSkin,
    pcaSkin,
    revive,
    victoriaBeckham,
];

const TopPicks = () => {
    


    return (
			<div className='block w-full h-fit text-white bg-opacity-100 z-10 pb-24 relative'>
				{/* <h1 className='text-4xl font-bold text-center py-12'>Take a Look At Our Sponsors</h1> */}
				<div className='marquee'>
					<div className='marquee-content'>
						{topPicks.map((image, index) => (
							<div key={index} className='marquee-item m-auto bg-opacity-100'>
								<img src={image} alt='' />
							</div>
						))}
					</div>
				</div>
			</div>
		);
}

export default TopPicks