import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo reset",
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("component rendered")

    useEffect(()=>{
        console.log("Effect occurred" + counter)
        return ()=> {
            console.log("reset effect" + counter)}
    },[counter])

    return (
        <>
            hello, {counter}
            <button onClick={()=>{setCounter(counter+1)}}>x</button>
        </>
    )
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("component rendered with " + text)

    useEffect(()=>{
        const handler = (e:KeyboardEvent)=>{
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener("keypress", handler)
        return ()=> {
            window.document.removeEventListener("keypress", handler)
        }
    },[text])

    return (
        <>
            typed text: {text}
        </>
    )
};
