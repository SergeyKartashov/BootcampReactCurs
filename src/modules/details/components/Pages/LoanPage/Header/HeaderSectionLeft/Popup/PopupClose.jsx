import classes from './styles.module.css';
import closeSvg from '@assets/images/icons/modalclose.svg';

export function PopupClose() {
    return (<div className={classes.PopupClose}><img src={closeSvg} alt="Close" /></div>)
}