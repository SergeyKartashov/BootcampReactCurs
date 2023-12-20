import classes from "./styles.module.css";
import { TabItems } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/Tabs/TabItems.jsx';

export function TabContent() {
    const count = 3;
    return (<div className={classes.TabContent}><TabItems count={count} /></div>)
}