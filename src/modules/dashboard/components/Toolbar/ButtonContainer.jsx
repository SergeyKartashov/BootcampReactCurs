import classes from "./styles.module.css";
import { Logo } from '@modules/dashboard/components/Toolbar/Buttons/Logo.jsx';
import { UserSettings } from '@modules/dashboard/components/Toolbar/Buttons/UserSettings.jsx';
import { ToolBar } from '@modules/dashboard/components/Toolbar/Buttons/ToolBar.jsx';

export function ButtonContainer({ onClickTask }) {
    return (<div className={classes.ButtonContainer}><Logo /><ToolBar onClickTask={onClickTask} /><UserSettings /></div>)
}