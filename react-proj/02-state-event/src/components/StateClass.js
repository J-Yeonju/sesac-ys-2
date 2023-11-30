import { Component } from "react";

class StateClass extends Component {
    // 옛날 방식
    // constructor(props) {
    //     super(props)         // super() 부모 클래스의 생성자
    //     // super를 실행시켜야 this 객체를 사용할 수 있다.

    //     this.state = {
    //         number: 0 ,
    //         text: "hello"
    //     }
    // }

    // 만약 생성자를 구현하지 않으며느 기본 생성자가 자동으로 실행됨
    // constructor(props) {
    //    super(props)
    //  }


    // 최근 방식 (훨씬 간단해용)
    state = {
        number: 0 ,
        text: "hello"
    };

    render() {
        // const { number } = state.state;   구조분해
        return (
        <>
            <div>props 예시 {this.props.name}</div>
            <h3>클래스형 컴포넌트 state 공부</h3>
            <div>
                number state value {this.state.number}{" "}
                <button 
                    onClick={()=>{
                        //state변경은 보통 일반 변수 변경 시키듯이 변수에 값을 재할당 하는 것이 아니고,
                        //state를 변경 시키는 함수를 사용한다. 클래스형 컴포넌트는 setState 메소드가 제공됨

                        // this.setState({number: this.state.number + 1});
                        // this.setState({number: this.state.number + 1});   

                        //비동기 처리라서 두번 선언해도 둘이 동시에 완료가 되어서 1만 증가됨
                        // 만약 setState를 연달아 2번 사용해야할 때, 위처럼 사용하면 원하는 결과를 얻을 수 없음.
                        // setState는 비동기로 실행이 되기 때문

                        this.setState((prevState) => { 
                            return {number : prevState.number + 1 } 
                        });
                        this.setState((prevState) => ({number : prevState.number + 1 }));

                        // 원래처럼 객체가 아니라 콜백함수
                        // 동기처리가 된다. 위가 완료되고 아래 진행 
                        // 위 코드 두번은 가독성이 떨어진다.  아래 코드처럼 써도 된다. 리턴값만 화살표 뒤에 써도 됨.


                    }}
                >
                    +2
                </button>
            </div>
        </>
        );
    }
}

export default StateClass;