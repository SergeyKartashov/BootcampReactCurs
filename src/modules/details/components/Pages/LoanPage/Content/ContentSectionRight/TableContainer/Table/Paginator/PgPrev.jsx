import classes from './styles.module.css';
import pgprevSvg from '@assets/images/icons/pgprev.svg';

export function PgPrev({ currentPage, setCurrentPage }) {
    const handlePageChange = (newPage) => {
        if (currentPage > 1) { setCurrentPage(newPage - 1); }
    };
    return (
        <div className={classes.PgPrev} onClick={() => handlePageChange(currentPage)} disabled={currentPage === 1}>
            <img src={pgprevSvg} alt="<" />
        </div>
    )
}