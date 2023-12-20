import classes from "./styles.module.css";
import { PopupContainer } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionLeft/Popup/PopupContainer.jsx';
import { useState } from "react";

export function PageTitle({ title }) {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <p className={classes.PageTitle} onClick={() => setModalActive(true)}>{title}</p>
            <PopupContainer active={modalActive} setActive={setModalActive} />
        </div>)
}