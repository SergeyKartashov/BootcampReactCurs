import classes from './styles.module.css';
import openedSvg from '@assets/images/icons/item_opened.svg';

export function ItemOpened({ onClick, isVisible = false }) {
    const visibleClass = isVisible
        ? `${classes.ItemOpened} ${classes.visible}`
        : `${classes.not_visible}`;
    return (<div className={visibleClass}><img onClick={onClick} src={openedSvg} alt="v" /></div>)
}