import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

export default function ExpenseItems(props) {
  const deleteExpense = () => {
    const expenseItem = document.querySelector('.expense-item')
    expenseItem.parentNode.removeChild(expenseItem)
    console.log("Item Deleted Succesfully")
    
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={deleteExpense}>DeleteExpenses</button>
    </div>
  );
}
