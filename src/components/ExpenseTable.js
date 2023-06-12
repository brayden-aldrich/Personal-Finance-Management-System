import React from 'react';
// import ExpenseRow from './ExpenseRow';
import { DataGrid } from '@mui/x-data-grid';
import AddExpenseButton from './AddExpenseModal';
import { ExpenseManager } from '../classes/Expense';
import "./ExpenseTable.scss"
import { Button, Card, Chip } from '@mui/material';
import { DateTime } from 'luxon';
import BudgetChip from './BudgetChip';
import { BudgetManager } from '../classes/Budget';


function ExpenseTable() { // function ExpenseTable({expenses})

    const [selected, setSelected] = React.useState([]);

    const [expenses, setExpenses] = React.useState(ExpenseManager.expenses);

    // Use the hash of the url to quickly filter a budget
    const [filter, setFilter] = React.useState((window.location.hash ?? "") !== "" ? window.location.hash.substring(1) : 'all');

    // setFilter();

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

    const filteredExpenses = () => {
        if (filter === 'all') return ExpenseManager.expenses

        return ExpenseManager.expenses.filter(exp => exp.budgets.includes(filter))
    }

    const spendingOver = (period) => {
        let sum = 0
        let longAgo = DateTime.now().startOf(period).toUnixInteger()
        filteredExpenses().forEach((exp) => {
            if (exp.date > longAgo) {
                sum += exp.amount
            }
        })
        return `$${sum.toFixed(2)}`
    }

    const columns = [
        { field: 'name', headerName: 'Expense', width: 200 },
        {
            field: 'budgets', headerName: 'Budget(s)', width: 300,
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
                        {filteredExpenses().length}
                    </h2>
                </Card>
                <Card variant="outlined">
                    <small>Spending This Month</small>
                    <h2>
                        {spendingOver('month')}
                    </h2>
                </Card>
                <Card variant="outlined">
                    <small>Spending This Week</small>
                    <h2>
                        {spendingOver('week')}
                    </h2>
                </Card>
                <Card variant="outlined">
                    <small>Remaining Budget</small>
                    <h2>
                        {BudgetManager.budgets.map(budget => budget.id === filter && budget.timePeriod === "daily" ? "$" + (budget.amount - Number(spendingOver('day').replace('$',''))).toFixed(2) : 
                                                            budget.id === filter && budget.timePeriod === "weekly" ? "$" + (budget.amount - Number(spendingOver('week').replace('$',''))).toFixed(2) :
                                                            budget.id === filter && budget.timePeriod === "monthly" ? "$" + (budget.amount - Number(spendingOver('month').replace('$',''))).toFixed(2) :
                                                            budget.id === filter && budget.timePeriod === "annual" ? "$" + (budget.amount - Number(spendingOver('year').replace('$',''))).toFixed(2) :" ")}
                    </h2>
                </Card>
            </div>

            <div className="toolbar">
                <AddExpenseButton refreshParent={refreshExpenses} />
                <div className='spacer'>
                    <div className='filter-chip' onClick={() => setFilter('all')} ><Chip label="All" variant="outlined" style={{ "marginRight": "8px", "background": filter === "all" ? 'gainsboro' : 'transparent' }} /></div>
                    {
                        BudgetManager.budgets.map(budget => <div className='filter-chip' onClick={() => setFilter(budget.id)}><BudgetChip unselected={budget.id !== filter} id={budget.id} /></div>)
                    }
                </div>
                {
                    (selected.length > 0) ?
                        <Button variant="outlined" className='button' onClick={deleteSelected} color="error">
                            Delete {selected.length} items
                        </Button> : <></>
                }

            </div>

            <DataGrid
                style={{ height: 450, width: '100%' }}
                columns={columns}
                rows={filteredExpenses()}

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

            <br></br>
            
        </div>

    );

}

export default ExpenseTable;