import classes from "./styles.module.css";
import { LeftSectionContainer } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionLeft/LeftSectionContainer.jsx';
import { ToolbarHeaderContainer } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionRight/ToolbarHeaderContainer.jsx';

export function LoanPageHeaderContainer() {
    return (
      <div className={classes.LoanPageHeaderWrapper}>
        <div className={classes.LoanPageHeaderContainer}><LeftSectionContainer /><ToolbarHeaderContainer /></div>
      </div>
    )
}