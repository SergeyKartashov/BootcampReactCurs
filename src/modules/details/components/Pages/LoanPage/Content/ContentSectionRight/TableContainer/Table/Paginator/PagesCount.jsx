import classes from "./styles.module.css";

export function PagesCount({ selectedConstant, handleConstantChange }) {
    return <div className={classes.PagesCount}>
        <label htmlFor="constantDropdown">Объектов на странице</label>
        <select className={classes.constantDropdown} id="constantDropdown" value={selectedConstant} onChange={handleConstantChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
    </div>
}