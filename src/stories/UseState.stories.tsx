import React, {useMemo, useState} from "react";
export default {
    title: "useState demo",
}

function generateData ():number {
    return 12433546346334
}

export const Example1 = () => {
    const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        </>
}