export const animateCounter = (element, target) => {
	element.innerText = "0";
	const updateCounter = () => {
		const count = +element.innerText;
		const increment = target / 200;
		if (count < target) {
			element.innerText = `${Math.ceil(count + increment)}`;
			setTimeout(updateCounter, 65); // Change the timeout to slow down the animation
		} else element.innerText = target;
	};
	updateCounter();
};

// var counterNum = 628235;

// $(document).ready(function () {
// 	counterControl($(".userNumBar"), counterNum);

// 	counterControl($(".userImgNumBar"), counterNum, {
// 		isDigitBg: true,
// 		comma: true,
// 	});
// });

// function counterControl(target, number, config) {
// 	var _target = target;
// 	var number = number.toString();
// 	var numArray = number.split("");
// 	var isBg = false;
// 	var defaults = {
// 		speed: 3000,
// 		isDigitBg: false,
// 		comma: true,
// 	};
// 	$.extend(defaults, config);

// 	_target.empty();
// 	_target.html('<span class="pplNum"></span>');

// 	for (var i = 0; i < numArray.length; i++) {
// 		var html = "";
// 		numArray[i] = parseInt(numArray[i], 10);
// 		if (defaults.isDigitBg) {
// 			html = '<span class="digit-con"><span class="digit' + i + '"></span></span>';
// 		} else {
// 			html =
// 				'<span class="digit-con"><span class="digit' +
// 				i +
// 				'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>';
// 		}
// 		_target.find(".pplNum").append(html);
// 	}

// 	if (defaults.comma) {
// 		_target.find(".digit-con:nth-last-child(3n+4)").after("<span class='comma'>,</a>");
// 	}

// 	checkScroll();

// 	$(window).bind("scroll", function () {
// 		checkScroll();
// 	});

// 	function checkScroll() {
// 		if (_target.offset().top < $(window).scrollTop() + $(window).height()) {
// 			for (var i = 0; i < numArray.length; i++) {
// 				var increment = _target.find(".digit-con").outerHeight();
// 				_target
// 					.find(".digit" + i)
// 					.delay(i * 300)
// 					.animate({ top: -(increment * numArray[i] + increment * 10) }, defaults.speed, "linear");
// 			}
// 		}
// 	}
// }
