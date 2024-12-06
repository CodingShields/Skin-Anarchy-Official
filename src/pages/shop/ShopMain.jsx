const ShopMain = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen lg:h-screen w-full shopMain animate-fadeIn relative overscroll-x-none">
			<h1 className="font-montserrat font-thin uppercase shopText text-3xl lg:text-9xl">
				Skin Anarchy Shop
			</h1>
			<h1 className="font-montserrat font-thin uppercase shopText2 text-3xl lg:text-7xl mt-16">
				Coming Soon!
			</h1>
			<div className="w-fit absolute bottom-32 ">
				<button className="text-white/80 font-montserrat font-thin uppercase shopText3 text-xl border-[.05rem] border-white/50 px-4 py-2 rounded-xl lg:hover:bg-white lg:hover:text-black transition-all ease-in-out duration-500 lg:hover:text-2xl lg:hover:font-medium lg:hover:animate-none lg:animate-pulse">
					Notify Me When It Is Live!
				</button>
			</div>
		</div>
	);
};

export default ShopMain;
