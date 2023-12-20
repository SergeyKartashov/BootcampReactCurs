import classes from "./styles.module.css"
import { TableTitleText } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/TableTitleText.jsx';
import { TabContent } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/Tabs/TabContent.jsx';

export function TableTitle({ title }) {
    return <div className={classes.TableTitleContainer}><div className={classes.TableTitle}><TableTitleText title={title} /></div><TabContent /></div>
}