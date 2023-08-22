import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    totalAmount: 0,
    totalIncome: 0,
    totalExpenses: 0,
    transactionList: [],
  }

  titleInput = eventTitle => {
    this.setState({title: eventTitle.target.value})
  }

  amountInput = eventAmount => {
    const userInputAmount = eventAmount.target.value
    const convertAmountStringToInt = parseInt(userInputAmount)
    this.setState({amount: convertAmountStringToInt})
  }

  onChangeType = eventType => {
    this.setState({type: eventType.target.value})
  }

  onAddBtn = () => {
    const {title, amount, type} = this.state

    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses + amount,
        totalAmount: prevState.totalAmount - amount,
      }))
    } else if (type === 'INCOME') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome + amount,
        totalAmount: prevState.totalAmount + amount,
      }))
    }

    if (title !== '' && amount !== 0 && type !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        type,
      }

      this.setState(prevState => ({
        title: '',
        amount: '',
        type: 'INCOME',
        transactionList: [...prevState.transactionList, newTransaction],
      }))
    }
  }

  render() {
    const {
      totalAmount,
      totalIncome,
      totalExpenses,
      title,
      amount,
      type,
      transactionList,
    } = this.state

    return (
      <div className="app-container">
        <div className="user-details">
          <h2>HI, Richard</h2>
          <p>
            Welcome back to Your{' '}
            <span className="money-text">Money Manager</span>
          </p>
        </div>
        <div className="money-tracker">
          <MoneyDetails
            classDetails="balance"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            imgText="balance"
            balanceText="Balance"
            balanceAmount={totalAmount.toString()}
            dataTestId="balanceAmount"
          />
          <MoneyDetails
            classDetails="income"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            imgText="income"
            balanceText="Income"
            balanceAmount={totalIncome.toString()}
            dataTestId="incomeAmount"
          />
          <MoneyDetails
            classDetails="expenses"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            imgText="expenses"
            balanceText="Expenses"
            balanceAmount={totalExpenses.toString()}
            dataTestId="expensesAmount"
          />
        </div>
        <div className="transaction-details-history-container">
          <div className="add-transaction-form">
            <h2>Add Transaction</h2>
            <form>
              <label htmlFor="Title">Title</label>
              <br />
              <input
                type="text"
                id="Title"
                name="Title"
                placeholder="Title"
                value={title}
                onChange={this.titleInput}
              />
              <br />
              <label htmlFor="Amount">Amount</label>
              <br />
              <input
                type="text"
                id="Amount"
                name="Amount"
                placeholder="Amount"
                value={amount}
                onChange={this.amountInput}
              />
              <br />
              <label htmlFor="Type">Type</label>
              <br />
              <select
                name="Type"
                id="Type"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    id={each.optionId}
                    key={each.optionId}
                    value={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="button" onClick={this.onAddBtn}>
                Add
              </button>
            </form>
          </div>
          <div className="transaction-History">
            <h2>History</h2>
            <ul className="history-table">
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem each={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
