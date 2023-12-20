import classes from "./styles.module.css"
import { useState } from 'react';
import operSvg from '@assets/images/icons/operation.svg';

export function Table({ data }) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedRows(selectAll ? [] : data.map((row) => row.id));
    };

    const handleRowSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };
    return <div className={classes.table}>
        <table>
            <thead>
                <tr className={classes.table_header}>
                    <th className={classes.header_title}>
                        <input className={classes.checkbox}
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                    </th>
                    <th className={classes.header_title}>Дата</th>
                    <th className={classes.column_delimiter}></th>
                    <th className={classes.header_title}>IP</th>
                    <th className={classes.column_delimiter}></th>
                    <th className={classes.header_title}>Порт</th>
                    <th className={classes.column_delimiter}></th>
                    <th className={classes.header_title}>Статус</th>
                    <th className={classes.header_title}> </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td className={classes.checkbox_cell}>
                            <input className={classes.checkbox}
                                type="checkbox"
                                checked={selectedRows.includes(row.id)}
                                onChange={() => handleRowSelect(row.id)}
                            />
                        </td>
                        <td className={classes.cell}>{row.dt}</td>
                        <td className={classes.column_delimiter}></td>
                        <td className={classes.cell}>{row.ip}</td>
                        <td className={classes.column_delimiter}></td>
                        <td className={classes.cell}>{row.port}</td>
                        <td className={classes.column_delimiter}></td>
                        <td className={classes.cell}>
                            <div className={row.status === 'Активно' ? classes.status_active : classes.status_notactive}>
                                {row.status}
                            </div>
                        </td>
                        <td><img src={operSvg} alt="v" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div >
}