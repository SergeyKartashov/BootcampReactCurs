import classes from "./styles.module.css"
import { Field } from '@modules/common/components/UI/Field.jsx';
import { FindCloseIcon } from '@modules/dashboard/components/Toolbar/FindCloseIcon.jsx';

export function MainMenuFind() {
    return (
        <div className={classes.MainMenuFind}>
            <Field backgound={'#FFF'} opacity={0.2} width={300} placeholder="Найти" />
            <FindCloseIcon />
        </div>)
}