import classes from './styles.module.css';
import menuClosedSvg from '@assets/images/icons/menuclosed.svg';
import menuOpenedSvg from '@assets/images/icons/menuopened.svg';
import menuDetailSvg from '@assets/images/icons/menudetail.svg';

export function MenuIcon({ folderIcon = 'closed', marginLeft = 0 }) {
    const style = {
        marginLeft: `${marginLeft}px`,
    };
    let menuSvg = ''
    if (folderIcon === 'closed') { menuSvg = menuClosedSvg }
    else if (folderIcon === 'opened') { menuSvg = menuOpenedSvg }
    else { menuSvg = menuDetailSvg }
    return (<div className={classes.MenuIcon} style={style}><img src={menuSvg} alt="x" /></div>)
}