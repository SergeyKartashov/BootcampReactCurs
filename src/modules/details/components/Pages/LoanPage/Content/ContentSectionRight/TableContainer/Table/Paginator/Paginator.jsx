import classes from "./styles.module.css";

export function Paginator({ pages, currentPage, totalPages, setCurrentPage }) {

    const handlePageClick = (index) => {
        if (index < totalPages) { setCurrentPage(index + 1); }
    };

    function getClassName(index, currentPage, totalPages, pageCount) {
        const isLastPage = currentPage === totalPages && pageCount === 1;
        const isActive = index === currentPage - 1 && pageCount > 1;
        return isActive || isLastPage ? classes.PaginatorCurrent : classes.Paginator;
    }

    return (
        <div className={classes.PaginatorPagesWrapper}>
            {pages.map((p, index) => (
                <span
                    key={index}
                    className={getClassName(index, currentPage, totalPages, pages.length)}
                    onClick={() => handlePageClick(index)} > {p}</span>
            ))
            }
        </div >
    );
}
