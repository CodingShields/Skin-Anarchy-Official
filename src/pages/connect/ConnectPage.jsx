import { useEffect, useState } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";
import ContactForm from "./ContactForm";
import ReviewForm from "./ReviewForm";
import socialNav from "../../assets/data/socialNav";
import FormModal from "../components/FormModal";
import { Button } from "../components/Components";
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
		<div className="isolate overflow-hidden bg-black w-full min-h-screen block py-24 animate-fadeIn">
			<FormModal
				open={state.openFormModal}
				close={() =>
					setState({ ...state, openFormModal: !state.openFormModal })
				}
			>
				<ContactForm
					close={() =>
						setState({
							...state,
							openFormModal: !state.openFormModal,
							openContactForm: !state.openContactForm,
						})
					}
					open={state.openContactForm}
				/>
				<ReviewForm
					close={() =>
						setState({
							...state,
							openFormModal: !state.openFormModal,
							openReviewForm: !state.openReviewForm,
						})
					}
					open={state.openReviewForm}
				/>
			</FormModal>
			<div className="w-full h-full block">
				<div className="mx-auto mt-8 lg:mt-36 grid max-w-2xl grid-cols-1 gap-12 h-fit ">
					<h2 className="text-3xl lg:text-6xl font-montserrat text-white tracking-widest whitespace-nowrap font-thin text-center">
						CONNECT WITH US
					</h2>

					<div className="tracking-widest flex h-fit w-fit py-6 lg:p-8  flex-col space-y-4 text-center text-white uppercase font-montserrat lg:hover:shadow-lg lg:hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white/50 lg:ring-white justify-center items-center">
						<h3 className="font-montserrat text-lg lg:text-2xl  tracking-widest lg:underline underline-offset-8 decoration-1 mb-2">
							Interested in coming on the show?
						</h3>
						<p className="text-xs lg:text-lg w-11/12 mx-auto font-thin pb-2 leading-6 lg:leading-[50px]">
							Join our exclusive community of Top Doctors, Makeup Artists,
							Celebrities and many more leaders of the skin care industry.
						</p>
						<Button
							onClick={() =>
								setState({
									...state,
									openFormModal: !state.openFormModal,
									openContactForm: true,
								})
							}
							text="Apply Here"
							type="button"
							style={buttonStyle}
						/>
					</div>
					<div className="tracking-widest flex h-fit w-fit py-6 p-6 lg:p-8 mx-auto flex-col space-y-4 text-center text-white uppercase font-montserrat lg:hover:shadow-lg lg:hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white/50 lg:ring-white justify-center items-center">
						<h3 className="font-montserrat text-lg lg:text-2xl  tracking-widest lg:underline underline-offset-8 decoration-1 mb-2">
							Come Join & Follow Us
						</h3>
						<div className="flex gap-x-14 p-6 ">
							{socialNav.map((item, id) => {
								return (
									<div
										key={id}
										className="h-fit w-full flex justify-center items-center group "
									>
										<a
											key={item.name}
											href={item.link}
											target="_blank"
											rel="noreferrer"
										>
											<img
												className={`h-8 lg:h-10 grayscale ease-in-out transition-all lg:hover:grayscale-0  lg:hover:duration-500 lg:hover:animate-pulse lg:hover:-translate-y-1.5 lg:hover:cursor-pointer lg:hover:scale-175 `}
												src={item.icon}
											/>
										</a>
									</div>
								);
							})}
						</div>
					</div>
					<div className="tracking-widest flex h-fit w-fit py-6 p-6 lg:p-8 mx-auto flex-col space-y-4 text-center text-white uppercase font-montserrat lg:hover:shadow-lg lg:hover:shadow-white/50 duration-300 ease-in-out transition-all rounded-xl ring-1 ring-inset ring-white/50 lg:ring-white justify-center items-center">
						<h3 className="font-montserrat text-lg lg:text-2xl  tracking-widest lg:underline underline-offset-8 decoration-1 mb-2">
							Want to leave a review?
						</h3>

						<Button
							onClick={() =>
								setState({
									...state,
									openFormModal: !state.openFormModal,
									openReviewForm: true,
								})
							}
							text="Submit Review"
							type="button"
							style={buttonStyle}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectPage;
