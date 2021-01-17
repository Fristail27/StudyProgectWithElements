import React, {useCallback, useMemo, useState} from "react";
import Select from "../Components/Select/Select";

export default {
    title: "SelectCities",
}
type CityType = {
    value: string,
    Country:string,
    Populate: number
}

type StateType = CityType[]

let state : StateType= [
    {value: "Tambov", Country:"Russia", Populate: 300000},
    {value: "Moscov", Country:"Russia", Populate: 15000000},
    {value: "Saint Petersburg", Country:"Russia", Populate: 5000000},
    {value: "Kiev", Country:"Ukraine", Populate: 3700000},
    {value: "Minsk", Country:"Belorussia", Populate: 2000000},
]

const SelectRus = (props: {items: StateType}) => {
    let [selectValue, setSelectValue] = useState<string|null>(null)

    const onChangeHandler = (i:any) => {
        setSelectValue(i.value)
    }

    return (
        <Select value={selectValue} onChange={onChangeHandler} items={props.items}/>
    )
}

const SelectRusMemo = React.memo(SelectRus)

export const SelectCities = () => {
    const initialState : StateType= [
        {value: "Tambov", Country:"Russia", Populate: 300000},
        {value: "Moscov", Country:"Russia", Populate: 15000000},
        {value: "Saint Petersburg", Country:"Russia", Populate: 5000000},
        {value: "Kiev", Country:"Ukraine", Populate: 3700000},
        {value: "Minsk", Country:"Belorussia", Populate: 2000000},
    ]
    const [state, setState] = useState<StateType>(initialState)

    let [selectValueDef, setSelectValueDef] = useState<string|null>(null)
    let [selectValueNum, setSelectValueNum] = useState<string|null>(null)

    const SelectAll = (props:any) => {
        return (
            <Select items={state} value={selectValueDef} onChange={(i:any)=> {setSelectValueDef(i.value)}}/>
        )
    }
    const SelectPop = (props:any) => {
        return (
            <Select items={state.filter(el => el.Populate > 4000000)}  value={selectValueNum} onChange={(i:any)=> {setSelectValueNum(i.value)}}/>
        )
    }
    // const newItems = useMemo(()=> {
    //     const newItems= state.filter(el => el.Country === "Russia")
    //     return newItems
    // }, [state.filter(el => el.Country === "Russia").length])



    const newItems2 = state.filter(el => el.Country === "Russia")


    return (
        <div>
            <SelectAll/>
            <SelectRusMemo items={newItems2}/>
            <SelectPop/>
            <button onClick={()=>{setState([...state, {value: "123", Country:"1", Populate: 3000}])}}>+</button>
        </div>
    )
}