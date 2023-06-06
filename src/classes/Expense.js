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

    constructor(name, date, amount, budgets) {
        this.name = name
        this.date = date
        this.amount = amount
        this.budgets = budgets
        this.id = nanoid(6)
    }

    formattedDate() {
        let timeAgo = new TimeAgo('en-US')
        return timeAgo.format(this.date * 1000)
    }

    // this is where you could add some currency conversion
    formattedAmount() {
        return `$${this.amount.toFixed(2)}`
    }

}

const _day = 100000000

// This is meant to be abstract; instantiating won't really do anything
export class ExpenseManager {

    // TODO: Delete these demo values
    static expenses = [
        new Expense("Elmer's", DateTime.now().minus(1 * _day).toUnixInteger(), 18.33, []),
        new Expense("Taco Bell", DateTime.now().minus(2 * _day).toUnixInteger(), 5.99, []),
        new Expense("DMV", DateTime.now().minus(9 * _day).toUnixInteger(), 100.00, []),
        new Expense("Target", DateTime.now().minus(10 * _day).toUnixInteger(), 56.49, []),
        new Expense("Safeway", DateTime.now().minus(12 * _day).toUnixInteger(), 4.39, []),
    ]

    static add(...args) {

        // probably not the best way to do this but it helps update the view state
        this.expenses = [...args, ...this.expenses]

    }

    static delete(...expenseIds) {

        console.log("bruh delete")

        this.expenses = this.expenses.filter(exp => !expenseIds.includes(exp.id))

        // for (const expenseId of expenseIds) {
        //     let index = this.expenses.findIndex((val) => val.id === expenseId);
        //     if (index !== -1) {
        //         // Do any events that need to happen here
        //         // Like updating storage or something
        //         console.log("deleting an expense")
        //         this.expenses.splice(index, 1);
        //     }
        // }
    }

}

