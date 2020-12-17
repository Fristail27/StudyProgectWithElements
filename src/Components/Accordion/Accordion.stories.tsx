import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action("accordion mode change event fired");
const onClickcallback = action("some item was clicked");


export const MenuCollapsedMode = () => <Accordion onClick={onClickcallback} titleValue={"menu"} collapsed={true}
                                                  onChange={callback} items={[]}/>;
export const UserUncollapsedMode = () => <Accordion onClick={onClickcallback} titleValue={"users"} collapsed={false}
                                                    onChange={callback}
                                                    items={[{title: "Alex", value: 1}, {
                                                        title: "Andrew",
                                                        value: 2
                                                    }, {title: "Valera", value: 3}, {title: "LOL", value: 4}]}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion onClick={(id) => {alert(`user with ID ${id}`)}} titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: "Alex", value: 1}, {title: "Andrew", value: 2}, {
                          title: "Valera",
                          value: 3
                      }, {title: "LOL", value: 4}]}/>
}

