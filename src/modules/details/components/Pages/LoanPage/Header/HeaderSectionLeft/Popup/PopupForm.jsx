import { useState } from "react";
import classes from "./styles.module.css";
import closeSvg from '@assets/images/icons/modalclose.svg';
import viewSvg from '@assets/images/icons/view.svg';
import pictSvg from '@assets/images/icons/pict.svg';

export function PopupForm() {
    const [code, setCode] = useState('name');
    const [elmPath, setElmPath] = useState('name');
    const [name, setName] = useState('Наименование');
    const [view, setView] = useState('');
    const [pict, setPict] = useState('');
    const [colWidth, setColWidth] = useState('Авто');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleElmPathChange = (e) => {
        setElmPath(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleViewChange = (e) => {
        setView(e.target.value);
    };

    const handlePictChange = (e) => {
        setPict(e.target.value);
    };

    const handleColWidthChange = (e) => {
        setColWidth(e.target.value);
    };

    return (
        <div className={classes.PopupForm}>
            <div className={classes.PopupFormContent}>
                <div className={classes.PopupHeader}>
                    <div className={classes.PopupTitle}>Атрибут</div>
                    <div className={classes.PopupClose}><img src={closeSvg} alt="Close" /></div>
                </div>
                <label htmlFor="code" className={classes.PopupLabel}>Код</label>
                <input className={classes.PopupInputLight} type="text" id="code" name="code" value={code} onChange={handleCodeChange} />

                <label htmlFor="elmPath" className={classes.PopupLabel}>Путь к элементу</label>
                <input className={classes.PopupInputGrey} type="text" id="elmPath" name="elmPath" value={elmPath} onChange={handleElmPathChange} />

                <label htmlFor="Name" className={classes.PopupLabel}>Наименование</label>
                <input className={classes.PopupInputLight} type="text" id="name" name="name" value={name} onChange={handleNameChange} />

                <label htmlFor="View" className={classes.PopupLabel}>Представление</label>
                <div className={classes.PopupViewContainer}>
                    <input className={classes.PopupInputLight} type="text" id="view" name="view" value={view} onChange={handleViewChange} />
                    <div className={classes.PopupView}><img src={viewSvg} alt="v" /></div>
                </div>

                <label htmlFor="Pict" className={classes.PopupLabel}>Пиктограмма</label>
                <div className={classes.PopupViewContainer}>
                    <input className={classes.PopupInputLight} type="text" id="pict" name="pict" value={pict} onChange={handlePictChange} />
                    <div className={classes.PopupPict}><img src={pictSvg} alt="v" /></div>
                </div>

                <label htmlFor="ColumnWidth" className={classes.PopupLabel}>Ширина колонки</label>
                <div className={classes.PopupViewContainer}>
                    <input className={classes.PopupInputLight} type="text" id="colWidth" name="colWidth" value={colWidth} onChange={handleColWidthChange} />
                    <div className={classes.PopupPict}><img src={pictSvg} alt="v" /></div>
                </div>
            </div>
            <div className={classes.PopupButtons}>
                <div className={classes.PopupButtonWrapper}>
                    <div className={classes.PopupButtonCancel}>Отменить</div>
                    <div className={classes.PopupButtonOK}>Сохранить</div>
                </div>
            </div>
        </div>
    )
}
