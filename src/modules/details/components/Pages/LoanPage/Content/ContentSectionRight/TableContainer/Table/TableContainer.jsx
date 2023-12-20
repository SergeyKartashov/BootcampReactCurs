import classes from "./styles.module.css";
import { Table } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Table.jsx';

export function TableContainer({ filteredData }) {
    return <div className={classes.TableContainer}>
        <Table data={filteredData} />
    </div>
}