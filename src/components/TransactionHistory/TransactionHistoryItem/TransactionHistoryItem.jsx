import PropTypes from 'prop-types';
import { TableName } from '../TransactionHistory.styled';
export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableName>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableName>
  );
};

TransactionHistoryItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
