import classes from "./styles.module.css";
import { PopupContent } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionLeft/Popup/PopupContent.jsx';

export function PopupContainer({ active, setActive }) {
    const tabClass = active
        ? `${classes.modal} ${classes.active}`
        : `${classes.modal}`;
    const tabContentClass = active
        ? `${classes.modal__content} ${classes.active}`
        : `${classes.modal__content}`;
    return (
        <div className={tabClass} onClick={() => setActive(false)} >
            <div className={tabContentClass} onClick={e => e.stopPropagation()}>
                <PopupContent />
            </div>
        </div>)
}