import signature from "../../../assets/images/signature.svg";

const SignatureBar = () => {
	return (
		<div className="w-full h-fit lg:pt-96 lg:pb-36 pt-48 relative block">
			<h1 className=" text-gray-100 lg:text-2xl text-[11px] xxl:text-3xl text-center font-montserrat tracking-[8px] ">
				“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND
				FACTS, NOT TRENDS ”
			</h1>
			<div className="flex flex-row justify-center w-full items-center gap-12 text-gray-100 py-24 sm:py-8">
				<img
					src={signature}
					className="lg:w-[800px] w-[300px] "
				/>
			</div>
		</div>
	);
};

export default SignatureBar;
