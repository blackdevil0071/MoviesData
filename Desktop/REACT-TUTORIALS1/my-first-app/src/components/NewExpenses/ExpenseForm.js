import React from "react";
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
const changeHandler = (event) =>{
  console.log(event.target.value)
}
  return (
    <form onChange={changeHandler}>
      <label>Expense title:</label>
      <input type="text"></input>
      <label>Expense amount:</label>
      <input type="number" />
      <label>Date:</label>
      <input type="date" />
      <button >Add Expenses</button>
    </form>
  );
}
