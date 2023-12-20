import classes from "./styles.module.css";

export function Item({ key, item }) {
    return (
        <li key={key}
            className={classes.Item}
        >
            {item}
        </li>
    );
}
