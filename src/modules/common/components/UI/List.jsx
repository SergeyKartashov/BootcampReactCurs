import classes from "./styles.module.css";
import { Item } from "./Item.jsx";

export function List({ items, isVisible = false }) {
    const visibleClass = isVisible
        ? `${classes.List} ${classes.visible}`
        : `${classes.not_visible}`;
    return (
        <>
            <ul className={visibleClass}>
                {items.map((item, index) => {
                    return (
                        <Item
                            item={item}
                            key={index}
                        >
                        </Item>
                    );
                })}
            </ul>
            {items.length === 0 && <p>-</p>}
        </>
    );
}
