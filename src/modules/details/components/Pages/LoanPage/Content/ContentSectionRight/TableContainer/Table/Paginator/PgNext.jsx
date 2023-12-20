import classes from './styles.module.css';
import pgnextSvg from '@assets/images/icons/pgnext.svg';

export function PgNext({ currentPage, setCurrentPage, totalPages }) {
    const handlePageChange = (newPage) => {
        if (currentPage < totalPages) { setCurrentPage(newPage + 1); }
    };
    return (
        <div className={classes.PgNext} onClick={() => handlePageChange(currentPage)} disabled={currentPage === totalPages}>
            <img src={pgnextSvg} alt=">" />
        </div>)
}