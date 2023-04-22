import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export function FriendListItem({
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", 
    name = "Anonymous", 
    isOnline = false}) {
    return (
        <li className={css.friends__item}>
            <span className={clsx(css.friends__status, {[css["is-online"]]:isOnline,})}></span>
            <img className={css.friends__avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.friends__name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
};