
import classes from "./styles.module.css";
import { UserFolder } from '@modules/dashboard/components/Toolbar/Buttons/UserFolder.jsx';
import { NotificationCircle } from '@modules/dashboard/components/Toolbar/Buttons/NotificationCircle.jsx';

const count = 7;

export function UserFolderContainer() {
    return (<div className={classes.usertool_container}><UserFolder /><NotificationCircle count={count} /></div>)
}