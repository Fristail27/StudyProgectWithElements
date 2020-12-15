import React from "react";
import s from "./../Indicate/Indicate.module.css"


const ControlIndicate = function (props: any) {

    const OnStyle = {
        width: "150px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: (props.status) ? "green": "white",
        border: "2px solid",
    };
    const OffStyle = {
        width: "150px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        border: "2px solid",
        backgroundColor: (props.status) ? "white": "red",
        marginLeft: "5px",
    };
    const StatusIndicator = {
        borderRadius: "40px",
        width: "40px",
        height: "40px",
        backgroundColor: (props.status) ? "green": "red",
        marginLeft: "20px",
        border: "2px solid",
    };
    return (
        <div className={s.main}>
            <div style={OnStyle} onClick={() => props.edit(true)}>
                <div className={s.onIn}>ON</div>
            </div>
            <div style={OffStyle} onClick={() => props.edit(false)}>
                <div className={s.offIn}>OFF</div>
            </div>
            <div style={StatusIndicator}></div>
        </div>
    )
}

export default ControlIndicate;