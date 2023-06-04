import React from "react";
import ExpenseTable from "../components/ExpenseTable";
import AddExpenseButton from "../components/AddExpenseModal";
import { ExpenseManager } from "../classes/Expense";

function HomePage() {

    const [expenses, setExpenses] = React.useState(ExpenseManager.expenses);

    const refreshExpenses = () => {
        setExpenses([...ExpenseManager.expenses])
        console.log("updated expenses: ", expenses);
        
    }

    return(
        <>
            <h1>
            This is the home page
            </h1>

            <p>not sure what to put on this page if anything</p>

            <AddExpenseButton refreshParent={refreshExpenses} />

            <br></br>

            <ExpenseTable expenses={expenses} />
        </>
    );
}

export default HomePage;