import React, {useMemo, useState} from "react";
import Clock from "./Clock";

export default {
    title: "clock demo",
    component: Clock
}

export const BaseAnalogExample = () => {
    return <Clock mode="analog"/>
}

export const BaseDigitalExample = () => {
    return <Clock mode="digital"/>
}