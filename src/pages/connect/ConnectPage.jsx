import { useEffect, useState } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";
import ContactForm from "./ContactForm";
import ReviewForm from "./ReviewForm";
import socialNav from "../../assets/data/socialNav";
import FormModal from "../components/FormModal";
import { Button } from "../components/Components"
import { buttonStyle } from "../../styles/responsiveStyling";
const ConnectPage = () => {
	const [state, setState] = useState({
		openFormModal: false,
		openContactForm: false,
		openReviewForm: false,
	});

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className='isolate overflow-hidden bg-black w-full h-screen block my-24 animate-fadeIn'>
			<FormModal open={state.openFormModal} close={() => setState({ ...state, openFormModal: !state.openFormModal })}>
				<ContactForm close={() => setState({ ...state, openFormModal: !state.openFormModal, openContactForm: !state.openContactForm })} open={state.openContactForm} />
				<ReviewForm	close={() => setState({ ...state, openFormModal: !state.openFormModal, openReviewForm: !state.openReviewForm })} open={state.openReviewForm}/>
			</FormModal>
			<div className='w-full h-3/4 flex justify-center items-center'>
				<div className='mx-auto mt-36 grid max-w-2xl grid-cols-1 gap-12 h-fit '>
					<h2 className='text-6xl font-montserrat text-white tracking-widest whitespace-nowrap font-thin '>CONNECT WITH US</h2>

					<div className='tracking-widest flex h-fit min-w-[800px] p-8  flex-col space-y-4 text-center text-white uppercase font-montserrat hover:shadow-lg hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white justify-center items-center'>
						<h3 className='font-montserrat text-2xl  tracking-widest underline underline-offset-8 decoration-1 mb-2'>
							Interested in coming on the show?
						</h3>
						<p className='text-md w-11/12 mx-auto font-thin pb-2'>
							Join our exclusive community of Top Doctors, Makeup Artists, Celebrities and many more leaders of the skin care industry.
						</p>
						<Button onClick={() => setState({ ...state, openFormModal: !state.openFormModal, openContactForm: true })} text='Apply Here' type='button' style={buttonStyle} />
					</div>
					<div className=' tracking-widest flex h-fit min-w-[800px] p-8  flex-col space-y-4 text-center text-white uppercase font-montserrat hover:shadow-lg hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white justify-center items-center'>
						<h3 className='font-montserrat text-2xl underline underline-offset-8 decoration-1 tracking-widest'>Come Join & Follow Us</h3>
						<div className='flex gap-x-14 p-6 '>
							{socialNav.map((item, id) => {
								return (
									<div key={id} className='h-fit w-full flex py-6 justify-center items-center group '>
										<a key={item.name} href={item.link} target='_blank' rel='noreferrer'>
											<img
												className={`h-10 grayscale ease-in-out transition-all hover:grayscale-0  hover:duration-500 hover:animate-pulse hover:-translate-y-1.5 hover:cursor-pointer hover:scale-175 `}
												src={item.icon}
											/>
										</a>
									</div>
								);
							})}
						</div>
					</div>
					<div className='tracking-widest flex h-fit min-w-[800px] p-8  flex-col space-y-4 text-center text-white uppercase font-montserrat hover:shadow-lg hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white justify-center items-center'>
						<h3 className='font-montserrat text-2xl  tracking-widest underline underline-offset-8 decoration-1 mb-2'>
							Want to leave a review?
						</h3>
						
						<Button onClick={() => setState({ ...state, openFormModal: !state.openFormModal, openReviewForm: true })} text='Review Form' type='button' style={buttonStyle} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectPage;
