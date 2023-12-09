import { useCallback, useState } from "react";

export default function UseCallbackEx() {
        const [text, setText] = useState("");

        const handleOnChange = (e) => {
            setText(e.target.value);
        }
    return(
        <>
            <h3>useCallbackEx 공부</h3>

            <input type="text" value={text} onChange={handleOnChange} /> 
        </>
    )
}