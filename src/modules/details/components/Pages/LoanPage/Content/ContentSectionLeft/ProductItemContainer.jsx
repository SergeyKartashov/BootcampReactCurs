import classes from "./styles.module.css";
import { useState } from "react";
import { ItemDelimShort } from "@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemDelimShort";
import { ItemWrapper } from "@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemWrapper";
import { ItemDetailsContainer } from "@modules/details/components/Pages/LoanPage/Content/ContentSectionLeft/ItemDetailsContainer";
import { getProductParam, getDetail } from "@api/productparam.js"

export function ProductItemContainer() {
    const [isActiveStates, setIsActiveStates] = useState([true, true, true, true, true, true]);
    const item_list = getDetail();
    const labels = getProductParam();
    const list_nord = 4; // пункт меню с детализацией

    function onClickHandler(index) {
        const newActiveStates = [...isActiveStates];
        newActiveStates[index] = !newActiveStates[index];
        setIsActiveStates(newActiveStates);
    }

    return (
        <div className={classes.ProductItemContainer}>
            {labels.map((label, index) => (
                <div key={index}>
                    <ItemWrapper
                        nord={index + 1}
                        label={label}
                        isVisible={isActiveStates[index]}
                        count={index === list_nord ? item_list.length : 1}
                        onClick={() => onClickHandler(index)}
                    />
                    <ItemDelimShort isVisible={isActiveStates[index]} />
                    <ItemDetailsContainer isVisible={isActiveStates[index]} items={index === list_nord ? item_list : [label]} />
                </div>
            ))}
        </div>
    );
}