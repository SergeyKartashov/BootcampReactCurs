import classes from "./styles.module.css";
import { PopupForm } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionLeft/Popup/PopupForm.jsx';

export function PopupContent() {
    return (
        <div className={classes.PopupContent}>
            <PopupForm />
        </div>)
}