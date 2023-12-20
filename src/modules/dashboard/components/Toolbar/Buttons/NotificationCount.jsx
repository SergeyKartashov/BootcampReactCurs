import classes from "./styles.module.css";

export function NotificationCount({ count = 1 }) {
    return (<div className={classes.circle_text}>{count}</div>)
}