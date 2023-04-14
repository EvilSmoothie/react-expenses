import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsHidden, setFormIsHidden] = useState(true);

  const showForm = () => {
    setFormIsHidden(false);
  };

  const hideForm = () => {
    setFormIsHidden(true);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormIsHidden(true)
  };

  return (
    <div className="new-expense">
      {formIsHidden && <button onClick={showForm}>Show Form</button>}
      {!formIsHidden && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancel={hideForm} />
      )}
    </div>
  );
};

export default NewExpense;
