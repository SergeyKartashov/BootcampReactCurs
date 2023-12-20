import classes from './styles.module.css';
import logoUserFolderDef from '@assets/images/icons/userfolderdef.svg';

export function UserFolder() {
    return (<div className={classes.toolbtn}><img src={logoUserFolderDef} alt="Folders" /></div>)
}