import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type ItemType = {
    title: string,
    value: any,
}
type AccordionPropsType = {
    titleValue: string,
    items: ItemType[],
}

export function  UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState<boolean>(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: true});

    return <div>
    <AccordionTitle title={props.titleValue}
                    onChange={()=> {
                        dispatch({type: TOGGLE_COLLAPSED})}}/>
        { !state.collapsed && <AccordionBody items={props.items} onClick={()=> alert("123")}/>}
    </div>
}

type AccordionTitleProps = {
    title: string,
    onChange: () => void,
}
function  AccordionTitle (props:AccordionTitleProps) {
    return (
        <h3 onClick={props.onChange}>-- {props.title}</h3>
    )
}
type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value:any) => void,
}
function AccordionBody (props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i , index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}