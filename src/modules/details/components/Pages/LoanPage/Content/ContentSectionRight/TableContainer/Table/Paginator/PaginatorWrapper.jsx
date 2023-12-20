import classes from "./styles.module.css";
import { Paginator } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/Paginator.jsx';
import { PaginatorLast } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PaginatorLast.jsx';
import { PgFirst } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PgFirst.jsx';
import { PgLast } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PgLast.jsx';
import { PgPrev } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PgPrev.jsx';
import { PgNext } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PgNext.jsx';
import { PgRange } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PgRange.jsx';


export function PaginatorWrapper({ currentPage, setCurrentPage, totalPages }) {
    return (
        <div className={classes.PaginatorWrapper}>
            <PgFirst currentPage={1} setCurrentPage={setCurrentPage} />
            <PgPrev currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Paginator pages={[1, 2, 3]} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            <PgRange />
            <PaginatorLast pages={[totalPages]} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            <PgNext currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <PgLast totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>)
}