import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem"

export const TransactionHistory = ({ items }) => {
    return (<>
        <table>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            </table>
<table>
  <tbody>
            {items.map(el => <TransactionHistoryItem key={ el.id} type={el.type}  amount={el.amount}  currency={el.currency} />)}
            </tbody>
            </table>
    </>)
}