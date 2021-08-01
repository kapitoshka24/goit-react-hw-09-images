import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => (
  <div className="ButtonDiv">
    <button className="Button" type="submit" onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
