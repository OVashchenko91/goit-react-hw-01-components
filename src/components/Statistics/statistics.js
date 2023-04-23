import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatisticItems } from './StatisticsItems';

export function Statistics({
    stats,
}) {
    return (
            <ul className={css.stats}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticItems key={id} label={label} percentage={percentage} />
                    );
                })}
            </ul>
    );

}; 

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
        ]),
    }),),
};