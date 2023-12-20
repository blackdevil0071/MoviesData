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
  };

  const [enterdDate, setEnterdDate] = useState("");
  const changeDateHandler = (event) => {
    setEnterdDate(event.target.value);
  };


  const submitHandler = (event) =>{
    event.preventDefault()
    const expenseData = {
      title:enterdTitle,
      amount:enterdAmount,
      date:new Date(enterdAmount)
    }
    console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Expense title:</label>
      <input type="text" onChange={changeTitleHandler} />
      <label>Expense amount:</label>
      <input type="number" onChange={changeAmountHandler} />
      <label>Date:</label>
      <input type="date" onChange={changeDateHandler} />
      <button type="submit">Add Expenses</button>
    </form>
  );
}
