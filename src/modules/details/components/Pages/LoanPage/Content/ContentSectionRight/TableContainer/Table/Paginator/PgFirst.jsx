import classes from './styles.module.css';
import pgfirstSvg from '@assets/images/icons/pgfirst.svg';

export function PgFirst({ setCurrentPage }) {
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div className={classes.PgFirst} onClick={() => handlePageChange(1)} disabled={false}>
            <img src={pgfirstSvg} alt="<<" />
        </div>)
}