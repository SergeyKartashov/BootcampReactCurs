import classes from './styles.module.css';
import logoUserTodoDef from '@assets/images/icons/usertododef.svg';

export function UserTodo() {
    return (<div className={classes.toolbtn}><img src={logoUserTodoDef} alt="TodoList" /></div>)
}