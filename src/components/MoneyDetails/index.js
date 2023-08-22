// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {
    classDetails,
    imgUrl,
    imgText,
    balanceText,
    balanceAmount,
    dataTestId,
  } = props
  return (
    <div className={`transaction-container ${classDetails}`}>
      <div className="transaction-image">
        <img src={imgUrl} alt={imgText} />
      </div>
      <div className="transaction-amount-details">
        <p className="balance-name">{`Your ${balanceText}`}</p>
        <p
          className="balance-amount"
          data-testid={dataTestId}
        >{`RS ${balanceAmount}`}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
