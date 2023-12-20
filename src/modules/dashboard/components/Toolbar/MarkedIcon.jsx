import classes from './styles.module.css';
import menuMarkedSvg from '@assets/images/icons/menumarked.svg';

export function MarkedIcon({ isVisible }) {
    const visibleClass = isVisible
        ? `${classes.MarkedIcon} ${classes.visible}`
        : `${classes.not_visible}`;
    return (<div className={visibleClass}><img src={menuMarkedSvg} alt="*" /></div>)
}