import classes from "./styles.module.css";

export function TabAttr({ count, isActive, onClick }) {
    const tabClass = isActive
        ? `${classes.TabActive}`
        : `${classes.TabInactive}`;
    return (<a href="#tab_2" className={tabClass} onClick={onClick}>Атрибуты ({count})</a>)
}