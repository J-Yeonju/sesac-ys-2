import { useState } from "react";
import ColorSelect from "./ColorSelect";

function Practice4 () {
    const [fruit, setFruit] = useState("")
    const [bgColor, setBgColor] = useState("black")
    const [Color, setColor] = useState("white")
    const [Content, setContent] = useState("text")

    return(
    <>
        <label>과일</label>
        <select onChange={(e) => {
            setFruit(e.target.value);
        }}>
            <option value="ham1">사과</option>
            <option value="ham2">바나나</option>
            <option value="ham3">포도</option>
            <option value="ham4">복숭아</option>
        </select>

        <ColorSelect 
            mode="배경"
            onChangeHandler={(e) => {
                setBgColor(e.target.value);
        }}/>

        <ColorSelect 
            mode="글자"
            onChangeHandler={(e) => {
                setColor(e.target.value);
        }}/>

        <label>내용: </label>
        <input 
            type="text" 
            value={Content} 
            onChangeHandler={(e) => {
                setContent(e.target.value);
        }}/>

        <br />
        <img src={'fruit'} width={200} />
        <div style={{backgroundColor: bgColor, color: Color}}>
            {Content}
        </div>
    </>
    );
}

export default Practice4;