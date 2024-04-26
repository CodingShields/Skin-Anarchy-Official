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

const TopPicks = () => {
	return (
		<div className='w-full h-screen'>
			<div className=''>
				<h1 className='text-white text-6xl text-center font-playfair uppercase tracking-widest py-6'>Skincare Anarchy Awards </h1>
				<h2 className='text-white lowercase text-center font-montserrat text-4xl'>#toppicks</h2>
			</div>
			<div className='relative topPicksBar h-screen'>
				<div className='topPicksBar-content py-12 mt-12'>
					<div className='topPicksBar-item'>
						<img onMouseEnter={() => console.log("test")} src={codex} />
					</div>
					<div className='topPicksBar-item'>
						<img src={elta} />
					</div>
					<div className='topPicksBar-item'>
						<img src={epicutis} />
					</div>
					<div className='topPicksBar-item'>
						<img src={hairOil} />
					</div>
					<div className='topPicksBar-item'>
						<img src={janMarini} />
					</div>
					<div className='topPicksBar-item'>
						<img src={makeUpMario} />
					</div>
					<div className='topPicksBar-item'>
						<img src={oneSkin} />
					</div>
					<div className='topPicksBar-item'>
						<img src={pcaSkin} />
					</div>
					<div className='topPicksBar-item'>
						<img src={revive} />
					</div>
					<div className='topPicksBar-item'>
						<img src={victoriaBeckham} />
					</div>
					{/* Marquee Split */}
					<div className='topPicksBar-item'>
						<img src={codex} />
					</div>
					<div className='topPicksBar-item'>
						<img src={elta} />
					</div>
					<div className='topPicksBar-item'>
						<img src={epicutis} />
					</div>
					<div className='topPicksBar-item'>
						<img src={hairOil} />
					</div>
					<div className='topPicksBar-item'>
						<img src={janMarini} />
					</div>
					<div className='topPicksBar-item'>
						<img src={makeUpMario} />
					</div>
					<div className='topPicksBar-item'>
						<img src={oneSkin} />
					</div>
					<div className='topPicksBar-item'>
						<img src={pcaSkin} />
					</div>
					<div className='topPicksBar-item'>
						<img src={revive} />
					</div>
					<div className='topPicksBar-item'>
						<img src={victoriaBeckham} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPicks;
