import React from "react";
import {ClockViewPropsType} from "./Clock";

function get2DigitsString (number:number) {
    return number < 10 ? `0${number}` : number
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (<>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>)
}