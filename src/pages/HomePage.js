import React from "react";
import { useState } from "react";
import { expenses } from "../data/UserData";
import ExpenseTable from "../components/ExpenseTable";
import Piechart from "../components/Piechart";
import { TypeExpense } from "../classes/TypeExpense";

// get each unique type from the expenses
let tSet = new Set(expenses.map((e) => e.type))
let typeArray = []
// create a new TypeExpense object out of the set
for(const type of tSet){
    typeArray.push(new TypeExpense(type))
}

// add each expense object into the correct TypeExpense expensesArray
for(var i = 0; i < typeArray.length; i++){
    let x = expenses.filter(e =>  {
        if (e.type === typeArray[i].type){
            return e
        }
    })
    x.map(e => {
        typeArray[i].addExpense(e)
    })
}



function HomePage() {
    // set up piechart data
    const [chartData, setChartData] = useState({
        labels: typeArray.map((e) => e.type),
        datasets: [
            {
                label: "Expenses",
                data: typeArray.map((e) => e.getTypeTotal()),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })
    return(
        <>
            <h1>
            This is the home page
            </h1>

            <p>not sure what to put on this page if anything</p>

            <br></br>

            <ExpenseTable />
            <Piechart chartData={chartData}/>
        </>
    );
}

export default HomePage;