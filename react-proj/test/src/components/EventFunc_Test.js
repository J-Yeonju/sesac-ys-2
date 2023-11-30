import { useState } from "react";

function EventFunc_Test() {
    const [msg, setMsg] = useState("검정색글씨")
    const [color, setColor] = useState("black")

    const changeRed = () => {
        setMsg("빨간색글씨");
        setColor("red")
    };

    const changeBlue = () => {
        setMsg("파란색글씨");
        setColor("blue")
    };

    return (
        <>
            <h3 style={{color: color}}>{msg}</h3>
            <button onClick={changeRed}>빨간색</button>
            <button onClick={changeBlue}>파란색</button>
        </>
    )
}

export default EventFunc_Test;