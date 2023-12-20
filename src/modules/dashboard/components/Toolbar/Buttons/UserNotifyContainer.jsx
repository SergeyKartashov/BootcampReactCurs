
import classes from "./styles.module.css";
import { UserNotify } from '@modules/dashboard/components/Toolbar/Buttons/UserNotify.jsx';
import { NotificationCircle } from '@modules/dashboard/components/Toolbar/Buttons/NotificationCircle.jsx';

export function UserNotifyContainer() {
    return (<div className={classes.usertool_container}><UserNotify /><NotificationCircle /></div>)
}