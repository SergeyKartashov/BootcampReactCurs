import classes from "./styles.module.css";
import { NotificationCount } from '@modules/dashboard/components/Toolbar/Buttons/NotificationCount.jsx';

export function NotificationCircle({ count = 1, isVisible = true, marginLeft = -8 }) {
    const style = {
        marginLeft: `${marginLeft}px`,
    };
    const visibleClass = isVisible
        ? `${classes.circle} ${classes.visible}`
        : `${classes.circle} ${classes.not_visible}`;

    return (<div className={visibleClass} style={style}><NotificationCount count={count} /></div>)
}