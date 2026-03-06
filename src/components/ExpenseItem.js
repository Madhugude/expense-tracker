/**
 * ExpenseItem - Displays a single expense with title, date, amount and delete button
 * Receives onDelete callback to remove this expense from the list
 */
function ExpenseItem({ expense, onDelete }) {
  const formattedDate = new Date(expense.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li className="expense-item">
      <div className="expense-item-info">
        <div className="expense-item-title">{expense.title}</div>
        <div className="expense-item-date">{formattedDate}</div>
      </div>
      <div className="expense-item-amount">-${expense.amount.toFixed(2)}</div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(expense.id)}
        aria-label={`Delete ${expense.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;
