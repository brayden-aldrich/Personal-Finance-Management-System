
import { Chip } from "@mui/material";
import "./BudgetChip.scss";
import { BudgetIcons, BudgetManager } from "../classes/Budget";

export default function BudgetChip({ id }) {
    const budget = BudgetManager.fromId(id);
    const icon = BudgetIcons[budget.icon]

    return (<Chip className="budget-chip" key={id} icon={icon.icon} style={{ 'background': icon.color }} label={budget.name} />)
}