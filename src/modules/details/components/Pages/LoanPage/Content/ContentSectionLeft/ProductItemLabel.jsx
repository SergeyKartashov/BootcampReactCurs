import classes from "./styles.module.css";

export function ProductItemLabel({ label, onClick }) {
    return <div><p className={classes.ProductItemLabel} onClick={onClick}>{label}</p></div>
}