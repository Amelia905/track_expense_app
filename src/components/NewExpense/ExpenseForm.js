import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
  // 1. method one
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2. method two
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredData: "",
  // });

  const titleChangeHandler = (event) => {
    // 1. method one
    setEnteredTitle(event.target.value); // the value would always be a string

    // 2. method two
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    //   // ... takes an object and pull out all the key value pairs and add them to the new object
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // collect the data input in the form
  const submitHandler = (event) => {
    event.preventDefault(); // prevent sending request and reloading the page.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); // overwrite what the user entered to empty after form is submitted.(clear the form)
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form level_three">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-11-20"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          {/* point a function from different file */}
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
