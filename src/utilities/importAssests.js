// utils/importAssets.js
function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const images = importAll(require.context("../assets/images/", false, /\.(png|jpe?g|svg)$/));
export default images;


import Anecdote Candles, Dear Grad_ Pomelo & Yuzu Leaf from "src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Anecdote Candles, Dear Grad_ Pomelo & Yuzu Leaf"
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/AveSeena, Cruel Saint Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/AveSeena, Neroli Madeleine Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Boy Smells, Rinder Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Complete Home,  Enchanted Mandarin  Scented Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Ellis Brooklyn, VERB Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Glasshouse Fragrances, Jubilant Haze Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Juliette has a gun,  Not a Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Loewe, Thyme Outdoor Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/NETTE, The Magician  Scented Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Salt & Stone, Saffron & Cedar Candle.png
src/assets/images/topPicks/2023/Fragrance/Candles/Images of Candles/Sarah Maxwell, liv_4 Candle.png