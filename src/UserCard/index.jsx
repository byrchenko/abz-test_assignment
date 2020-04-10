import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.scss";
import MockImage from "./user.png";
import NoImage from "../_svg/noavatar.svg";

/**
 * User card component
 *
 * @param image
 * @param name
 * @param position
 * @param email
 * @param phone
 * @returns {*}
 * @constructor
 */
const UserCard = (
    {
        image,
        name,
        position,
        email,
        phone
    }
) => {
    const [imageError, setImageError] = React.useState(false);

    return (
        <div className={css.index}>
            <div className={css.image}>
                <img
                    src={imageError ? NoImage : image}
                    alt={name}
                    onError={() => setImageError(true)}
                />
            </div>

            <h3 className={css.name}>
                {name}
            </h3>

            <div className={css.field}>
                {position}
            </div>

            <div className={css.email}>
                {email}
            </div>

            <div className={css.field}>
                {phone}
            </div>
        </div>
    );
};

UserCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
};

UserCard.defaultProps = {
    image: MockImage,
    name: "No data",
    position: "No data",
    email: "No data",
    phone: "No data",
};

export default UserCard;