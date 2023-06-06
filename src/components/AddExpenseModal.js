import React from 'react';
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, Select, OutlinedInput, Box, MenuItem, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { useTheme } from '@mui/material/styles';
import { Expense, ExpenseManager } from '../classes/Expense';
import { BudgetManager } from '../classes/Budget';
import BudgetChip from './BudgetChip';


function getBudgetDropdownItemStyle(name, all, theme) {
    return {
        // fontWeight:
        //     all.indexOf(name) === -1
        //         ? theme.typography.fontWeightRegular
        //         : theme.typography.fontWeightMedium,
    };
}

export default function AddExpenseButton({ refreshParent }) {

    const theme = useTheme()

    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [date, setDate] = React.useState(DateTime.now());
    const [budgets, setBudgets] = React.useState([]);

    const handleClickOpen = () => {
        setDate(DateTime.now());
        setOpen(true);
    };

    const handleClose = () => {
        // Clear all the states
        setAmount(0);
        setTitle("")
        setDate(DateTime.now());
        setBudgets([]);
        // Close the modal
        setOpen(false);
    };

    const handleCreate = () => {
        // Create the new expense and add it to the manager
        let expense = new Expense(title, date.toUnixInteger(), amount, budgets)
        ExpenseManager.add(expense);
        // Update the parent view
        refreshParent()
        // Close the modal (also deletes field values)
        handleClose()
    }

    const handleBudgetListChange = (event) => {
        const {
            target: { value },
        } = event;
        setBudgets(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        <div>
            <Button className="button" variant="contained" onClick={handleClickOpen}>
                Add Expense
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Keeping up to date on your expenses helps you reach your budget goals faster!
                    </DialogContentText>

                    <br></br>


                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="amount"
                                label="Amount"
                                type="number"
                                fullWidth
                                value={amount}
                                onChange={(e) => setAmount(e.target.value === "" ? null : Number(e.target.value))}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    endAdornment: <InputAdornment position="end">USD</InputAdornment>
                                }}
                            />
                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                margin="dense"
                                placeholder="Sunday Brunch"
                                id="title"
                                label="Description"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker label="Date" value={date} onChange={(newValue) => setDate(newValue)} />
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl fullWidth>
                                <InputLabel id="budgets-label">Budgets</InputLabel>
                                <Select
                                    labelId="budgets-label"
                                    label="Budgets"
                                    id="budgets"
                                    fullWidth
                                    multiple
                                    value={budgets}
                                    onChange={handleBudgetListChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Budgets" />}
                                    renderValue={(budgets) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {budgets.map((id) => <BudgetChip id={id} />)}
                                        </Box>
                                    )}
                                >
                                    {BudgetManager.budgets.map((budget) => (
                                        <MenuItem
                                            key={budget.id}
                                            value={budget.id}
                                            style={getBudgetDropdownItemStyle(budget.id, budgets, theme)}
                                        >
                                            {budget.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                        </Grid>
                    </Grid>




                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate} variant='contained'>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}