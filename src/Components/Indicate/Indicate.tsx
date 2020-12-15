import React, {useState} from "react";
import s from "./Indicate.module.css"


const Indicate = function (props: any) {

    let [on, setOn] = useState(false)

    const OnStyle = {
        width: "150px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: (on === true) ? "green": "white",
        border: "2px solid",
    };
    const OffStyle = {
        width: "150px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        border: "2px solid",
        backgroundColor: (on === true) ? "white": "red",
        marginLeft: "5px",
    };
    const StatusIndicator = {
        borderRadius: "40px",
        width: "40px",
        height: "40px",
        backgroundColor: (on === true) ? "green": "red",
        marginLeft: "20px",
        border: "2px solid",
    };
    return (
        <div className={s.main}>
            <div style={OnStyle} onClick={() => {setOn(true)}}>
                <div className={s.onIn}>ON</div>
            </div>
            <div style={OffStyle} onClick={() => {setOn(false)}}>
                <div className={s.offIn}>OFF</div>
            </div>
            <div style={StatusIndicator}></div>
        </div>
    )
}

export default Indicate
