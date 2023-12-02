import {useRef} from "react";

function ScrollBox() {
    const box = useRef();
    const scrollTop = () => {
        box.current.scrollTop = 0;
    };
    return(
        <>
            <div className="scroll-box" ref={box}>
                <h1>hello</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
                <h1>yeonju</h1>
            </div>
            <button onClick={scrollTop}>위로</button>
        </>
    );
}

export default ScrollBox;