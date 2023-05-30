//PLACEHOLDER

// # Author: Daniel Mendes
// # Date:   5/9/23
// # Desc:   This is just a draft of how we could create and operate 
// #         budget objects in the final project. This has basic JSON
// #         file I/O and a general structure for a "Budget" Object

// import json

// class Budget:
//     ##########################################
//     ### BUDGET CLASS DATA MEMBERS
//     ##########################################
//     budgetName = ""
//     expenseArray = []

//     ##########################################
//     ### BUDGET CLASS METHODS
//     ##########################################
    
//     #Constructor just builds the object with 
//     def __init__(self, name: str):
//         self.budgetName = name

//     def insertExpenseData(self, name: str, cost: int, date: str):
//         #First, insert info about the expense into a temp dict
//         expenseDict = {}
//         expenseDict['expense_name'] = name
//         expenseDict['expense_cost'] = cost
//         expenseDict['expense_date'] = date

//         #Then, insert it into the budget object's expense array
//         self.expenseArray.append(expenseDict)

//     #Provides a lowercase, no-space version of the budget name
//     #   Used to create temp filenames
//     def simplifyName(self) -> str:
//         simpleName = self.budgetName.replace(" ","").lower()
//         return simpleName

//     #Exports the expense array to a json file
//     def exportExpensesToJson(self):
//         jsonFileName = self.simplifyName() + ".json"

//         with open("./" + jsonFileName, "w") as f:
//             json.dump(self.expenseArray, f, indent = 4, separators=(",", ": "))

//     #Imports a new expense array from a json file
//     #   Note: Overwrites the previous expense array
//     def importExpensesFromJson(self, filename: str):
//         with open(filename, "r") as f:
//             self.expenseArray = json.load(f)

// export default Budget
