import classes from "./styles.module.css";
import { PageSave } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionRight/PageSave.jsx';
import { ToolbarHeaderFind } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionRight/ToolbarHeaderFind.jsx';
import { DelimClose } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionRight/DelimClose.jsx';
import { PageClose } from '@modules/details/components/Pages/LoanPage/Header/HeaderSectionRight/PageClose.jsx';

export function ToolbarHeaderContainer() {
    return (<div className={classes.ToolbarHeaderContainer}><PageSave /><ToolbarHeaderFind /><DelimClose /><PageClose /></div>)
}