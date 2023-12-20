import classes from './styles.module.css';
import logoTasksDef from '@assets/images/icons/taskssel.svg';

export function Tasks({ onClick }) {
    return (<button className={classes.toolbtnsel} onClick={onClick}> <img src={logoTasksDef} alt="Tasks" /></button >)
}