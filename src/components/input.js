import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    const { value, styleClass, onChangeFunc, isWrapped, wrapperStyleClass, inputType, placeholder } = props;
    return (
        <>
            {isWrapped ? 
            <div className={wrapperStyleClass}>
                <input
                    type={inputType}
                    value={value}
                    onChange={onChangeFunc}
                    className={styleClass}
                    placeholder={placeholder}
                />
            </div> :
            <input
                type={inputType}
                value={value}
                onChange={onChangeFunc}
                className={styleClass}
                placeholder={placeholder}
            />}
        </>
    )
}

Input.propTypes = {
    onChangeFunc: PropTypes.func.isRequired,
    isWrapped: PropTypes.bool.isRequired,
    inputType: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styleClass: PropTypes.string,
    wrapperStyleClass: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;