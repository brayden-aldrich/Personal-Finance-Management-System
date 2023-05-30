import React from 'react';
import ExpenseRow from './ExpenseRow';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Expense } from '../classes/Expense';


const expenses = [
    new Expense("Elmer's", Date.now() - 100000000, 18.33),
    new Expense("Taco Bell", Date.now() - 200000000, 5.99),
    new Expense("DMV", Date.now() - 300000000, 100.00),
    new Expense("Target", Date.now() - 400000000, 56.49),
    new Expense("Safeway", Date.now() - 500000000, 4.39),
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