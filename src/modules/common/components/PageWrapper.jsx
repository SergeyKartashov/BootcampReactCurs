import classes from "./styles.module.css";
import { Sidebar } from '@modules/dashboard/components/Toolbar/Sidebar.jsx';


export function PageWrapper() {
    return (<div className={classes.wrapper}><Sidebar /></div>)
}