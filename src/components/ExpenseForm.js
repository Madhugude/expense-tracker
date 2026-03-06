import { useState } from 'react';

/**
 * ExpenseForm - Controlled form to add a new expense
 * Uses useState for title, amount, and date inputs
 * Calls onAdd with expense object when form is submitted
 */
function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const amountNum = parseFloat(amount);

    if (!trimmedTitle || isNaN(amountNum) || amountNum <= 0 || !date) {
      return;
    }

    onAdd({
      id: crypto.randomUUID?.() ?? Date.now().toString(),
      title: trimmedTitle,
      amount: amountNum,
      date,
    });

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add New Expense</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expense-title">Title</label>
          <input
            id="expense-title"
            type="text"
            placeholder="e.g. Groceries"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense-amount">Amount</label>
          <input
            id="expense-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
