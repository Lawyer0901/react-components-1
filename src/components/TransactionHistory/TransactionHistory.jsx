import PropTypes from 'prop-types';
import { TableName } from './TransactionHistory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table>
        <thead>
          <TableName>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableName>
        </thead>
      </table>
      <table>
        <tbody>
          {items.map(el => (
            <TransactionHistoryItem
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.prototype = PropTypes.arrayOf(
  PropTypes.shape({
    items: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  })
);
