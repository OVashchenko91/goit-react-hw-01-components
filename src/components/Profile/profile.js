import PropTypes from 'prop-types';
import css from './profile.module.css';
import { ProfileStats } from './ProfileStats';

export function Profile({ 
    username = 'Anonymous', 
    tag, 
    location, 
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats}) {

    return (
    <>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ProfileStats stats={stats}/>
    </>
    );
  };


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};