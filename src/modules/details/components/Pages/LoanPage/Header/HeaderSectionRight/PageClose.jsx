import classes from './styles.module.css';
import closeSvg from '@assets/images/icons/pageclose.svg';

export function PageClose() {
    return (<div className={classes.PageClose}><img src={closeSvg} alt="Close" /></div>)
}