import { useState, React } from "react";
import "../Styles/AddTransaction.css";

const AddTransaction = () => {
  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitForm = () => {
    console.log(type, amount, category, description, date);
    if(!amount||!category||!description||!date){
        return alert("Please fill all the details");
    }

    const existingTransaction = JSON.parse(localStorage.getItem("transactions"))||[];
    
    const currentTransaction = {
      type: type,
      amount: parseFloat(amount),
      category: category, 
      description: description,
      date: date,
    };

    const newTransaction = [...existingTransaction,currentTransaction]
    localStorage.setItem("transactions", JSON.stringify(newTransaction));
    alert("Transaction added successfully");
    setDescription("");
    setAmount("");
    setCategory("");    
    setDate("");
  };

  return (
    <div className="add-transaction-container">
      <h2>Add Transaction</h2>
      <div className="transaction-box">
        <div className="transaction-type">
          <label>
            <input
              type="radio"
              checked={type === "Expense"}
              value="Expense"
              onChange={() => setType("Expense")}
            /> Expense </label>
          <label>
            <input
              type="radio"
              checked={type === "Income"}
              value="Income"
              onChange={() => setType("Income")}
            /> Income </label>
        </div>
        <input
          type="number"
          value={amount}
          placeholder="Amount (₹)"
          onChange={(e) => setAmount(e.target.value)}
        />
    
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Salary">Salary</option>
          <option value="Groceries">Groceries</option>
          <option value="Dining">Dining</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <button onClick={submitForm}>Add Transaction</button>
      </div>
    </div>
  );
};

export default AddTransaction;
