
import classes from "./styles.module.css";
import { UserTodo } from '@modules/dashboard/components/Toolbar/Buttons/UserTodo.jsx';
import { NotificationCircle } from '@modules/dashboard/components/Toolbar/Buttons/NotificationCircle.jsx';

export function UserTodoContainer() {
    return (<div className={classes.usertool_container}><UserTodo /><NotificationCircle /></div>)
}