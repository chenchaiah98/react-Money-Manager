// Write your code here
import './index.css'

const TransactionItem = prop => {
  const {each} = prop
  const {title, amount, type} = each

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
        />
      </button>
    </li>
  )
}

export default TransactionItem
