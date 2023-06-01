import TimeAgo from "javascript-time-ago"
import en from 'javascript-time-ago/locale/en'
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
    
    /** @type {string} */
    expenseType
    
 

    constructor(name, date, amount, expenseType) {
        this.name = name
        this.date = date
        this.amount = amount
        this.type = expenseType
        this.id = nanoid(6)
    }

    formattedDate() {
        let timeAgo = new TimeAgo('en-US')
        return timeAgo.format(this.date)
    }

    // this is where you could add some currency conversion
    formattedAmount() {
        return `$${this.amount.toFixed(2)}`
    }
    
    formattedType(){
        return `${this.expenseType}`
    }

}

