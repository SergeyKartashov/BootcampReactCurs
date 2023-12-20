import classes from "./styles.module.css";

export function PopupButtons() {
    return (<div className={classes.PopupButtons}>
        <div className={classes.PopupButtonCancel}>Отменить</div>
        <div className={classes.PopupButtonOK}>Сохранить</div>
    </div>)
}