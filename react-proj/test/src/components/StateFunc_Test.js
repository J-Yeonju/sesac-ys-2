import { useState } from "react";

function StateFunc_Test () {
    const [number, setNumber] = useState(0);     
    const increase = () => setNumber( (prevNum) => prevNum +1 );
    const decrease = () => setNumber( (prevNum) => prevNum -2 );


    return (
        <>
            <h3>함수형 컴포넌트 state 실습 </h3>
            {number} {" "}
            <button onClick= {increase}> +1 해요 </button>
            <button onClick= {decrease}> -2 해요 </button>
        </>
    );
}

export default StateFunc_Test;