import classes from "./styles.module.css";
import { SidebarEx } from '@modules/dashboard/components/Toolbar/SidebarEx.jsx';
import { LoanPage } from '@modules/details/components/Pages/LoanPage.jsx';

export function PageContainer({ isMenuVisible }) {
    return <div className={classes.PageContainer}>
        <SidebarEx isMenuVisible={isMenuVisible} />
        <LoanPage isMenuVisible={isMenuVisible} /></div>
}