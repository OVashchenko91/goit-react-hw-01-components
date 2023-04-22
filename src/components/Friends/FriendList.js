
 

import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({friends}) {
    return (
        <ul className={css.friends}>
            {friends.map(({
                id, avatar, name, isOnline
            }) => {
                return (
                    <FriendListItem 
                        key = {id}
                        name = {name}
                        avatar = {avatar}
                        isOnline = {isOnline}
                    />                 
                );
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
        ]),
    })),
};