import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const UncontrolledAccordionModeChanging = () => {
    return (<UncontrolledAccordion
        titleValue={"Users"}
        items={[{title: "Alex", value: 1},
            {title: "Andrew", value: 2},
            {title: "Valera", value: 3},
            {title: "LOL", value: 4}]}/>)
}