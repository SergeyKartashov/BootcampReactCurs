import classes from "./styles.module.css";
import { SectionLeftContainer } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/SectionLeftContainer.jsx';
import { SectionRightContainer } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/SectionRightContainer.jsx';


export function LoanContent() {
    return (<div className={classes.LoanContent}><SectionLeftContainer /><SectionRightContainer /></div>)
}