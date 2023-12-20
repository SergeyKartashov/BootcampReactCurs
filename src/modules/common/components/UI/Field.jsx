import classes from './styles.module.css';

export function Field({
    value = '',
    placeholder = '',
    opacity = 1,
    background = '',
    width = 240,
    type = 'text' }) {
    const style = {
        opacity: `${opacity}`,
        background: background,
        width: `${width}px`,
    };
    return (
        <input
            value={value}
            className={classes.Field} style={style}
            type={type}
            placeholder={placeholder}
        />
    );
}
