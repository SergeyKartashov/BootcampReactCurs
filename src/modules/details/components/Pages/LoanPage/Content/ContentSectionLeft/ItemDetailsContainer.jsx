import classes from "./styles.module.css";
import { ItemDetails } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemDetails.jsx';
import { ItemDelimLong } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemDelimLong.jsx';

export function ItemDetailsContainer({ isVisible, items }) {
    return <div className={classes.ItemDetailsContainer}><ItemDelimLong isVisible={!isVisible} count={items.length} /><ItemDetails isVisible={!isVisible} items={items} /></div>
}