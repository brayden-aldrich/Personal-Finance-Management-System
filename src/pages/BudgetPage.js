import React, { useState } from 'react';

function BudgetPage() {
  const [budgetName, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(true);
  const [budgets, setBudgets] = useState([]);

  const handleBudgetNameChange = (e) => {
    setBudgetName(e.target.value);
  };

  const handleBudgetAmountChange = (e) => {
    setBudgetAmount(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setIsMonthly(e.target.value === 'monthly');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBudget = {
      name: budgetName,
      amount: budgetAmount,
      isMonthly: isMonthly
    };

    setBudgets([...budgets, newBudget]);

    setBudgetName('');
    setBudgetAmount('');
  };

  return (
    <div>
      <h1>Create a Budget</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="budgetName">Budget Name:</label>
          <input
            type="text"
            id="budgetName"
            value={budgetName}
            onChange={handleBudgetNameChange}
          />
        </div>
        <div>
          <label htmlFor="budgetAmount">Budget Amount:</label>
          <input
            type="number"
            id="budgetAmount"
            value={budgetAmount}
            onChange={handleBudgetAmountChange}
          />
        </div>
        <div>
          <label htmlFor="period">Period:</label>
          <select id="period" onChange={handlePeriodChange} value={isMonthly ? 'monthly' : 'yearly'}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button type="submit">Create Budget</button>
      </form>

      <h2>Budgets</h2>
      {budgets.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => (
              <tr key={index}>
                <td>{budget.name}</td>
                <td>{budget.amount}</td>
                <td>{budget.isMonthly ? 'Monthly' : 'Yearly'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No budgets created yet.</p>
      )}
    </div>
  );
}

export default BudgetPage;