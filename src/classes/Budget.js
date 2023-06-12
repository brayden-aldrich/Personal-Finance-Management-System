// PLACEHOLDER

import { Commute, Home, LocalActivity, LocalGroceryStore, Payments, Restaurant } from "@mui/icons-material";
import { nanoid } from "nanoid";

// Author: Daniel Mendes
// Date:   5/9/23
// Desc:   This is just a draft of how we could create and operate
//         budget objects in the final project. This has basic JSON
//         file I/O and a general structure for a "Budget" Object

// Editor:  Ethan Nixon
// Date:    6/1/23
// Desc:    I think this was in python originally (you can check the
//          version history if you want to see) and I think it's now
//          properly translated to js.

// Editor:  Escher Wright-Dykhouse
// Date:    6/6/23
// Desc:    I've edited this to work with the expense system, as well
//          as added some UI features like description and icon.
//          Also removed fs stuff; thats only a node feature

//import json

// const fs = require("fs");

export const BudgetTimePeriods = {
    "weekly": 604800,
    "monthly": 2628000,
    "annual": 31540000,
}

class BudgetIcon {
    color
    icon
    constructor(color, icon) {
        this.color = color;
        this.icon = icon;
    }
}

export const BudgetIcons = {
    "food": new BudgetIcon("#F44336", <Restaurant />),
    "entertainment": new BudgetIcon("#9C27B0", <LocalActivity />),
    "grocery": new BudgetIcon("#2196F3", <LocalGroceryStore />),
    "home": new BudgetIcon("#4CAF50", <Home />),
    "transportation": new BudgetIcon("#FFC107", <Commute />),
    "generic": new BudgetIcon("#455A64", <Payments />),
}

export class Budget {
    //  ##########################################
    //  ### BUDGET CLASS DATA MEMBERS
    //  ##########################################
    /** @type {string} */
    name

    // /** @type {Array} */
    // expenseArray

    /** @type {string} */
    id;

    /** @type {string} */
    description;

    /** @type {"weekly" | "monthly" | "annual"} */
    timePeriod;

    /** @type {"food" | "entertainment" | "grocery" | "home" | "transportation" | "generic"} */
    icon;

    /** @type {number} */
    amount;

    //  ##########################################
    //  ### BUDGET CLASS METHODS
    //  ##########################################

    //  #Constructor just builds the object with 
    constructor(name, desc, amount, timePeriod, icon, id = nanoid(6)) {
        this.name = name
        this.amount = amount
        // this.expenseArray = []
        this.description = desc
        this.timePeriod = timePeriod
        this.icon = icon
        this.id = id
    }

    static fromJsonObj(json) {
        return new Budget(json.name, json.description, json.amount, json.timePeriod, json.icon, json.id)
    }

    asJsonObj() {
        return {
            name: this.name,
            id: this.id,
            description: this.description,
            timePeriod: this.timePeriod,
            icon: this.icon,
            amount: this.amount
        }
    }

    // insertExpenseData(name, date, amount) {
    //     // #First, insert info about the expense into a temp dict
    //     var newExpense = Expense(name, date, amount)

    //     // #Then, insert it into the budget object's expense array
    //     self.expenseArray.append(newExpense)
    // }

    // #Provides a lowercase, no-space version of the budget name
    // #   Used to create temp filenames
    // simplifyName() {
    //     simpleName = self.budgetName.replace(" ", "").lower()
    //     return simpleName
    // }

    // #Exports the expense array to a json file
    // exportExpensesToJson() {
    //     let jsonFileName = this.simplifyName() + ".json"

    //     var data = JSON.stringify(this.expenseArray)
    //     // fs.writeFile(jsonFileName, data, (error) => {
    //     //     if (error) {
    //     //         console.error(error)
    //     //         throw error
    //     //     }
    //     // })
    // }

    // #Imports a new expense array from a json file
    // #   Note: Overwrites the previous expense array
    // importExpensesFromJson(filename) {
    //     // fs.readFile(filename, (error, data) => {
    //     //     if (error) {
    //     //         console.error(error)
    //     //         throw error
    //     //     }
    //     //     this.expenseArray = JSON.parse(data)
    //     // })
    // }

}

const _demoBudgets = [
    new Budget("Grocery", "This is my grocery budget!", 100, "monthly", "grocery", "demo_budget_1"),
    new Budget("Eating Out", "Money set aside for going to restaurants each month", 250, "monthly", "food", "demo_budget_2"),
    new Budget("Transportation", "Bus fare and gas", 60, "monthly", "transportation", "demo_budget_3"),
    new Budget("Entertainment", "Money set aside for things like movies, books, music.", 45, "weekly", "entertainment", "demo_budget_4")
]

export class BudgetManager {

    /** @type {Budget[]} */
    static budgets = []

    static initFromStorage() {
        let json = localStorage.getItem("budgets")
        this.budgets = json ? JSON.parse(json).map(b => Budget.fromJsonObj(b)) : _demoBudgets
    }

    static save() {
        localStorage.setItem("budgets", JSON.stringify(this.budgets.map(b => b.asJsonObj())))
    }

    static fromId(id) {
        return this.budgets.find(b => b.id === id)
    }

    static add(...budgets) {
        this.budgets = [...this.budgets, ...budgets]
        // Save data
        this.save()
    }

    static delete(...ids) {
        this.budgets = this.budgets.filter(exp => !ids.includes(exp.id))
        // Save data
        this.save()
    }

    static downloadAsJSON() {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.budgets.map(exp => exp.asJsonObj())));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "budgets.json");
        dlAnchorElem.click();
    }
}
