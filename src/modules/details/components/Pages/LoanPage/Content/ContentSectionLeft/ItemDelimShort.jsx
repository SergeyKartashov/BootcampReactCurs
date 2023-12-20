import classes from "./styles.module.css";

export function ItemDelimShort({ isVisible = true }) {
    const visibleClass = isVisible
        ? `${classes.ItemDelimShort} ${classes.visible}`
        : `${classes.not_visible}`;
    return <div className={visibleClass}></div>
}