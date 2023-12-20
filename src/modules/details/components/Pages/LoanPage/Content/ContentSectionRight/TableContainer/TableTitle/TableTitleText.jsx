import classes from "./styles.module.css";

export function TableTitleText({ title = '' }) {
    return <div><p className={classes.TableTitleText}>{title}</p></div>
}