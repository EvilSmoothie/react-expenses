import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//   **ALTERANTIVE**
// const [userInput, SetUserInput] = useState({
//     enteredtitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // **ALT**
    // SetUserInput((prevState) => {
    //     return {...prevState, enteredtitle: e.target.value};
    // })
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // **ALT**
    // SetUserInput((prevState) => {
    //     return {...prevState, enteredAmount: e.target.value};
    // })
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // **ALT**
    // SetUserInput((prevState)=> {
    //     return {...prevState, enteredAmount: e.target.value}
    // })
  };

const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  

}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__cojntrol">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__cojntrol">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__cojntrol">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
