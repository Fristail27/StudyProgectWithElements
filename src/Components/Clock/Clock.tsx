import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClock";
import {DigitalClockView} from "./DigitalClock";

type PropsType = {
    mode: "analog" | "digital"
}

const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return ()=> {
            clearInterval(intervalId)
        }
    }, [])



    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
            view = <DigitalClockView date={date}/>

    }

    return (<div>
        {view}
    </div>)
}

export type ClockViewPropsType = {
    date: Date
}

export default Clock