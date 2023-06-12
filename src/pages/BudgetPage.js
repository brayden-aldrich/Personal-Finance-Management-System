import React from "react";
import BudgetTable from "../components/BudgetTable";
import { Button } from "@mui/material";
import { BudgetManager } from "../classes/Budget";
//import { useState } from "react";
//import Budget from "../components/Budget";

function BudgetPage() {

  return (
    <>
      <h1>
        Budget
        <Button style={{ 'float': 'right', 'marginTop': '8px' }} onClick={() => BudgetManager.downloadAsJSON()} variant='outlined'>Export Budgets</Button>
        <a id="downloadAnchorElem" style={{ "display": "none" }}></a>
      </h1>
      <p style={{'marginTop': '1rem'}}>Below are all your sub-budgets. To create a new sub-budget, simply click the button that says "New Budget".</p>
      <BudgetTable />

    </>
  );
}

export default BudgetPage;
