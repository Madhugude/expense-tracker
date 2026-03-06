import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Balance from '../components/Balance';
import AddMoneyForm from '../components/AddMoneyForm';

/**
 * Home page - Expense Tracker main view
 * Allows adding money (salary), adding/deleting expenses, and shows list + balance
 */
function Home({ expenses, setExpenses, balance, setBalance }) {
  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleAddMoney = (amount) => {
    setBalance((prev) => prev + amount);
  };

  return (
    <>
      <h1 className="page-title">Expense Tracker</h1>

      <AddMoneyForm onAdd={handleAddMoney} />

      <ExpenseForm onAdd={handleAddExpense} />

      <Balance expenses={expenses} balance={balance} />

      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </>
  );
}

export default Home;
