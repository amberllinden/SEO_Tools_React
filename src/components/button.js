import React from "react";
import PropTypes from "prop-types";

const Button = props => {
    const { content, styleClass, onClickFuntion } = props;
    return (
        <button
            className={styleClass}
            onClick={onClickFuntion}
        >
            {content}
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    onClickFuntion: PropTypes.func.isRequired,
    styleClass: PropTypes.string,
};

export default Button;
