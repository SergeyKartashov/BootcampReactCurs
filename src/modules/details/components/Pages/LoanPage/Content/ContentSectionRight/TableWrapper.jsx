import classes from "./styles.module.css";
import { TableTitle } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/TableTitle.jsx';
import { TableContainer } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/TableContainer.jsx';

export function TableWrapper({ title, filteredData }) {
    return <div className={classes.TableWrapper}><TableTitle title={title} /><TableContainer filteredData={filteredData} /></div>
}