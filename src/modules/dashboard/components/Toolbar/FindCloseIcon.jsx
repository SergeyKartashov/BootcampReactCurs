import classes from './styles.module.css';
import findCloseSvg from '@assets/images/icons/findclose.svg';

export function FindCloseIcon() {
    return (<div className={classes.FindClose}><img src={findCloseSvg} alt="x" /></div>)
}