import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from '../TransactionItem/TransactionItem';

export function TransactionHistory({items}) {
    return (
        <table className={css["transaction-history"]}>
            <thead className={css["transaction-history__head"]}>
                <tr className={css["transaction-history__head-items"]}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
                
            <tbody className={css["transaction-history__body"]}>
                {items.map(({
                        id,
                        type,
                        amount,
                        currency,
                    }) => {
                        return (
                            <TransactionItem
                                key = {id}
                                type = {type}
                                amount = {amount}
                                currency = {currency}
                            />
                        );
                    })}
            </tbody>
        </table>
    );

};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            ]),
        }),
    ),
};