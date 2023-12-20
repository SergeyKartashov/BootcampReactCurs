import classes from "./styles.module.css";
import { ProductItemNord } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ProductItemNord.jsx';
import { ProductItemLabel } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ProductItemLabel.jsx';
import { NotificationCircle } from '@modules/dashboard/components/Toolbar/Buttons/NotificationCircle.jsx';

export function ProductItem({ nord, label, isVisible, count, onClick }) {
    return <div className={classes.ProductItem}>
        <ProductItemNord nord={nord} onClick={onClick} />
        <ProductItemLabel label={label} onClick={onClick} />
        <NotificationCircle count={count} isVisible={isVisible} marginLeft={10} />
    </div>
}