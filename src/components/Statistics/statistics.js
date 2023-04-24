import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatisticItems } from './StatisticsItems';

export function Statistics({
    stats,
    title
}) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ul className={css.stats}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticItems key={id} label={label} percentage={percentage} />
                    );
                })}
            </ul>
        </div>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
        ]),
    })),
    title: PropTypes.string
};

Statistics.defaultProps = {
    title: ''
};
