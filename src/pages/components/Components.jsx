import PropTypes from "prop-types";
import workingCircle from "../../assets/iconsAnimated/workingCircle.svg";
import errorIcon from "../../assets/iconsAnimated/errorIcon.svg";

const SelectComp = (props) => {
	const { options, value, onChange, id, name, style, required } = props;
	return (
		<select value={value} onChange={onChange} id={id} name={name} className={style} required={required ? required : ""}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

SelectComp.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	required: PropTypes.bool,
};

const InputComp = (props) => {
	const { type, placeholder, style, onChange, required, id, autoComplete, value, icon } = props;

	return (
		<div className='w-full inline-flex relative items-center'>
			<div className={`absolute "left-0 ml-2`}>{icon}</div>
			<input
				value={value}
				autoComplete={autoComplete}
				id={id}
				required={required ? required : ""}
				type={type}
				placeholder={placeholder}
				className={style}
				onChange={onChange}
			/>
		</div>
	);
};

InputComp.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	style: PropTypes.string,
	onChange: PropTypes.func,
	required: PropTypes.bool,
	id: PropTypes.string,
	autoComplete: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.node,
};

const TextAreaComp = (props) => {
	const { placeholder, style, onChange, required, id, autoComplete, value, rows } = props;

	return (
		<textarea
			className={style}
			value={value}
			onChange={onChange}
			id={id}
			required={required}
			placeholder={placeholder}
			autoComplete={autoComplete}
			rows={rows}
		/>
	);
};

TextAreaComp.propTypes = {
	placeholder: PropTypes.string,
	style: PropTypes.string,
	onChange: PropTypes.func,
	required: PropTypes.bool,
	id: PropTypes.string,
	autoComplete: PropTypes.string,
	value: PropTypes.string,
	rows: PropTypes.number,
};

const Button = (props) => {
	const { children, onClick, style, image, text, imageStyle, icon } = props;
	return (
		<>
			<button className={style} onClick={onClick}>
				{icon}
				{image && <img src={image} alt='button' className={imageStyle} />}
				{children && children}
				{text && text}
			</button>
		</>
	);
};

Button.propTypes = {
	icon: PropTypes.node,
	children: PropTypes.node,
	onClick: PropTypes.func,
	style: PropTypes.string,
	image: PropTypes.string,
	text: PropTypes.string,
	imageStyle: PropTypes.string,
};

const FormComp = ({ children, style, open}) => {
	if (!open) return null;
	return <form className={style}>{children}</form>;
};

FormComp.propTypes = {
	children: PropTypes.node,
	style: PropTypes.string,
	open: PropTypes.bool,
};

const WorkingModal = ({ message, open }) => {
	if (!open) return null;
	return (
		<div className='absolute w-full h-full z-40 top-0 left-0 animate-fadeIn'>
			<div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-center items-center place-content-center w-full h-full'>
				<h1 className='w-full text-2xl font-bold animate-pulse text-black text-center '></h1>
				{message}
				<div className='w-fit h-fit'>
					<img src={workingCircle} className='w-96 mx-auto' />
				</div>
			</div>
		</div>
	);
};

WorkingModal.propTypes = {
	message: PropTypes.string,
	open: PropTypes.bool,
};

const ErrorModal = ({ open, message }) => {
	if (!open) return null;
	return (
		<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-50 top-0 left-0'>
			<div className='flex justify-center items-center place-content-center w-full h-full animate-fadeIn'>
				<div className='inline-flex w-fit h-fit bg-red-500 bg-opacity-80 rounded-2xl shadow-lg shadow-black px-2 items-center'>
					<img src={errorIcon} className='w-16 h-24 mx-auto' />
					<h1 className='w-full text-lg font-bold text-white text-center capitalize underline'>Error: {message}</h1>
				</div>
			</div>
		</div>
	);
};

ErrorModal.propTypes = {
	open: PropTypes.bool,
	message: PropTypes.string,
};

const Modal = ({ children, open, close }) => {
	if (!open) return null;

	return (
		<div className='fixed inset-0 z-50 flex justify-center items-center animate-fadeIn'>
			<div
				className='absolute inset-0 z-40 bg-black opacity-75'
				onClick={close} // Close modal on click outside
			/>
			<div className='z-50 w-fit h-fit flex flex-col justify-center items-center'>{children}</div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
};

const PageWrapper = ({ children }) => {
	return <div className='w-full min-h-screen my-auto mt-24'>{children}</div>;
};

PageWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export { SelectComp, InputComp, TextAreaComp, Button, FormComp, WorkingModal, ErrorModal, Modal, PageWrapper };
