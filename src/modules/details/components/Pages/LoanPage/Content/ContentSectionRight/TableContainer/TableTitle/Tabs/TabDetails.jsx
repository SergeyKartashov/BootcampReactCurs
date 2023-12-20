import classes from "./styles.module.css";

export function TabDetails({ isActive, onClick }) {
    const tabClass = isActive
        ? `${classes.TabActive}`
        : `${classes.TabInactive}`;

    return (
        <div>
            <a href="#popup" className={tabClass} onClick={onClick}>Детали</a>
        </div>)
}