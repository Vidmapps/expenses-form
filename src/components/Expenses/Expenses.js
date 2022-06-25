import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");
  const filterChangeHandler = (newFilterDate) => {
    setFilterDate(newFilterDate);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterDate={filterDate}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
