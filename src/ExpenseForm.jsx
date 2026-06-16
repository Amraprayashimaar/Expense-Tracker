
import { useState } from "react";

// ExpenseForm component receives a function as prop.
// onAddExpense is used to send new expense data to parent component.
export default function ExpenseForm({ onAddExpense }) {

  // State for expense title.
  // title = current value
  // setTitle = function to update title
  const [title, setTitle] = useState("");

  // State for expense amount.
  const [amount, setAmount] = useState("");

  // Function runs when form is submitted.
  const handleSubmit = (e) => {
    // Prevent page reload after form submission.
    e.preventDefault();

    // Check if title or amount is empty.
    if (!title || !amount) {
      alert("Please enter both title and amount");
      return; // Stop execution if validation fails.
    }

    // Create a new expense object.
    const newExpense = {
      // Generate a unique id using current timestamp.
      id: Date.now(),
      title,
      // Convert amount from string to number.
      // parseFloat allows decimal values like 99.99
      amount: parseFloat(amount),
    };

    // Send new expense data to parent component.
    onAddExpense(newExpense);
    // Clear input fields after submission.
    setTitle("");
    setAmount("");
  };

  return (
    <>
      {/* Form submission calls handleSubmit function */}
      <form id="expense-form" onSubmit={handleSubmit}>

        {/* Input field for expense title */}
        <input
          type="text"
          id="description"
          placeholder="Expense Title"
          // Controlled input value
          value={title}

          // Update title state whenever user types
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Input field for expense amount */}
        <input
          type="number"
          id="amount"
          placeholder="Amount"

          // Controlled input value
          value={amount}

          // Update amount state whenever user types
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Button to submit the form */}
        <button type="submit">
          Add Expense
        </button>

      </form>
    </>
  );
}