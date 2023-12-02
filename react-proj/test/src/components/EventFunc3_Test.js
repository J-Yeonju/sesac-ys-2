import { useState } from "react";

function EventFunc3_Test() {
    const [img, setImg] = useState("/hamImage/ham1.jpg")
    const [bgColor, setBgColor] = useState("")
    const [color, setColor] = useState("black")
    const [content, setContent] = useState("text")
    
    function handleEnter(e) {
        setContent();
    }


    return(
        <>
        <div style={{textAlign:"center"}}>
            <div>
                
                햄스터: 
                <select onChange={(e) => setImg(e.target.value)}>
                    <option value="/hamImage/ham1.jpg">1등</option>
                    <option value="/hamImage/ham2.jpg">2등</option>
                    <option value="/hamImage/ham3.jpg">3등</option>
                    <option value="/hamImage/ham4.jpg">4등</option>
                </select>
                {""}
                배경색: <select onChange={(e) => setBgColor(e.target.value)}>
                    <option value="black">검정</option>
                    <option value="red">빨강</option>
                    <option value="orange">주황</option>
                    <option value="yellow">노랑</option>
                </select>
                {""}
                글자색: <select onChange={(e) => setColor(e.target.value)}>
                    <option value="black">검정</option>
                    <option value="red">빨강</option>
                    <option value="orange">주황</option>
                    <option value="yellow">노랑</option>
                </select>
                <div>
                    <input type="text" onChange={(e) => {setContent(e.target.value) }} onKeyDown={handleEnter} ></input>
                </div>
            </div> 

            <div>
                <img style={{width: 200, height: 200}}  src={img} />
            </div>

            <div
                style={{
                    backgroundColor: bgColor,
                    color: color,
                }}
            >
                {content}
            </div>
        </div>
        </>
    )

}


export default EventFunc3_Test;