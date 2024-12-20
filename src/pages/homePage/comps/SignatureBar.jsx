import signature from "../../../assets/images/signature.svg";

const SignatureBar = () => {
	return (
		<div className="w-3/4 mx-auto lg:w-full h-fit lg:pt-96 lg:pb-36 pt-28 relative block">
			<h1 className=" text-gray-100 lg:text-2xl text-[12px] xxl:text-3xl text-center font-montserrat lg:tracking-[8px] tracking-normal ">
				“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND
				FACTS, NOT TRENDS ”
			</h1>
			<div className="flex flex-row justify-center w-full items-center gap-12 text-gray-100 lg:py-24  py-8">
				<img
					src={signature}
					className="lg:w-[800px] w-[300px] "
				/>
			</div>
		</div>
	);
};

export default SignatureBar;
