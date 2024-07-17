
import PropTypes from 'prop-types';
const InputComp = (props) => {

    const { type, placeholder, style, onChange, required, id, autoComplete, value } = props;

    return (
        <input  value={value} autoComplete={autoComplete} id={id} required={required ? required : ""} type={type} placeholder={placeholder} className={style} onChange={onChange} />
    );
}

InputComp.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    value: PropTypes.string
}

export default InputComp