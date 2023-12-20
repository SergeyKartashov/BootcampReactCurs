import classes from "./styles.module.css";

export function PaginatorLast({ pages, currentPage, totalPages, setCurrentPage }) {

    const handlePageClick = () => {
        setCurrentPage(totalPages);
    };

    function getClassName() {
        if (totalPages <= 3) { return classes.not_visible }
        return currentPage === totalPages ? classes.PaginatorCurrent : classes.Paginator;
    }

    return (
        <div className={classes.PaginatorPagesWrapper}>
            {pages.map((p, index) => (
                <span
                    key={index}
                    className={getClassName()}
                    onClick={() => handlePageClick()} > {p}</span>
            ))
            }
        </div >
    );
}