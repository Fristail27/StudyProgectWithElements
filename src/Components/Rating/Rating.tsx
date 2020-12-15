import React, {useState} from "react";

const numbersStars = 5

const Rating = function (props: any) {

    let stars = []

    let [selected, onSelected] = useState(0)

    for(let i = 0; i< numbersStars; i++) {
        stars.unshift(numbersStars-i)
    }
    let stars2 = stars.map((a) => {return <Star key={a} id={a} onSelected={onSelected} selected={selected >= a}/>})
    return (
        <div>
            {stars2}
        </div>
    )
}

const Star = function (props: any) {

    const styleStar = {
        display: "inline-block",
        width: "45px",
        border: "1px solid",
        marginRight: "5px",
        fontWeight: (props.selected) ? 700: 400,
        backgroundColor: (props.selected ? "yellow": "white")
    }


    return <div onClick={() => {props.onSelected(props.id)}} style={styleStar} >STAR </div>
}

export default Rating;