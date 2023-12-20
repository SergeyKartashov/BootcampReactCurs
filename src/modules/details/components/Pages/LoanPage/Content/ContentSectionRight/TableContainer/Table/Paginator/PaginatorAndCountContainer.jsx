import classes from "./styles.module.css";
import { PaginatorWrapper } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PaginatorWrapper.jsx';
import { PagesCount } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PagesCount.jsx';

export function PaginatorAndCountContainer({ selectedConstant, handleConstantChange, currentPage, setCurrentPage, totalPages }) {
    return (
        <div className={classes.PaginatorAndCountContainer}>
            <PagesCount selectedConstant={selectedConstant} handleConstantChange={handleConstantChange} />
            <PaginatorWrapper currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>)
}