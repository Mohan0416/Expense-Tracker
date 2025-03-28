import React from "react";

function TransactionCards({ income, balance, expense }) {
  return (
    <div className="transaction-cards">
      <div className="balance-card">
        <p>Current Balance</p>
        <h1>₹{balance.toLocaleString()}</h1>
      </div>
      <div className="summary-cards">
        <div className="income-card">
          <p>Total Income</p>
          <h3 className="income">₹{income.toLocaleString()}</h3>
        </div>
        <div className="expense-card">
          <p>Total Expense</p>
          <h3 className="expense">₹{expense.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
}

export default TransactionCards;