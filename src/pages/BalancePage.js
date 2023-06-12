import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { BudgetManager } from '../classes/Budget';
import { ExpenseManager } from '../classes/Expense';
import { DateTime } from 'luxon';
import BudgetChip from '../components/BudgetChip';

function BudgetPage() {
  const [budget, setBudget] = useState({ amount: 0, name: '' });
  const [expenses, setExpenses] = useState([]);

  let budgetId = window.location.hash.replace("#", "") ?? BudgetManager.budgets[0].id
  let budgetObj = BudgetManager.fromId(budgetId) ?? BudgetManager.budgets[0]

  useEffect(() => {
    const fetchData = async () => {
      const budgetData = await importBudget();
      const expenseData = await importExpenses();

      console.log(budgetData, expenseData)

      setBudget(budgetData);
      setExpenses(expenseData);
    };

    fetchData();
  }, []); // Empty dependency array since fetchData doesn't change

  const importBudget = async () => {
    // Replace with your logic to import the budget data
    // return { amount: 1000, name: 'Monthly Budget' };
    return { amount: budgetObj.amount, name: budgetObj.name };
  };

  const importExpenses = async () => {
    // Replace with your logic to import the expense data
    console.log(budgetObj.id, ExpenseManager.additiveRange(budgetObj.id))
    return ExpenseManager.additiveRange(budgetObj.id).map(e => ({
      date: e.date * 1000,
      name: e.name,
      amount: e.amount,
    }))
    // return [
    //   { date: '2023-06-01', name: 'Expense 1', amount: 100 },
    //   { date: '2023-06-02', name: 'Expense 2', amount: 50 },
    //   { date: '2023-06-03', name: 'Expense 3', amount: 75 },
    //   { date: '2023-06-04', name: 'Expense 4', amount: 120 },
    //   { date: '2023-06-05', name: 'Expense 5', amount: 90 },
    // ];
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = Math.max(0, budget.amount - totalExpense)

  const periodStart = () => {
    return DateTime.now().startOf({
      'weekly':'week',
      'monthly': 'month',
      'annual': 'year'
    }[budgetObj.timePeriod]).toFormat('LLLL dd')
  }

  const periodEnd = () => {
    return DateTime.now().endOf({
      'weekly':'week',
      'monthly': 'month',
      'annual': 'year'
    }[budgetObj.timePeriod]).toFormat('LLLL dd')
  }

  const chartOptions = {
    chart: {
      id: 'budget-chart',
      stacked: false,
      width: '100%',
    },
    stroke: {
      curve: 'straight',
      dashArray: [0, 8]
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: [
      {
        title: {
          text: 'Amount Spent',
        },
        labels: {
          formatter: function (val) {
            return `$${val.toFixed(0)}`
          }
        }
      },
    ],
  };

  const chartSeries = [
    {
      name: 'Amount Spent',
      type: 'area',
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
      <h3 style={{ float: 'right', marginTop: '16px', display: 'inline-block' }}>Remaining Budget: ${remainingBudget.toFixed(2)}</h3>
      <h1 style={{ marginBottom: '8px' }}>Balance <BudgetChip id={budgetObj.id} /></h1>

      <span>For current period: {periodStart()} - {periodEnd()} ({budgetObj.timePeriod})</span>

      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '800px' }}>
          <Chart options={chartOptions} series={chartSeries} type="line" height={500} />
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;