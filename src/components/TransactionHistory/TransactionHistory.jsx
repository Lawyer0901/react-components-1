import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem"

export const TransactionHistory = ({ items }) => {
    return (<>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(el => <TransactionHistoryItem key={ el.id} type={el.type}  amount={el.amount}  currency={el.currency} />)}
  </tbody>
    </>)
}