import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';

const STORAGE_KEY_EXPENSES = 'expense-tracker-expenses';
const STORAGE_KEY_BALANCE = 'expense-tracker-balance';

/**
 * Load expenses from LocalStorage; return empty array if invalid or missing
 */
function loadExpenses() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_EXPENSES);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Load saved balance from LocalStorage; return 0 if invalid or missing
 */
function loadBalance() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_BALANCE);
    if (stored == null) return 0;
    const parsed = parseFloat(stored);
    return Number.isFinite(parsed) ? parsed : 0;
  } catch {
    return 0;
  }
}

/**
 * Main App component - sets up routing, navigation, and global expense state
 * Uses useEffect to load expenses from LocalStorage on mount and save when expenses change
 */
function App() {
  // Lazy initial state: load from LocalStorage once on first render
  const [expenses, setExpenses] = useState(() => loadExpenses());
  const [balance, setBalance] = useState(() => loadBalance());

  // Persist expenses and balance to LocalStorage when they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_EXPENSES, JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_BALANCE, String(balance));
  }, [balance]);

  return (
    <div className="app">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/summary"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Summary
        </NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home expenses={expenses} setExpenses={setExpenses} balance={balance} setBalance={setBalance} />} />
          <Route path="/summary" element={<Summary expenses={expenses} balance={balance} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
