import classes from './styles.module.css';
import logoSvg from '@assets/images/icons/logo.svg';

export function Logo() {
    return (<div className={classes.Logo}><img src={logoSvg} alt="Logo" /></div>)
}