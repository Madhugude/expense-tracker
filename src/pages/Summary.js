import Balance from '../components/Balance';

/**
 * Summary page - Shows your money, total expenses and balance remaining
 */
function Summary({ expenses, balance }) {
  return (
    <>
      <h1 className="page-title">Summary</h1>
      <Balance expenses={expenses} balance={balance} />
    </>
  );
}

export default Summary;
