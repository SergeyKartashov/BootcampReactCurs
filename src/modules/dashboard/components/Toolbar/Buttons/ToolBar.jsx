import classes from "./styles.module.css";
import { Tasks } from '@modules/dashboard/components/Toolbar/Buttons/Tasks.jsx';
import { UserFolderContainer } from '@modules/dashboard/components/Toolbar/Buttons/UserFolderContainer.jsx';
import { UserTodoContainer } from '@modules/dashboard/components/Toolbar/Buttons/UserTodoContainer.jsx';
import { UserNotifyContainer } from '@modules/dashboard/components/Toolbar/Buttons/UserNotifyContainer.jsx';


export function ToolBar({ onClickTask }) {
    return (<div className={classes.toolbar}><Tasks onClick={onClickTask} /><UserFolderContainer /><UserTodoContainer /><UserNotifyContainer /></div>)
}