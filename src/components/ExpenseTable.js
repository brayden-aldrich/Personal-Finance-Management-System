import React from 'react';
// import ExpenseRow from './ExpenseRow';
import { DataGrid } from '@mui/x-data-grid';
import AddExpenseButton from './AddExpenseModal';
import { ExpenseManager } from '../classes/Expense';
import "./ExpenseTable.scss"
import { Button, Card } from '@mui/material';
import { DateTime } from 'luxon';
import BudgetChip from './BudgetChip';


function ExpenseTable() { // function ExpenseTable({expenses})

    const [selected, setSelected] = React.useState([]);

    const [expenses, setExpenses] = React.useState(ExpenseManager.expenses);

    const refreshExpenses = () => {
        setExpenses([...ExpenseManager.expenses])
        console.log("updated expenses: ", expenses);
    }

    const deleteSelected = () => {
        console.log(ExpenseManager.expenses)
        console.log('deleteing', selected)
        ExpenseManager.delete(...selected)
        refreshExpenses();
    }

    const spendingOver = (days) => {
        let sum = 0
        let longAgo = DateTime.now().toUnixInteger() - (days * 86400)
        ExpenseManager.expenses.forEach((exp) => {
            if (exp.date > longAgo) {
                sum += exp.amount
            }
        })
        return `$${sum.toFixed(2)}`
    }

    const columns = [
        { field: 'name', headerName: 'Expense', width: 200 },
        {
            field: 'budgets', headerName: 'Budget(s)', width: 250,
            renderCell: (params) => (params.value ?? []).map((id) => <BudgetChip id={id} />),
        },
        {
            field: 'date', headerName: 'Date', width: 100,
            valueGetter: (params) => params.row.formattedDate(),
        },
        {
            field: 'amount', headerName: 'Amount', width: 100, type: 'number',
            valueGetter: (params) => params.row.formattedAmount(),
        },
    ]


    return (
        <div className="expense-table">

            <div className="stats">
                <Card variant="outlined">
                    <small>Total Expenses</small>
                    <h2>
                        {expenses.length}
                    </h2>
                </Card>
                <Card variant="outlined">
                    <small>Spending This Month</small>
                    <h2>
                        {spendingOver(30)}
                    </h2>
                </Card>
                <Card variant="outlined">
                    <small>Spending This Week</small>
                    <h2>
                        {spendingOver(7)}
                    </h2>
                </Card>
            </div>

            <div className="toolbar">
                <AddExpenseButton refreshParent={refreshExpenses} />
                <div className='spacer'></div>
                {
                    (selected.length > 0) ?
                        <Button variant="outlined" onClick={deleteSelected} color="error">
                            Delete {selected.length} items
                        </Button> : <></>
                }

            </div>

            <DataGrid
                style={{ height: 450, width: '100%' }}
                columns={columns}
                rows={expenses}

                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 25 },
                    },
                }}
                onRowSelectionModelChange={(newSelected) => {
                    setSelected(newSelected);
                }}
                rowSelectionModel={selected}
                pageSizeOptions={[25, 50]}
                checkboxSelection
            />
        </div>

    );

}

export default ExpenseTable;