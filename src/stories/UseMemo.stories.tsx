import React, {useCallback, useMemo, useState} from "react";

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

type PropsType = {
 books: Array<string>
 addBook: () => void
}

const BooksSecret = (props: PropsType) => {
    return <div>
        <button onClick={()=>{props.addBook()}}>Add book</button>
        {
        props.books.map((u:any,i:any)=> <div key={i}>{u}</div>)
    }</div>
}

const Books = React.memo(BooksSecret)

export const HelpsForReactMEMOExample = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    // const memoizedAddBook = useMemo(()=>{
    //     return () => {
    //         const newUsers = [...books, "Angular"+ new Date().getTime()]
    //         setBooks(newUsers)
    //     }
    // }, [books])

    const memoizedAddBook = useCallback(()=>{
        return () => {
            const newUsers = [...books, "Angular"+ new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])
    const newArray = useMemo(()=> {
        const newArray=books.filter(u => u.toLowerCase().indexOf("a")> -1)
        return newArray
    }, [books])
    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        <Books books={newArray} addBook={memoizedAddBook}/>
    </>
}
