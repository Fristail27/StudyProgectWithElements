import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import Select from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
} as Meta;

const callback = action("accordion mode change event fired");

const arrayItems = [
    {title: "Alex", value: '1'},
    {title: "Andrew", value: '2'},
    {title: "Valera", value: '3'},
    {title: "LOL", value: '4'},
    {title: "LOL", value: '5'},
    {title: "LOL", value: '6'},]

export const SelectComponent = () => {
    let [selectValue, setSelectValue] = useState<string|null>(null)
    const onChangeHandler = (i:any) => {
        setSelectValue(i.value)
    }
    return <Select onChange={onChangeHandler} value={selectValue} items={arrayItems}/>
};