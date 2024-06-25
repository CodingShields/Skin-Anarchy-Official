import { useEffect, useState } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";
import ContactForm from "./ContactForm";
import socialNav from "../../assets/data/socialNav";
import FormModal from "../components/FormModal";
const ConnectPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		openFormModal: false,
	});

	console.log(state.openFormModal);

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className='isolate overflow-hidden bg-black w-full h-fit block my-24 '>
			<FormModal open={state.openFormModal}>
				<ContactForm close={() => setState({ ...state, openFormModal: !state.openFormModal })} />
			</FormModal>
			<div className='mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-12 h-fit '>
				<h2 className='text-6xl font-montserrat text-white tracking-widest whitespace-nowrap font-thin '>CONNECT WITH US</h2>

				<div className='tracking-widest flex h-[300px]  min-w-[800px]  text-center text-white uppercase font-montserrat  rounded-xl  p-6 ring-1 ring-inset ring-white justify-center items-center'>
					<div className='text-base leading-7 '>
						<h3 className='font-montserrat text-2xl  tracking-widest underline underline-offset-8 decoration-1 '>
							Interested in coming on the show?
						</h3>
						<p className='my-4 text-md w-11/12 mx-auto font-thin'>
							Join our exclusive community of Top Doctors, Makeup Artists, Celebrities and many more leaders of the skin care industry.
						</p>

						<button
							onClick={() => setState({ ...state, openFormModal: !state.openFormModal })}
							type='button'
							className=' ring-white ring-1 rounded-md bg-black hover:bg-white px-2.5 py-1.5 text-sm font-semibold font-montserrat uppercase shadow-sm hover:text-black text-white transition-all ease-in-out duration-500 '
						>
							Apply Here
						</button>
					</div>
				</div>
				<div className='flex h-[300px]  min-w-[800px] gap-x-4 text-center text-white uppercase font-montserrat  rounded-xl  p-6 ring-1 ring-inset ring-white justify-center items-center'>
					<div className='text-base leading-7 '>
						<h3 className='font-montserrat text-2xl underline underline-offset-8 decoration-1 tracking-widest'>Come Join & Follow Us</h3>
						<div className='flex gap-x-14 p-6 '>
							{socialNav.map((item, id) => {
								return (
									<div key={id} className='h-fit w-full flex py-6 justify-center items-center group'>
										<a key={item.name} href={item.link} target='_blank' rel='noreferrer'>
											<img
												className='h-8  grayscale ease-in-out transition-all hover:grayscale-0  hover:duration-300 hover:animate-pulse hover:-translate-y-1.5 hover:cursor-pointer hover:scale-175 '
												src={item.icon}
											/>
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className='flex h-[300px]  min-w-[800px] gap-x-4 text-center text-white uppercase font-montserrat  rounded-xl  p-6 ring-1 ring-inset ring-white justify-center items-center'>
					<div className='text-base leading-7 text-white text-center'>
						<h3 className='font-montserrat text-2xl underline underline-offset-8 decoration-1 tracking-widest'>Interested in becoming a sponsor?</h3>
						<p className='my-4 text-md w-11/12 mx-auto'>Some text</p>
						<button
							onClick={() => setState({ ...state, openFormModal: !state.openFormModal })}
							type='button'
							className=' rounded-md ring-white ring-1 bg-black hover:bg-white px-2.5 py-1.5 text-sm font-semibold font-montserrat uppercase shadow-sm hover:text-black text-white transition-all ease-in-out duration-500 '
						>
							Apply Here
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectPage;
