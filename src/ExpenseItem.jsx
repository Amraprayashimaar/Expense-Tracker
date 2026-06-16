// ExpenseItem component receives two props:
// 1. item -> contains expense data (id, title, amount)
// 2. onDelete -> function to delete an expense
export default function ExpenseItem({ item, onDelete }) {

  return (
    <div className="ExpenseItem">

      {/* Display expense title */}
      <span>{item.title}</span>

      {/* Display expense amount */}
      <span>{item.amount}</span>

      {/* When clicked, calls onDelete function with the expense id */}
      <button onClick={() => onDelete(item.id)}>
        Delete
      </button>

    </div>
  );
}
