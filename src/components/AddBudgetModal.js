import { Add } from "@mui/icons-material";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, Tab, Tabs, TextField } from "@mui/material";
import React from "react";
import { Budget, BudgetIcons, BudgetManager, BudgetTimePeriods } from "../classes/Budget";
import "./AddBudgetModal.scss";

export function AddBudgetModal({ refreshParent }) {

    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState(null);
    const [icon, setIcon] = React.useState("food");
    const [period, setPeriod] = React.useState("weekly");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        // Close the modal
        setOpen(false);
    };

    const handleCreate = () => {
        // Close the modal (also deletes field values)
        let budget = new Budget(title, desc, amount, period, icon);

        BudgetManager.add(budget);
        refreshParent()

        handleClose()
    }

    return (
        <>

            <Card className="budget-add" onClick={handleClickOpen} variant="outlined">
                <div><Add fontSize="large" /></div>
                <div>New Budget</div>
            </Card>

            <Dialog className="budget-add-dialog" open={open} onClose={handleClose} style={{ '--currColor': BudgetIcons[icon].color }}>
                <DialogTitle>New Budget</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Creating personal budgets promotes healthy spending habits!
                    </DialogContentText>

                    <br></br>

                    <small class="floating-label">Icon</small>
                    <Tabs className="icon-tabs" onChange={(_, val) => setIcon(val)} value={icon} variant="fullWidth">
                        {Object.entries(BudgetIcons).map(([key, icon]) => <Tab icon={icon.icon} value={key} className="icon-tab" style={{ '--color': icon.color }} />)}
                    </Tabs>

                    <small class="floating-label">Period</small>
                    <Tabs className="icon-tabs" onChange={(_, val) => setPeriod(val)} value={period} variant="fullWidth" >
                        {Object.keys(BudgetTimePeriods).map((period) => <Tab label={period} value={period} className="icon-tab" />)}
                    </Tabs>


                    <Grid container spacing={2}>

                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                margin="dense"
                                placeholder="My New Budget"
                                id="title"
                                label="Name"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
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

                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                label="Description"
                                margin="dense"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                multiline
                                fullWidth
                                rows={2}
                            />
                        </Grid>

                    </Grid>




                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate} variant='contained'>Create</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}