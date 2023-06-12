import React from "react";
import { BudgetIcons, BudgetManager } from "../classes/Budget";
import "./BudgetTable.scss"
import { Card, IconButton, Tooltip } from "@mui/material";
import { Add, AutoGraph, Delete, Edit, ListAlt, Payments } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AddBudgetModal } from "./AddBudgetModal";

export default function BudgetTable() {

  const [budgets, setBudgets] = React.useState(BudgetManager.budgets);

  const refreshData = () => {
    setBudgets(BudgetManager.budgets);
  }

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
                  <div className="spacer"></div>
                  <Link to={`/#${budget.id}`}>
                    <Tooltip title="View Expenses">
                      <IconButton >
                        <ListAlt />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link to={`/balance#${budget.id}`}>
                    <Tooltip title="View Graph">
                      <IconButton >
                        <AutoGraph />
                      </IconButton>
                    </Tooltip>
                  </Link>


                </div>
              </Card>


            })
          }
          <AddBudgetModal refreshParent={refreshData} />
        </div>
      </div>

    </>
  );
}

