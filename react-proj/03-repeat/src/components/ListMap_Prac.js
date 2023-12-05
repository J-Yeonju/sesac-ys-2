import { useState } from "react";

function ListMap_Prac() {
    const infoList = [
        { name: "코디", email: "codi@gmail.com"},
        { name: "연주", email: "yeonju@gmail.com"}
    ]

    const [Info, setInfo] = useState(infoList);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addInfo = () => { 
        const newObj = {
            name: name,
            email: email,
        };
        const newInfo = Info.concat(newObj);
        console.log();

        setInfo(newInfo);
        setName("");
        setEmail("");
    };


    const deleteInfo = (name) => {
        const newInfo = Info.filter((value) => value.name != name);
        setInfo(newInfo);
    }


    return (
    <>
        <h3>map 실습</h3>

        <label>작성자: </label>
        <input 
            placeholder="이름"
            type="text"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
        /> {""}
        <label>제목: </label>
        <input 
            placeholder="이메일"
            type="text"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addInfo();
                }
            }}
        /> {""}
        <button onClick={addInfo}>등록</button>

        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>작성자</td>
                    <td>제목</td>
                </tr>
            </thead>
            <tbody>
                {Info.map((value) => {
                    <tr key={value.name} onDoubleClick={() => deleteInfo(value.name)}>
                        <td>{value.name}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    );
}

export default ListMap_Prac;