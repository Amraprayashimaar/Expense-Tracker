import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  // Initialize state from localStorage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <h3 className="total">
        Expenses:{" "}
        {expenses
          .reduce((total, expense) => total + expense.amount, 0)
          .toFixed(2)}
      </h3>

      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}