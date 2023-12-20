import classes from "./styles.module.css";
import { LoanPageHeaderContainer } from '@modules/details/components/Pages/LoanPage/LoanPageHeaderContainer.jsx';
import { LoanPageContentContainer } from '@modules/details/components/Pages/LoanPage/LoanPageContentContainer.jsx';

export function LoanPage() {
    return (<div className={classes.LoanPage}><LoanPageHeaderContainer /><LoanPageContentContainer /></div>)
}