import React from 'react';
import ExpenseRow from './ExpenseRow';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Expense } from '../classes/Expense';

const day = 100000000

const expenses = [
    new Expense("Elmer's", Date.now() - 1 * day, 18.33),
    new Expense("Taco Bell", Date.now() - 2 * day, 5.99),
    new Expense("DMV", Date.now() - 3 * day, 100.00),
    new Expense("Target", Date.now() - 4 * day, 56.49),
    new Expense("Safeway", Date.now() - 5 * day, 4.39),
]

function ExpenseTable() { // function ExpenseTable({expenses})
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Expense</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((row) => (
                        <ExpenseRow expense={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Amount</th>
        //             <th>Date</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {/* <ExpenseRow></ExpenseRow>   <ExpenseRow></ExpenseRow {expenses}> */}
        //     </tbody>
        // </table>
    );
}

export default ExpenseTable;