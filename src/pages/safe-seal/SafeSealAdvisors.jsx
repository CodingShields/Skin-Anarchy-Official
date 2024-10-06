/* eslint-disable react/no-unescaped-entities */
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import colellaPic from "../../assets/images/safe-seal/colellaPic.webp";
import ektaPic from "../../assets/images/safe-seal/ektaPic.webp";
import ebruPic from "../../assets/images/safe-seal/ebruPic.webp";
import kristinPic from "../../assets/images/safe-seal/kristinPic.webp";
import zamaniPic from "../../assets/images/safe-seal/zamaniPic.webp";

const SafeSealAdvisors = () => {
	return (
		<div className="w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin">
			<img
				src={safeSealBG}
				className="w-full h-full object-cover opacity-30 absolute top-0"
			/>

			<div className="w-10/12 min-h-screen flex flex-col justify-center items-center mx-auto py-32 lg:py-64">
				<h1 className="text-3xl lg:text-6xl text-center text-white">
					S.A.F.E. Seal Board of Advisors
				</h1>
				<div className="flex flex-col w-full h-full space-y-24 pt-24">
					<div className="w-full h-fit flex flex-row justify-start lg:justify-evenly items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ">
						<div className="flex w-fit h-full justify-center items-center">
							<img
								src={ektaPic}
								alt="ekta"
								className="w-[200px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-lg object-cover"
							/>
						</div>
						<div className="flex flex-col text-white w-full lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl text-center">
								Dr. Ekta Yadav
							</h2>
							<h3 className="text-lg lg:text-2xl text-center ml-4 lg:ml-0 py-6 lg:underline underline-offset-8 decoration-1">
								Founder & CEO
							</h3>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Ekta Yadav is an award-winning scientist, internationally
								trained medical physician, and celebrated podcast host. With
								five professional degrees (MD, MBA, MS, BS, BA) and numerous
								certifications in biomedical sciences, Dr. Yadav has established
								herself as a distinguished figure in the medical and scientific
								communities. Her journey began at the age of five when she moved
								to the United States, and by seven, she was already immersed in
								research projects.
							</p>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Yadav's academic prowess is evident through her extensive
								educational background, including a BS in Biological Sciences, a
								BA in Biopsychology, an MS in Medical Physiology and Biophysics,
								and an MBA focusing on Healthcare Administration. She is also a
								trained general surgeon, currently focusing on biomedical
								research. Her research interests span neuro-oncology,
								immunology, microbiology, general surgery, dermatology,
								longevity science, and medical physiology. She has authored
								multiple publications in oncology, microbiology, dermatology,
								respiratory medicine, and breast cancer research, contributing
								significantly to the field.
							</p>
						</div>
					</div>
					<div className="w-full h-fit flex flex-row justify-evenly items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ">
						<div className="flex w-fit h-full">
							<img
								src={zamaniPic}
								alt="zamani"
								className="w-[200px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-lg object-cover"
							/>
						</div>
						<div className="flex flex-col text-white w-full lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl text-center">
								Dr. Maryam Zamani
							</h2>
							<h3 className="text-lg lg:text-2xl text-center ml-4 lg:ml-0 py-6 lg:underline underline-offset-8 decoration-1">
								Oculoplastic Surgeon, Facial Aesthetics Doctor, & Founder of MZ
								SKIN
							</h3>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Maryam Zamani is an internationally recognised authority, a
								Consultant Oculoplastic Surgeon, and Facial Aesthetics Doctor
								specialising in surgical and non-surgical facial aesthetic
								procedures in London. She has garnered a loyal following in both
								the UK and US thanks to her ultra-subtle approach and meticulous
								attention to detail.
							</p>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								With over twenty years of experience spanning two continents,
								Dr. Zamani is uniquely both an American-trained and
								Board-Certified Ophthalmologist and specialist Consultant in the
								UK. This hybrid access and dual expertise places Dr. Zamani at
								the forefront of the latest available treatments, skincare
								research & technology, and best-in-class patient care.
							</p>
						</div>
					</div>
					<div className="w-full h-fit flex flex-row justify-evenly items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ">
						<div className="flex w-fit h-full">
							<img
								src={ebruPic}
								alt="zamani"
								className="w-[200px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-lg object-cover"
							/>
						</div>
						<div className="flex flex-col text-white w-full lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl text-center">
								Dr. Ebru Karpuzoglu
							</h2>
							<h3 className="text-lg lg:text-2xl text-center ml-4 lg:ml-0 py-6 lg:underline underline-offset-8 decoration-1">
								Immunologist, Inflammatory Science Expert, & Founder of AveSeena
							</h3>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Ebru is an esteemed immunologist and leading expert in
								inflammatory science behind skincare with 15 years of experience
								in the skincare industry. Dr. Ebru is widely recognized for her
								groundbreaking work on sex hormones and inflammation, as well as
								her dedication to developing scientifically researched skincare
								products that visibly protect the skin from inflammation and
								aging to help prevent future surgical interventions.
							</p>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Ebru's career has been marked by her commitment to science,
								immunology and performance-based skincare embracing the diverse
								wellness needs from top to bottom. She launched skincare her
								brand AveSeena based on her skincare approach is rooted in her
								anti-inflammaging philosophy promoting healthier skin wellness
								using effective science based and non-irritating ingredients.
							</p>
						</div>
					</div>
					<div className="w-full h-fit flex flex-row justify-evenly items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ">
						<div className="flex w-fit h-full">
							<img
								src={kristinPic}
								alt="zamani"
								className="w-[200px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-lg object-cover"
							/>
						</div>
						<div className="flex flex-col text-white w-full lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl text-center">
								Dr. Kristin Neumann
							</h2>
							<h3 className="text-lg lg:text-2xl text-center ml-4 lg:ml-0 py-6 lg:underline underline-offset-8 decoration-1">
								Founder of MyMicrobiome
							</h3>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Kristin Neumann is the founder of the information platform
								MyMicrobiome and a passionate scientist, with a PhD in
								Microbiology. Her professional career, via molecular biology and
								research on an antibiotic alternative, lead her to form
								MyMicrobiome. Dr. Neumann’s realization of how important an
								intact microbiome is for the individual’s wellness factored into
								her decision to summarize the science around the microbiome. She
								developed a free information platform and has made it available
								to her fellow human beings.
							</p>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Dr. Ebru's career has been marked by her commitment to science,
								immunology and performance-based skincare embracing the diverse
								wellness needs from top to bottom. She launched skincare her
								brand AveSeena based on her skincare approach is rooted in her
								anti-inflammaging philosophy promoting healthier skin wellness
								using effective science based and non-irritating ingredients.
							</p>
						</div>
					</div>
					<div className="w-full h-fit flex flex-row justify-evenly items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ">
						<div className="flex w-fit h-full">
							<img
								src={colellaPic}
								alt="zamani"
								className="w-[200px] h-[200px] lg:w-[400px] lg:h-[600px] rounded-lg object-cover"
							/>
						</div>
						<div className="flex flex-col text-white w-full lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl text-center">
								Antonella Colella
							</h2>
							<h3 className="text-lg lg:text-2xl text-center ml-4 lg:ml-0 py-6 lg:underline underline-offset-8 decoration-1">
								Founder and Managing Attorney of Colella Legal Studio, PLLC
							</h3>
							<p className="text-lg tracking-wide leading-10 pb-2 indent-8 hidden lg:block">
								Antonella is the founder and managing attorney of Colella Legal
								Studio, PLLC. She provides legal counsel to entrepreneurs and
								both growing and established companies in the following
								industries: beauty, apparel, e-commerce, lifestyle brands and
								more. Colella Legal Studio is one of the only law firms with a
								practice dedicated to growing beauty-based businesses. She
								focuses on such issues as corporate counseling (choice of entity
								and business formation), drafting and negotiating contracts,
								deals including mergers, acquisitions, joint ventures and
								licensing deals, trademark and related intellectual property
								needs, real estate leasing and purchases, FDA regulations
								(MoCRA), and employment and contractor relationships.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafeSealAdvisors;
