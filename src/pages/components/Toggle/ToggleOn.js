import React from "react";
import PropTypes from "prop-types"; // Add this import

import { ToggleContext } from "./Toggle";

export default function ToggleOn({ children }) {
    const { on } = React.useContext(ToggleContext);

    return on ? children : null;
}

ToggleOn.propTypes = {
  children: PropTypes.node.isRequired, // Add this prop validation
};
