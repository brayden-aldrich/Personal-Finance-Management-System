import { DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material"

function ExpenseRow({
    expense, deleteExpense }) {
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
                <ButtonGroup>
                    <Button onClick={() => deleteExpense(expense.id)} color="error"><DeleteOutline /></Button>
                    <Button><EditOutlined /></Button>
                </ButtonGroup>
            </TableCell>


        </TableRow>
    )
}

export default ExpenseRow