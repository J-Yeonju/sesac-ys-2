import { Component } from "react";

class EventClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello",
        };

        // 함수 선언문을 사용하여 멤소드를 만들 때
        // 메소드 내부에서 class의 this를 사용하고 싶을 경우, (함수에다가 bind를 직접 해주어야 한다.)
        // 생성자 내에서 this를 bind 해주는 작업을 거쳐야함  // 다 this를 써주어야 한다. 
        // 함수 선언문을 이용하여 선언된 메소드는 this 객체를 직접 바인딩 해줘야지
        // handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다. 
        this.handleOnClick = this.handleOnClick.bind(this);     //this를 다시 정의한다. 여기서 넘겨준(this)를 가리키게 된다. 
    }

    //함수 선언문을 사용하여 메소드를 정의
    // 함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됨.   this 자체는 undefined
        //해결법 1. 생성자 내부에서 this를 원하는 것으로 바인딩
        //해결법 2. 함수 표현식을 사용한다.  
    // 함수 선언문은 동적바인딩을 하기 때문애 함수가 사용될 때 this가 결정된다. 
    handleOnClick() {
        console.log(this);          //새로 this를 만들어준다. 
        this.setState({ msg: "bye" });
    }

    // 함수 표현식
    // this    이렇게 쓸 경우 this를 bindig해주어야 한다. 
    // handleOnClick2() {
    //     console.log(this);          //부모 this를 가져온다. 
    //     this.setState({ msg: "hello" });
    // }
    
    // 함수 표현식은 함수가 선언될 때 this를 결정 지음. 함수를 선언하는 코드를 읽을 때 this가 결정된다. 
    handleOnClickHello = (e) => {     
        console.log(e); 
        this.setState({ msg: "hello" });
    }

    render() {
        return (
            <>
                <h3>클래스형 컴포넌트 event 핸들링 공부</h3>

                {this.state.msg}
                <button 
                    onClick={this.handleOnClick}        //이곳에서 함수 선언! (실행 아님)
                >
                    잘가
                </button>
                <button 
                    onClick={this.handleOnClickHello}   
                >
                    안녕
                </button>
                <button onClick={(e) => {
                    // e는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고 있음
                    // 그 중에 target이라는 거에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있음.
                    console.log(e.target);
                    console.log(e.type);
                }}> test </button>


            </>
        )
    }
}

export default EventClass;