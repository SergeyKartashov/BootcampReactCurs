import classes from "./styles.module.css";
import { ProductItem } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ProductItem.jsx';
import { ItemOpened } from "@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemOpened";

export function ItemWrapper({ nord, label, isVisible, count, onClick }) {
    return <div className={classes.ItemWrapper}>
        <ProductItem nord={nord} label={label} isVisible={!isVisible} count={count} onClick={onClick} />
        <ItemOpened onClick={onClick} isVisible={!isVisible} /></div>
}