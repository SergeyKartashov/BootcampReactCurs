import classes from "./styles.module.css";
import { LoanContent } from '@modules/details/components/Pages/LoanPage/Content/LoanContent.jsx';
import { LoanPageDelim } from '@modules/details/components/Pages/LoanPage/LoanPageDelim.jsx';

export function LoanPageContentContainer() {
    return (<div className={classes.LoanPageContentContainer}><LoanPageDelim /><LoanContent /></div>)
}