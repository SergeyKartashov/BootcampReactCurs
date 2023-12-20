import classes from './styles.module.css';
import userSvg from '@assets/images/icons/user.svg';

export function UserSettings() {
    return (<div className={classes.user}><img className={classes.userimg} src={userSvg} alt="User" /></div>)
}