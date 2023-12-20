import classes from "./styles.module.css";
import { useState } from 'react';
import { TabInfo } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/Tabs/TabInfo.jsx';
import { TabAttr } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/Tabs/TabAttr.jsx';
import { TabDetails } from '@modules/details/components/Pages/LoanPage/Content/ContentSectionRight/TableContainer/TableTitle/Tabs/TabDetails.jsx';

export function TabItems({ count }) {
    const [activeTab, setActiveTab] = useState('info');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (<nav className={classes.TabItems}>
        <TabInfo
            isActive={activeTab === 'info'}
            onClick={() => handleTabChange('info')}
        />
        <TabAttr
            count={count}
            isActive={activeTab === 'attr'}
            onClick={() => handleTabChange('attr')}
        />
        <TabDetails
            isActive={activeTab === 'details'}
            onClick={() => handleTabChange('details')}
        />
    </nav>)
}