// It is used to display a single expense.
import ExpenseItem from "./ExpenseItem";
import { useState, useEffect } from "react";

// ExpenseList component receives two props:
// 1. expenses -> array containing all expenses
// 2. onDeleteExpense -> function to delete an expense
export default function ExpenseList({ expenses, onDeleteExpense }) {

  // Check if there are no expenses in the array.
  if (expenses.length === 0) {
    return (
      <p className="no-expenses">
        No expenses added yet.
      </p>
    );
  }

  // Render the list of expenses.
  return (
    <div className="ExpensList">

      {/* Loop through each expense in the array */}
      {expenses.map((item) => (

        // Render ExpenseItem for every expense
        <ExpenseItem
          // Unique key for React optimization
          key={item.id}

          // Pass expense data to child component
          item={item}

          // Pass delete function to child component
          onDelete={onDeleteExpense}
        />
      ))}

    </div>
  );
}