import { useState } from "react";

const [a, b, c] = ["aaa", "bbb", "ccc"]
console.log(a);  // aaa
console.log(b);  // bbb
// 배열에 함수가 담겨 있다. 비슷한 일처리가 대부분 보통 배열은 같은 형태의 자료형을 사용하는 것이 좋다. 


function StateFunc () {
    // useState는 배열을 반환(return) -> 그 배열을 구조분해하여 number와 setNumber 선언
    // [state 변수, state를 변경시키는 함수]
    const [number, setNumber11] = useState(0);      //변수명 내맘
    const [text, setText] = useState("hello");

    return (
        <>
            <h3>함수형 컴포넌트 state 공부</h3>
            <div>
                number state value {number}{" "} 
                <button 
                    onClick={() => {
                        // 아래처럼 하면 +2가 되지 않음 
                        // setNumber11(number + 1);
                        // setNumber11(number + 1);

                        setNumber11((prevNumber)=> prevNumber + 1)
                        setNumber11((prevNumber)=> prevNumber + 1)
                    }}
                >
                    +2
                </button>
            </div>
        </>
    );

}

export default StateFunc;