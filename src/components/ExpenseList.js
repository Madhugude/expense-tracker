import ExpenseItem from './ExpenseItem';

/**
 * ExpenseList - Renders list of expenses using keys for stable identity
 * Uses conditional rendering to show empty state when no expenses exist
 */
function ExpenseList({ expenses, onDelete }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="empty-state">
        No expenses added yet. Add your first expense above.
      </div>
    );
  }

  return (
    <section>
      <h2 className="expense-list-section-title">Your Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default ExpenseList;
