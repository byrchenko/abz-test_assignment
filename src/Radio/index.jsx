import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.scss";

/**
 * Radio button component
 *
 * @param selected
 * @param name
 * @param handleSelect
 * @param value
 * @param label
 * @constructor
 */
const Radio = ({selected, name, handleSelect, value, label}) => {
    return (
        <div className={css.index}>
            <label className={css.label}>
                <input
                    className={css.input}
                    type="radio"
                    checked={selected === value}
                    onChange={handleSelect}
                    name={name}
                    value={value}
                />

                <div className={css.radio} />

                <div className={css.value}>
                    {label}
                </div>
            </label>
        </div>
    );
};

Radio.propTypes = {
    selected: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
};

export default Radio;