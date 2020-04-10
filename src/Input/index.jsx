import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.scss";
import uniqid from "uniqid";

/**
 * Show message
 *
 * @param error
 * @returns {null|*}
 */
function renderMessage(error, message) {
    if (!message) {
        return null
    }

    if (error) {
        return (
            <div className={css.msg}>
                <span className={css.warn}>
                    {message}
                </span>
            </div>
        )
    }

    return (
        <div className={css.msg}>
            {message}
        </div>
    )
}

function defineClass(error, isDisabled) {
    if (error) {
        return css.error;
    }

    else if (isDisabled) {
        return css.disabled;
    }

    else {
        return css.index;
    }
}

/**
 * Input component
 *
 * @param name
 * @param type
 * @param isDisabled
 * @param placeholder
 * @param label
 * @param value
 * @param changeValue
 * @param error
 * @param message
 * @returns {*}
 * @constructor
 */
const Input = (
    {
        name,
        type,
        isDisabled,
        placeholder,
        label,
        value,
        changeValue,
        error,
        message
    }
) => {
    const id = uniqid();

    return (
        <div className={defineClass(error, isDisabled)}>
            <label htmlFor={id}>
                {label}
            </label>

            <input
                id={id}
                type={type}
                name={name}
                disabled={isDisabled}
                placeholder={placeholder}
                value={value}
                onChange={changeValue}
            />

            {renderMessage(error, message)}
        </div>
    );
};

/**
 *
 */
Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    changeValue: PropTypes.func,
    error: PropTypes.bool,
    message: PropTypes.string
};

/**
 *
 */
Input.defaultProps = {
    name: "",
    type: "text",
    isDisabled: false,
    placeholder: "",
    error: false,
};

export default Input;