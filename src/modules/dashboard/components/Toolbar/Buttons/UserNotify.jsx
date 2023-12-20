import classes from './styles.module.css';
import logoUserNotifyDef from '@assets/images/icons/usernotifydef.svg';

export function UserNotify() {
    return (<div className={classes.toolbtn}><img src={logoUserNotifyDef} alt="Notifications" /></div>)
}