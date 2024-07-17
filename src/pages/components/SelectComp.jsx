import PropTypes from "prop-types";

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

export default SelectComp;
