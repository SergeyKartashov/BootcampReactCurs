import classes from "./styles.module.css";
import { List } from '@modules/common/components/UI/List.jsx';

export function ItemDetails({ items, isVisible = false }) {
    const visibleClass = isVisible
        ? `${classes.ItemDetails} ${classes.visible}`
        : `${classes.not_visible}`;
    return (<div className={visibleClass}><List items={items} isVisible={isVisible} /></div>)
}