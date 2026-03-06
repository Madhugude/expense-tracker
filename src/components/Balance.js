/**
 * Balance - Displays your money (e.g. salary), total expenses, and remaining balance
 * balance: money you have added (salary, etc.)
 * remaining = balance - totalExpenses
 */
function Balance({ expenses, balance = 0 }) {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = balance - totalExpenses;

  return (
    <div className="balance-card">
      <div className="balance-label">Your money (saved balance)</div>
      <div className="balance-amount positive">${balance.toFixed(2)}</div>
      <div className="balance-label" style={{ marginTop: '0.75rem' }}>
        Total expenses
      </div>
      <div className="balance-amount negative">${totalExpenses.toFixed(2)}</div>
      <div className="balance-label" style={{ marginTop: '0.75rem' }}>
        Balance remaining
      </div>
      <div
        className={`balance-amount ${remaining >= 0 ? 'positive' : 'negative'}`}
      >
        ${remaining.toFixed(2)}
      </div>
    </div>
  );
}

export default Balance;
