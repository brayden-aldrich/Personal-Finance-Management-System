import React from 'react';
import ExpenseRow from './ExpenseRow';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { expenses } from '../data/UserData';




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