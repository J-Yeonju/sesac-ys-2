import { useState } from "react";

function EventFunc2_Test() {
    const [msg, setMsg] = useState("안녕하세요")
    const [btn, setBtn] = useState("사라져라-..-")

    const changeMsg = () => {
        if (msg === "안녕하세요") {
            setMsg("");
            setBtn("이거 보세요")
        } else {
            setMsg("안녕하세요");
            setBtn("사라져라-..-")
        }
    };

    return (
        <>
            <br />
            <br />
            <button onClick={changeMsg}>{btn}</button>
            <h3>{msg}</h3>
        </>
    )
}

export default EventFunc2_Test;