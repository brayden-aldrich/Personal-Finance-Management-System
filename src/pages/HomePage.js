import React from "react";
import ExpenseTable from "../components/ExpenseTable";
import { Button } from "@mui/material";
import { ExpenseManager } from "../classes/Expense";

function HomePage() {

    return(
        <>
            <h1>
            Expenses
            <Button style={{ 'float': 'right', 'marginTop': '8px'}} onClick={() => ExpenseManager.downloadAsJSON()} variant='outlined'>Export Expenses</Button>
            <a id="downloadAnchorElem" style={{"display":"none"}}></a>
            </h1>

            <br></br>

            <ExpenseTable />
        </>
    );
}

export default HomePage;