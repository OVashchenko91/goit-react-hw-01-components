import PropTypes from 'prop-types';
import css from './StatisticsItems.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export function StatisticItems({label, percentage = 0}) {
    return (
        <li className={css.stats__item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.stats__label}>{label}</span>
            <span className={css.stats__percentage}>{percentage}%</span>
        </li>
    );
};

StatisticItems.propTypes = {
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number,
};