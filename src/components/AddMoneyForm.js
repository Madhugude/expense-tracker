import { useState } from 'react';

/**
 * AddMoneyForm - Form to add money to your balance (e.g. when you get salary)
 * Calls onAdd with the amount to add; parent adds it to the saved balance
 */
function AddMoneyForm({ onAdd }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!Number.isFinite(value) || value <= 0) return;
    onAdd(value);
    setAmount('');
  };

  return (
    <form className="add-money-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add money to balance</h2>
      <p className="add-money-hint">Add your salary or any income to update your available balance.</p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="add-amount">Amount</label>
          <input
            id="add-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group form-group-button">
          <label>&nbsp;</label>
          <button type="submit" className="btn btn-primary btn-add-money">
            Add to balance
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddMoneyForm;
