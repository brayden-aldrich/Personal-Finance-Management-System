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

    constructor(name, date, amount) {
        this.name = name
        this.date = date
        this.amount = amount
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
        new Expense("Elmer's", DateTime.now().minus(1 * _day).toUnixInteger(), 18.33),
        new Expense("Taco Bell", DateTime.now().minus(2 * _day).toUnixInteger(), 5.99),
        new Expense("DMV", DateTime.now().minus(3 * _day).toUnixInteger(), 100.00),
        new Expense("Target", DateTime.now().minus(4 * _day).toUnixInteger(), 56.49),
        new Expense("Safeway", DateTime.now().minus(5 * _day).toUnixInteger(), 4.39),
    ]

    static add(...args) {
        for (const arg of args) {
            console.log("Adding Expense: ", args)
            // Check for duplicates or something here
            this.expenses.push(arg)
        }
    }

}

