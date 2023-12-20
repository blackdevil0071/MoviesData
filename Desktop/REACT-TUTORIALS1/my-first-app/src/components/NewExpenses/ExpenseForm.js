import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const changeTitleHandler = (event) => {
    setEnterdTitle(event.target.value);
    console.log(enterdTitle); // Note: You may not see the updated value immediately
  };

  const [enterdAmount, setEnterdAmount] = useState("");
  const changeAmountHandler = (event) => {
    setEnterdAmount(event.target.value);
    console.log(enterdAmount); // Note: You may not see the updated value immediately
  };

  const [enterdDate, setEnterdDate] = useState("");
  const changeDateHandler = (event) => {
    setEnterdDate(event.target.value);
    console.log(enterdDate); // Note: You may not see the updated value immediately
  };

  return (
    <form>
      <label>Expense title:</label>
      <input type="text" onChange={changeTitleHandler} />
      <label>Expense amount:</label>
      <input type="number" onChange={changeAmountHandler} />
      <label>Date:</label>
      <input type="date" onChange={changeDateHandler} />
      <button>Add Expenses</button>
    </form>
  );
}
