
import { Chip } from "@mui/material";
import "./BudgetChip.scss";
import { BudgetIcons, BudgetManager } from "../classes/Budget";

export default function BudgetChip({ id, unselected }) {
    const budget = BudgetManager.fromId(id);
    const icon = BudgetIcons[budget.icon]

    return (<Chip className="budget-chip" variant={unselected ? "unselected" : "filled"} key={id} icon={icon.icon} style={{ 'background': icon.color, 'opacity': unselected ? 0.5 : 1 }} label={budget.name} />)
}