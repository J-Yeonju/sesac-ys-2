import { Component } from "react";

class StateClass_Test extends Component {
    state = {
        number: 0 ,
    };

    render() {
        return (
        <>
            <h3>클래스형 컴포넌트 state 실습</h3>
            <div>
                {this.state.number}{" "}
                <button onClick={() => {
                   this.setState({ number: this.state.number +2 }) 
                }}> +2 해주세요 </button> 
                {" "}
                <button onClick={() => {
                   this.setState({ number: this.state.number -1 }) 
                }}> -1 해주세요 </button> 
            </div>
        </>
        );
    }
}


export default StateClass_Test;