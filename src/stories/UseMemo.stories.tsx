import React, {useMemo, useState} from "react";

export default {
    title: "UseMemo",
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let tempResultA = 1
        for (let i = 1; i<=a; i++) {
            let fake = 0
            while  (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *=  i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i<=b; i++) {
        resultB *=  i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for A : {resultA}
            </div>
            <div>
                Result for B : {resultB}
            </div>
        </>
    )

}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("2323")
    return <div>{
        props.users.map((u:any,i:any)=> <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMEMOExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Valera2"])
    console.log("111")
    const addUser = () => {
        const newUsers = [...users, "sveta"+ new Date().getTime()]
        setUsers(newUsers)
    }
    const newArray = useMemo(()=> {
        const newArray=users.filter(u => u.toLowerCase().indexOf("a")> -1)
        return newArray
    }, [users])
    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={()=>{addUser()}}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}
