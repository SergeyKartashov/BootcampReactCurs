import classes from "./styles.module.css";
import { TableWrapper } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableWrapper.jsx';
import { PaginatorAndCountContainer } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/Table/Paginator/PaginatorAndCountContainer.jsx';
import { useState } from "react";

const title = "Расчет графика кредита с равномерным распределением ОД";
const tableData = [
    { id: 1, dt: '22.04.2021', ip: '1:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 2, dt: '22.04.2021', ip: '1:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 3, dt: '22.04.2021', ip: '1:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 4, dt: '22.04.2021', ip: '1:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 5, dt: '22.04.2021', ip: '1:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 6, dt: '23.04.2021', ip: '2:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 7, dt: '23.04.2021', ip: '2:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 8, dt: '23.04.2021', ip: '2:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 9, dt: '23.04.2021', ip: '2:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 10, dt: '23.04.2021', ip: '2:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 11, dt: '24.04.2021', ip: '3:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 12, dt: '24.04.2021', ip: '3:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 13, dt: '24.04.2021', ip: '3:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 14, dt: '24.04.2021', ip: '3:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 15, dt: '24.04.2021', ip: '3:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 16, dt: '25.04.2021', ip: '4:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 17, dt: '25.04.2021', ip: '4:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 18, dt: '25.04.2021', ip: '4:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 19, dt: '25.04.2021', ip: '4:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 20, dt: '25.04.2021', ip: '4:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 21, dt: '26.04.2021', ip: '5:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 22, dt: '26.04.2021', ip: '5:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 23, dt: '26.04.2021', ip: '5:68.245.669.42', port: '8080', status: 'Активно' },
    { id: 24, dt: '26.04.2021', ip: '5:68.245.669.42', port: '8080', status: 'Не активно' },
    { id: 25, dt: '26.04.2021', ip: '5:68.245.669.42', port: '8080', status: 'Активно' },
];

export function SectionRightContainer() {
    const [selectedConstant, setSelectedConstant] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const handleConstantChange = (event) => {
        setSelectedConstant(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };
    const startIndex = (currentPage - 1) * selectedConstant;
    const endIndex = startIndex + selectedConstant;
    const filteredData = tableData.slice(startIndex, endIndex);
    let totalPages = Math.ceil(tableData.length / selectedConstant);

    return (
        <div className={classes.SectionRightContainer}>
            <div className={classes.SectionContainer}>
                <TableWrapper
                    title={title}
                    filteredData={filteredData}
                />
                <PaginatorAndCountContainer
                    selectedConstant={selectedConstant}
                    handleConstantChange={handleConstantChange}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>)
}