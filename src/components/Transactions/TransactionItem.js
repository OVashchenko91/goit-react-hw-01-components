import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';


export function TransactionItem({
    type,
    amount,
    currency,
}) {
    return (
        <tr className={css["transaction-history__item"]}>
            <td className={css["transaction-history__type"]}>{type}</td>
            <td className={css["transaction-history__amount"]}>{amount}</td>
            <td className={css["transaction-history__currency"]}>{currency}</td>
        </tr>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    currency: PropTypes.string.isRequired,
}