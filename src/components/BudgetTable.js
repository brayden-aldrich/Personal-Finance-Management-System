import React from "react";
import { BudgetIcons, BudgetManager } from "../classes/Budget";
import "./BudgetTable.scss"
import { Button, Card, IconButton } from "@mui/material";
import { Add, Delete, Edit, Payments } from "@mui/icons-material";

export default function BudgetTable() {

  const [budgets, setBudgets] = React.useState(BudgetManager.budgets);

  return (
    <>
      <div className="budget-table">
        <div className="budget-grid">
          {
            budgets.map(budget => {
              return <Card className="budget-item" variant="outlined">
                <div className="header" style={{ background: BudgetIcons[budget.icon]?.color ?? '#455A64' }}>
                  <div>
                    {BudgetIcons[budget.icon]?.icon ?? <Payments />}
                  </div>
                  <div className="spacer"></div>
                  <b>
                    ${budget.amount.toFixed(2)}
                  </b>
                  <div>
                    &nbsp;—&nbsp;{budget.timePeriod}
                  </div>
                </div>
                <div className="content">
                  <h3>{budget.name}</h3>
                  <p>{budget.description}</p>
                </div>
                <div className="actions">
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </div>
              </Card>


            })
          }
          <Card className="budget-add" variant="outlined">
              <div><Add fontSize="large" /></div>
              <div>New Budget</div>
          </Card>
        </div>
      </div>

    </>
  );
}

