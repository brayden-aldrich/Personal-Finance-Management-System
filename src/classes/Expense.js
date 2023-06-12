import TimeAgo from "javascript-time-ago"
import en from 'javascript-time-ago/locale/en'
import { DateTime } from "luxon"
import { nanoid } from "nanoid"
TimeAgo.addDefaultLocale(en)

export class Expense {
    /** @type {string} */
    id

    /** @type {string} */
    name

    /** @type {number} */
    date

    /** @type {number} */
    amount

    /** @type {string[]} */
    budgets

    constructor(name, date, amount, budgets, id = nanoid(6)) {
        this.name = name
        this.date = date
        this.amount = amount
        this.budgets = budgets
        this.id = id
    }

    formattedDate() {
        let timeAgo = new TimeAgo('en-US')
        return timeAgo.format(this.date * 1000)
    }

    // this is where you could add some currency conversion
    formattedAmount() {
        return `$${this.amount.toFixed(2)}`
    }

    static fromJsonObj(json) {
        return new Expense(json.name, json.date, json.amount, json.budgets, json.id)
    }

    asJsonObj() {
        return {
            name: this.name,
            id: this.id,
            date: this.date,
            amount: this.amount,
            budgets: this.budgets,
        }
    }

}

const _day = 100000000
const _demoExpenses = [
    new Expense("Elmer's", DateTime.now().minus(1 * _day).toUnixInteger(), 18.33, ["demo_budget_2"]),
    new Expense("Taco Bell", DateTime.now().minus(2 * _day).toUnixInteger(), 5.99, ["demo_budget_2"]),
    new Expense("DMV", DateTime.now().minus(9 * _day).toUnixInteger(), 100.00, []),
    new Expense("Hulu", DateTime.now().minus(9 * _day).toUnixInteger(), 5.00, ["demo_budget_4"]),
    new Expense("Target", DateTime.now().minus(10 * _day).toUnixInteger(), 56.49, ["demo_budget_1"]),
    new Expense("Safeway", DateTime.now().minus(12 * _day).toUnixInteger(), 4.39, ["demo_budget_1"]),
]

// This is meant to be abstract; instantiating won't really do anything
export class ExpenseManager {

    // TODO: Delete these demo values
    static expenses = []

    static save() {
        localStorage.setItem("expenses", JSON.stringify(this.expenses.map(e => e.asJsonObj())))
    }

    static initFromStorage() {
        let json = localStorage.getItem("expenses")
        this.expenses = json ? JSON.parse(json).map(e => Expense.fromJsonObj(e)) : _demoExpenses
    }

    static add(...expenses) {
        // definitely not the best way to do this but it helps update the view state
        this.expenses = [...this.expenses, ...expenses]
        // Save
        this.save()
    }

    static delete(...expenseIds) {
        this.expenses = this.expenses.filter(exp => !expenseIds.includes(exp.id))
        // Save
        this.save()
    }
}

