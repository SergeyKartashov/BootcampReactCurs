import classes from "./styles.module.css"
import { Field } from '@modules/common/components/UI/Field.jsx';

export function ToolbarHeaderFind() {
    return (
        <div className={classes.ToolbarHeaderFind}>
            <Field placeholder="Найти" />
        </div>)
}