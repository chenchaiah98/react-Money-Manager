// Write your code here
import './index.css'

const TransactionItem = prop => {
  const {each, deleteTransaction} = prop
  const {title, amount, type, id} = each

  const onDelete = () => {
    deleteTransaction(id, type, amount)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" className="delete-button">
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          data-testid="delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default TransactionItem
