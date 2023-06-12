import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function BudgetPage() {
    const [budget, setBudget] = useState({ amount: 0, name: '' });
    const [expenses, setExpenses] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const budgetData = await importBudget();
        const expenseData = await importExpenses();
  
        setBudget(budgetData);
        setExpenses(expenseData);
      };
  
      fetchData();
    }, []); // Empty dependency array since fetchData doesn't change
  
    const importBudget = async () => {
      // Replace with your logic to import the budget data
      return { amount: 1000, name: 'Monthly Budget' };
    };
  
    const importExpenses = async () => {
      // Replace with your logic to import the expense data
      return [
        { date: '2023-06-01', name: 'Expense 1', amount: 100 },
        { date: '2023-06-02', name: 'Expense 2', amount: 50 },
        { date: '2023-06-03', name: 'Expense 3', amount: 75 },
        { date: '2023-06-04', name: 'Expense 4', amount: 120 },
        { date: '2023-06-05', name: 'Expense 5', amount: 90 },
      ];
    };
  
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    const remainingBudget = budget.amount - totalExpense;

  const chartOptions = {
    chart: {
      id: 'budget-chart',
      stacked: false,
      width: '100%',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: [
      {
        title: {
          text: 'Amount Spent',
        },
      },
    ],
  };

  const chartSeries = [
    {
      name: 'Amount Spent',
      type: 'bar',
      data: expenses.map(expense => ({
        x: new Date(expense.date).getTime(),
        y: expense.amount,
      })),
    },
    {
      name: 'Allowed Budget',
      type: 'line',
      data: expenses.length > 0
        ? [
            {
              x: new Date(expenses[0].date).getTime(),
              y: budget.amount,
            },
            {
              x: new Date(expenses[expenses.length - 1].date).getTime(),
              y: budget.amount,
            },
          ]
        : [],
    },
  ];

  return (
    <div>
      <h1>Balance</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '800px' }}>
          <Chart options={chartOptions} series={chartSeries} type="line" height={500} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '800px' }}>
          <h3>Remaining Budget: {remainingBudget}</h3>
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;