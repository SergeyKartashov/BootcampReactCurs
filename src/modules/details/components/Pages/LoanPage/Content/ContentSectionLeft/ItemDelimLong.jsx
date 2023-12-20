import classes from "./styles.module.css";

export function ItemDelimLong({ count = 0, isVisible = false }) {
    const height = count * 30;
    const visibleClass = isVisible
        ? `${classes.ItemDelimLong} ${classes.visible}`
        : `${classes.not_visible}`;
    return <div className={visibleClass} style={{ height }}></div>
}