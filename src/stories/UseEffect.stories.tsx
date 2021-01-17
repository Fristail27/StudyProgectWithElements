import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("simple example")

    useEffect(()=>{
        console.log("useeffect render if counter have changed")
        document.title= counter.toString()
    },[counter])
    useEffect(()=>{
        console.log("useeffect every render")
        document.title= counter.toString()
    })
    useEffect(()=>{
        console.log("useeffect render only first time")
        document.title= counter.toString()
    },[])

    return (
        <>
            hello, {counter}
            <button onClick={()=>{setFake(fake+1)}}>+</button>
        </>
    )
}

export const SimpleSetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("simple example")

    useEffect(()=> {
        setInterval(()=> {
            setCounter((state)=> state+1)
        }, 1000)
    })

    return (
        <>
            hello, {counter}
            <button onClick={()=>{setFake(fake+1)}}>+</button>
        </>
    )
}