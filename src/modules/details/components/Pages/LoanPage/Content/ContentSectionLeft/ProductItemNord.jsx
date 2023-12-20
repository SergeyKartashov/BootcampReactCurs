import classes from "./styles.module.css"

export function ProductItemNord({ nord, onClick }) {
    return <button className={classes.ProductItemNord} onClick={onClick}><div className={classes.ProductItemNordText}>{nord}</div></button>
}