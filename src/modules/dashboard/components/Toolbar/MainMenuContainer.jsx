import classes from "./styles.module.css";
import { MainMenuFind } from '@modules/dashboard/components/Toolbar/MainMenuFind.jsx';
import { MainMenuItemContainer } from '@modules/dashboard/components/Toolbar/MainMenuItemContainer.jsx';

export function MainMenuContainer() {
    return (<div className={classes.MainMenuContainer}>
        <MainMenuFind />
        <MainMenuItemContainer /></div>)
}