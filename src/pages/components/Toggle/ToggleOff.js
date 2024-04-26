import React from "react";
import PropTypes from "prop-types";
import { ToggleContext } from "./Toggle";

export default function ToggleOff({ children }) {
    const { on } = React.useContext(ToggleContext);

    return on ? null : children;
}

ToggleOff.propTypes = {
    children: PropTypes.node.isRequired,
};
