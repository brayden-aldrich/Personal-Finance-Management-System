import React from "react";
import BudgetTable from "../components/BudgetTable";
//import { useState } from "react";
//import Budget from "../components/Budget";

function BudgetPage() {
  
    return (
      <>
        <h1>Budget</h1>
        <p>Below are all your sub-budgets. To create a new sub-budget, simply click the button that says "New Budget".</p>
        <BudgetTable />
  
      </>
    );
  }
  
  export default BudgetPage;
