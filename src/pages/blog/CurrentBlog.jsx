import podcast from "../../assets/images/podcast.jpg";
import { useState, useEffect } from "react";
import BlogUserResponse from "./BlogUserResponse";
const CurrentBlog = ({ open }) => {
	console.log(open);
	const [state, setState] = useState({
		loading: false,
		error: false,
		blogCatClosed: false,
		blogFullScreenMode: false,
	});
	useEffect(() => {
		console.log("CurrentBlog open state:", open);
	}, [open]);

	console.log(state.activeBlog);
	const handleOnSelect = (e) => {
		e.preventDefault();
	};

	const handleFullScreenMode = () => {
		setState({
			...state,
			blogFullScreenMode: !state.blogFullScreenMode,
		});
	};
	if (!open) {
		return null;
	}
	return (
		<div className="flex flex-col justify-center items-center w-full h-full space-y-6 animate-fadeIn">
			<div className=" pt-4 w-full h-full bg-white overflow-y-scroll flex flex-col justify-center items-center ">
				<h1
					onSelect={handleOnSelect}
					className="text-3xl font-montserrat py-4 text-center"
				>
					How Art Eras Influence Perfumery
				</h1>
				<div className="w-10/12 flex flex-col justify-start items-start">
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Author:{" "}
						</h1>
						<h1 className="text-lg text-black/80 tracking-wide font-thin">
							{" "}
							Dr Ekta Yadav
						</h1>
					</div>
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Category:
						</h1>
						<h1 className="text-lg text-black/80 tracking-wide font-thin">
							{" "}
							Fragrance
						</h1>
					</div>
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Date:
						</h1>
						<h1 className="text-lg text-black/80 tracking-wide font-thin">
							{" "}
							11/11/1988
						</h1>
					</div>
				</div>
				<BlogUserResponse handleFullScreenMode={handleFullScreenMode} />
				<div className="w-full py-8 space-y-2 flex flex-col ">
					<img
						src={podcast}
						alt=""
						className="w-1/2 mx-auto"
					/>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The rise in skin cancer cases has led to an increased emphasis on
						sun protection. Sunscreen, hailed as the savior against sunburn and
						skin cancer, has become a staple in skincare routines worldwide.
						However, recent studies have started to question whether the push
						for sunscreen is reminiscent of the big tobacco movement in the
						1960s. With potential side effects and the overuse of sunscreen, are
						the benefits truly worth it?
					</p>

					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The Sunscreen Boom
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The popularity of sunscreen skyrocketed after the connection between
						sun exposure and skin cancer was established. This led to a
						multibillion-dollar industry, with companies marketing their
						products as essential for preventing skin cancer and premature
						aging. The industry’s aggressive marketing tactics and the
						widespread belief in the benefits of sunscreen seem to parallel the
						big tobacco movement of the 1960s when smoking was heavily promoted
						and even considered fashionable. Back then, cigarette sales reached
						523 billion in 1965, with 42% of the U.S. adult population smoking,
						despite emerging health concerns.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Questionable Ingredients and Side Effects
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The issue with sunscreen goes beyond aggressive marketing tactics.
						Some studies have raised concerns about the ingredients used in many
						sunscreens, particularly chemical-based formulas. Chemical filters
						like oxybenzone and octinoxate are common ingredients that have been
						linked to hormone disruption and environmental damage.
					</p>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						While mineral-based sunscreens, containing zinc oxide and titanium
						dioxide, are considered safer alternatives, they are not without
						their drawbacks. The nano-sized particles used in these formulations
						have been shown to cause inflammation and oxidative stress,
						potentially leading to cellular damage.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Overuse and Misuse of Sunscreen
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The belief that sunscreen is a foolproof way to prevent skin cancer
						has led to a culture of over-reliance and misuse. Many people apply
						large quantities of sunscreen without considering the potential side
						effects or the need for other sun protection measures. In reality,
						sunscreen should be used in conjunction with shade, protective
						clothing, and sunglasses for comprehensive sun protection.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The Benefits vs. The Risks
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						It is important to acknowledge that sunscreen can be an effective
						tool in preventing sunburn and reducing the risk of skin cancer.
						However, the risks and side effects associated with the overuse and
						misuse of sunscreen cannot be ignored. The parallels between the
						sunscreen and tobacco industries should serve as a cautionary tale,
						reminding us to critically evaluate the products we use and the
						claims made by manufacturers.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Agricultural Societies and Skin Cancer Rates
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						When examining the sunscreen debate, it’s crucial to consider the
						data collected from agricultural societies. Despite spending hours
						under the sun, the incidence of skin cancer in these populations
						does not seem to support the dire warnings of the sunscreen
						industry. In many agricultural communities, people spend the
						majority of their days working outdoors, exposed to sunlight for
						extended periods. Surprisingly, these populations often have lower
						rates of skin cancer compared to urban populations, despite the lack
						of sunscreen usage. This observation raises questions about the true
						necessity of sunscreen in everyday life. One anonymous individual
						shared their experience, stating, “I have many relatives who have
						never worn sunscreen but have worked on their agriculture land every
						day. Many of them are now in their 70s-80s and cancer-free after
						spending day in and day out in the sun.”
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Natural Sun Protection and Adaptation
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						One explanation for the lower skin cancer rates in agricultural
						societies could be the natural sun protection and adaptation
						mechanisms that these populations develop. Working outdoors for
						extended periods allows the body to acclimate to sun exposure,
						gradually building up a protective tan, and potentially increasing
						the skin’s natural antioxidant defenses. Additionally, people in
						agricultural societies may have a more balanced approach to sun
						exposure, taking breaks in the shade, wearing wide-brimmed hats, and
						using protective clothing. These practices reduce the overall impact
						of the sun on the skin without relying on sunscreen.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Reassessing the Role of Sunscreen
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The experiences of those in agricultural societies, who maintain a
						relatively low incidence of skin cancer without consistent sunscreen
						use, offer a different perspective on the sunscreen debate. While
						sunscreen can play a role in sun protection, it should not be viewed
						as the only solution.
					</p>
					<h4 className="text-xl w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						Conclusion
					</h4>
					<p className="text-[15px] w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						As with the big tobacco movement of the 1960s, the aggressive
						marketing and promotion of sunscreen may be misleading consumers
						about its true necessity. The experiences of agricultural societies
						show that a balanced approach to sun protection, including natural
						adaptation and other protective measures, can be just as effective,
						if not more so, than relying solely on sunscreen. As with any
						controversial topic, more research is needed to fully understand the
						long-term effects of sunscreen use. In the meantime, moderation and
						a balanced approach to sun protection are key. Using sunscreen as
						just one aspect of a comprehensive sun protection strategy, and not
						as a standalone solution, is crucial to safeguarding our health and
						the environment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CurrentBlog;
