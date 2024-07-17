import PropTypes from "prop-types";
const TextAreaComp = (props) => {
	const { placeholder, style, onChange, required, id, autoComplete, value, rows } = props;

	return (
		<textarea
			className={style}
			value={value}
			onChange={onChange}
			id={id}
			required={required ? required : ""}
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

export default TextAreaComp;
