import PropTypes from "prop-types";

const NoHighLightMenuComp = ({ children, open }) => {
	console.log(open);
	return <div className={open ? " animate-fadeIn transition-all duration-500 ease-in-out" : "animate-fadeOut delay-500 collapse h-0"}>{children}</div>;
};

export default NoHighLightMenuComp;

NoHighLightMenuComp.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool,
};
