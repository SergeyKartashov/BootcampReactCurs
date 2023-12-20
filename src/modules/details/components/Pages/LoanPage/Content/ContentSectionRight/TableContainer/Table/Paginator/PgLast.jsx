import classes from './styles.module.css';
import pglastSvg from '@assets/images/icons/pglast.svg';

export function PgLast({ setCurrentPage, totalPages }) {
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div className={classes.PgLast} onClick={() => handlePageChange(totalPages)} disabled={false}>
            <img src={pglastSvg} alt=">>" />
        </div>)
}