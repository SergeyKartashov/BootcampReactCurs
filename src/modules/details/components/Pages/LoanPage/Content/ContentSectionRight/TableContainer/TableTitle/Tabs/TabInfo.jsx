import classes from "./styles.module.css";

export function TabInfo({ isActive, onClick }) {
    const tabClass = isActive
        ? `${classes.TabActive}`
        : `${classes.TabInactive}`;
    return (<a href="#tab_1" className={tabClass} onClick={onClick}>Информация</a>)
}