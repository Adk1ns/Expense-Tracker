import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/Expense";
import NewExpense from "./Components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Credit Card Payment",
    amount: 94.11,
    date: new Date(2020, 8, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 4, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 295,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Desk & Chairs",
    amount: 650,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Bicycle",
    amount: 350,
    date: new Date(2021, 6, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
