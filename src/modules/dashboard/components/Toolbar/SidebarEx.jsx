import classes from "./styles.module.css";
import { MainMenuContainer } from '@modules/dashboard/components/Toolbar/MainMenuContainer.jsx';

export function SidebarEx({ isMenuVisible = false }) {
    const visibleClass = isMenuVisible
        ? `${classes.SidebarEx} ${classes.visible}`
        : `${classes.SidebarEx} ${classes.not_visible}`;
    return <div className={visibleClass}><MainMenuContainer /></div>
}