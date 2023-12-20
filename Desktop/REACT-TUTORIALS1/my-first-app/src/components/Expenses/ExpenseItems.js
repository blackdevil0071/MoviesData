import React ,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

export default function ExpenseItems(props) {
  
  const [amount,setAmount]=useState(props.amount)


  // const [title,SetTitle]=useState(props.title)
  //Update

  console.log("Expense items Executed")
  const clickHandler =() =>{
    setAmount('100')
    console.log(amount)
    // SetTitle("Updated")
    // console.log(title)
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>changeTitle</button>
    </div>
  );
}
