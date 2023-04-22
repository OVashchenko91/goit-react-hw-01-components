import PropTypes from 'prop-types';
import css from './ProfileStats.module.css';


export function ProfileStats({stats}) {
  return (
    <ul className={css.stats}>
        {Object.keys(stats).map((key) => {
          return (
              <li key={key} className={css.stats__item}>
                <span className={css.stats__label}>{key}</span>
                <span className={css.stats__quantity}>{stats[key]}</span>
              </li>
            );
          })}
    </ul>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.object,
};