import React from "react";
//import { useState } from "react";
//import Budget from "../components/Budget";

function BudgetPage() {
    // const [expenseName, setExpenseName] = useState("");
    // const [expenseCost, setExpenseCost] = useState(0);
    // const [expenseDate, setExpenseDate] = useState("");
    // const [budget, setBudget] = useState(null);
  
    // const handleExpenseNameChange = (event) => {
    //   setExpenseName(event.target.value);
    // };
  
    // const handleExpenseCostChange = (event) => {
    //   setExpenseCost(event.target.value);
    // };
  
    // const handleExpenseDateChange = (event) => {         ALSO CHATGPT GUESSES HERE
    //   setExpenseDate(event.target.value);
    // };
  
    // const handleCreateExpense = () => {
    //   if (!budget) {
    //     // Create a new budget object
    //     const newBudget = new Budget("My Budget");
    //     setBudget(newBudget);
    //   }
  
    //   // Insert expense data into the budget object
    //   budget.insertExpenseData(expenseName, expenseCost, expenseDate);
  
    //   // Reset input fields
    //   setExpenseName("");
    //   setExpenseCost(0);
    //   setExpenseDate("");
    // };
  
    // const handleExportToJson = () => {
    //   if (budget) {
    //     // Export expenses to JSON
    //     budget.exportExpensesToJson();
    //   }
    // };
  
    // const handleImportFromJson = () => {
    //   if (budget) {
    //     // Import expenses from JSON (example filename: "mybudget.json")
    //     budget.importExpensesFromJson("mybudget.json");
    //   }
    // };
  
    return (
      <>
        <h1>This is the budget page</h1>

        <p>buttons for the budget options</p>
  
        {/* <input
          type="text"
          value={expenseName}
          onChange={handleExpenseNameChange}
          placeholder="Expense Name"
        />
  
        <input
          type="number"
          value={expenseCost}                   // THIS IS LITERALLY ALL ONE GIANT CHATGPT GUESS
          onChange={handleExpenseCostChange}
          placeholder="Expense Cost"
        />
  
        <input
          type="text"
          value={expenseDate}
          onChange={handleExpenseDateChange}
          placeholder="Expense Date"
        />
  
        <button onClick={handleCreateExpense}>Add Expense</button>
        <button onClick={handleExportToJson}>Export to JSON</button>
        <button onClick={handleImportFromJson}>Import from JSON</button> */}
      </>
    );
  }
  
  export default BudgetPage;
