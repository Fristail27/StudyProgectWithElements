import React, {useEffect, useState} from "react";


const Clock: React.FC = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return ()=> {
            clearInterval(intervalId)
        }
    }, [])

    function get2DigitsString (number:number) {
        return number < 10 ? `0${number}` : number
    }

    return (<div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>)
}

export default Clock