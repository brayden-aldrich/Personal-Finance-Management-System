import { TableCell, TableRow } from "@mui/material"

function ExpenseRow({
    expense }) {
    return (
        <TableRow
            key={expense.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {expense.name}
            </TableCell>
            <TableCell align="right">
                {expense.formattedDate()}
                </TableCell>
            <TableCell align="right">
                {expense.formattedAmount()}
                </TableCell>
            <TableCell align="right">

            </TableCell>


        </TableRow>
    )
}

export default ExpenseRow