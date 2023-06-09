// PLACEHOLDER

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

//import json

const fs = require("fs");

export class Budget {
//  ##########################################
//  ### BUDGET CLASS DATA MEMBERS
//  ##########################################
    /** @type {string} */
    name

    /** @type {Array} */
    expenseArray

//  ##########################################
//  ### BUDGET CLASS METHODS
//  ##########################################
    
//  #Constructor just builds the object with 
    constructor(name) {
        this.name = name
        this.expenseArray = []
    }

    insertExpenseData(name, date, amount){
        // #First, insert info about the expense into a temp dict
        var newExpense = Expense(name, date, amount)

        // #Then, insert it into the budget object's expense array
        self.expenseArray.append(newExpense)
    }

    // #Provides a lowercase, no-space version of the budget name
    // #   Used to create temp filenames
    simplifyName(){
        simpleName = self.budgetName.replace(" ","").lower()
        return simpleName
    }

    // #Exports the expense array to a json file
    exportExpensesToJson(){
        jsonFileName = self.simplifyName() + ".json"

        var data = JSON.stringify(this.expenseArray)
        fs.writeFile(jsonFileName, data, (error) => {
            if(error){
                console.error(error)
                throw error
            }
        })
    }

    // #Imports a new expense array from a json file
    // #   Note: Overwrites the previous expense array
    importExpensesFromJson(filename){
        fs.readFile(filename, (error, data) => {
            if(error){
                console.error(error)
                throw error
            }
            this.expenseArray = JSON.parse(data)
        })
    }

}
//export default Budget