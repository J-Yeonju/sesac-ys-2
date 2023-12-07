import { useReducer, useState, useCallback} from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "RESET":
      return initialValue;
    default:
      return { value: prevState.value };
  }
};

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트하는 함수 (결국 dispatch가 실행시키는 함수)

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);


  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });

// 지금은 + - 초기화만 하고 있지만, 
// 만약에 곱하기, 나누기 등등 더 많은 연산을 이용한다고 하면?
// 또 컴포넌트 자체가 복잡해져서 코드가 길어진다. 
// state의 변화를 추적하고 싶음 => setState를 일일이 찾아가면서 +1도 되구나,,, -1도 되구나,,, 알게 된다. 
// reducer를 사용한다면 => reducer함수만 읽으면, +1 할 수 있고, -1 할 수 있고, 확실하게 알 수 있다. 
//   const [state, setState] = useState({initialValue});
//   const plus = () => setState({value: state.value + 1});
//   const minus = () => setState({value: state.value - 1});
//   const reset = () => setState(initialValue);

  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multifly}>곱하기</button>
      </div>
    </>
  );
}