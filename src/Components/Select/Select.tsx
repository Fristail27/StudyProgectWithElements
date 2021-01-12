import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string,
    value: any,
}
type CityType = {
    City: string,
    Country:string,
    Populate: number
}

type SelectPropsType = {
    value?: any,
    items: ItemType[] | CityType[],
    onChange: (i: any) => void,
}

function Select(props: SelectPropsType) {
    let [collapseStatus, setCollapseStatus] = useState<boolean>(true);
    let [hoveredElementValue, setHoveredElementValue] = useState<string>(props.value);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    function selectCollapse() {
        setCollapseStatus(!collapseStatus)
    }

    function onItemClick(i: any) {
        props.onChange(i)
        setCollapseStatus(true);
    }

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement)
                        break;
                    }
                }
                props.onChange(props.items[0])
            }
            if (!selectedItem) {
                props.onChange(props.items[0])
            }
        }
        if (e.key === "Escape") {
            setCollapseStatus(true);
        }
        if (e.key === "Enter") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    props.onChange(props.items[i])
                    setCollapseStatus(true)
                }
            }
        }
    }

    return (
        <div tabIndex={0} onKeyUp={onKeyUp} onClick={selectCollapse} className={s.selectM}>
            <div className={s.selectTitle}>{selectedItem && selectedItem.title}</div>
            {!collapseStatus &&
            <div className={s.selectBody}>
                {props.items.map((i:any, index:any) => <div
                    onMouseEnter={() => setHoveredElementValue(i.value)}
                    className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                    onClick={() => {onItemClick(i)}}
                    key={index}>
                    {i.value}:{i.title}
                </div>)}
            </div>}
        </div>
    )
}

export default Select;