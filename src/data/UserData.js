import { TypeExpense } from '../classes/TypeExpense';
import { Expense } from '../classes/Expense';


export const expenses = [
    new Expense("Elmer's", Date.now() - 100000000, 18.33, 'Food'),
    new Expense("Taco Bell", Date.now() - 200000000, 5.99, 'Food'),
    new Expense("DMV", Date.now() - 300000000, 100.00, 'Vehicle'),
    new Expense("Target", Date.now() - 400000000, 56.49, 'Groceries'),
    new Expense("Safeway", Date.now() - 500000000, 4.39, 'Vehicle'),
]
