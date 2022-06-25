import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEntereTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [showForm, setShowForm] = useState("false");

  const titleChangeHandler = (event) => {
    setEntereTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEntereTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onAddExpense(expenseData);
  };

  const toggleFormHandler = () =>
    setShowForm((prevToggleButton) => !prevToggleButton);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
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
        {!showForm ? (
          <button onClick={toggleFormHandler}>Show form</button>
        ) : (
          <div>
            <button onClick={toggleFormHandler}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
