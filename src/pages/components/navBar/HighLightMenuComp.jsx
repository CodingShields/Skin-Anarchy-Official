import PropTypes from "prop-types";

const HighLightMenuComp = ({ children, open }) => {
	console.log(open);
	return <div className={open ? " animate-fadeIn" : "delay-500 animate-fadeOut collapse h-0"}>{children}</div>;
};

export default HighLightMenuComp;

HighLightMenuComp.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool,
};
