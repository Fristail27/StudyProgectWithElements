import React, {useMemo, useState} from "react";
import Select from "../Components/Select/Select";

export default {
    title: "SelectCities",
}
type CityType = {
    Value: string,
    Country:string,
    Populate: number
}

type StateType = CityType[]

export const SelectCities = () => {
    const initialState : StateType= [
        {Value: "Tambov", Country:"Russia", Populate: 300000},
        {Value: "Moscov", Country:"Russia", Populate: 15000000},
        {Value: "Saint Petersburg", Country:"Russia", Populate: 5000000},
        {Value: "Kiev", Country:"Ukraine", Populate: 3700000},
        {Value: "Minsk", Country:"Belorussia", Populate: 2000000},
    ]
    const [state, setState] = useState<StateType>(initialState)
    return (
        <div>
            <Select items={state}/>
            <Select items={state.map(el => {if (el.Country === "Russia") {return el.Value}})}/>
            <Select items={state.map(el => {if (el.Populate > 4000000) {return el.Value}})}/>
        </div>
    )
}