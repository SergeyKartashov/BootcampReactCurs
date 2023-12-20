import classes from './styles.module.css';
import saveSvg from '@assets/images/icons/pagesave.svg';

export function PageSave() {
    return (<div className={classes.PageSave}><img src={saveSvg} alt="Save" /></div>)
}