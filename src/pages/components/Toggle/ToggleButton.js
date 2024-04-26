import React from "react";
import PropTypes from "prop-types";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {
    const { toggle } = React.useContext(ToggleContext);

    return <div onClick={toggle}>{children}</div>;
}

ToggleButton.propTypes = {
    children: PropTypes.node.isRequired,
};
