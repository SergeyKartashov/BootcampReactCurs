import React from 'react';
import classes from "./styles.module.css";
import { DetailWrapper } from '@modules/dashboard/components/Toolbar/DetailWrapper.jsx';
import { getMainMenuData } from "@api/mainmenu.js"

export function MainMenuItemContainer() {
    const points = getMainMenuData();

    const renderDetailWrappers = (items, marginLeft = 0) => {
        return items.map((item, index) => (
            <React.Fragment key={index}>
                <DetailWrapper
                    label={item.label}
                    folderIcon={item.values.length > 0 ? 'opened' : 'closed'}
                    marginLeft={marginLeft}
                    isMarked={!!item.marked}
                />
                {item.values.length > 0 && renderDetailWrappers(item.values, marginLeft + 15)}
            </React.Fragment>
        ));
    };

    return (
        <div className={classes.MainMenuItemContainer}>
            {renderDetailWrappers(points)}
        </div>
    );
}