import classes from "./styles.module.css"

export function Breadcrumbs({ items }) {
    return (<div className={classes.TitleContainer}>
        <ul className={classes.Breadcrumbs}>
            {items.map((item, index) => (
                <li key={index} >
                    {index === items.length - 1 ? (
                        item.label
                    ) : (
                        <a href={item.link}>{item.label}</a>
                    )}
                </li>
            ))}
        </ul>
    </div >)
}
