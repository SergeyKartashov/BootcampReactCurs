import classes from "./styles.module.css";
import { MenuIcon } from '@modules/dashboard/components/Toolbar/MenuIcon.jsx';
import { MarkedIcon } from "@modules/dashboard/components/Toolbar/MarkedIcon.jsx";

export function DetailWrapper({ label, folderIcon = '', nLevel = 1, isMarked = false, marginLeft = 0 }) {
    return <div className={classes.DetailWrapper} >
        <MenuIcon folderIcon={folderIcon} marginLeft={marginLeft} />{label}
        <MarkedIcon isVisible={isMarked} /></div>
}