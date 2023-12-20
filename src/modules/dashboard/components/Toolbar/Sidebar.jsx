import classes from "./styles.module.css";
import { useState } from "react";
import { ButtonContainer } from '@modules/dashboard/components/Toolbar/ButtonContainer.jsx';
import { PageContainer } from '@modules/dashboard/components/Toolbar/PageContainer.jsx';

export function Sidebar() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    function onClickTask() {
        setMenuVisible(!isMenuVisible);
    }
    return <div className={classes.Sidebar}>
        <ButtonContainer onClickTask={onClickTask} />
        <PageContainer isMenuVisible={isMenuVisible} />
    </div>
}