import './App.css';
import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';
// import ClassPropsEx from './components/ClassPropsEx';
import PropsTest from './components/propsTest';

function App() {
  return (
    <div>
      <br />
      {/* <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      {/* <ClassComponent></ClassComponent> */}
      <FuncPropsEx title="sesac" content="hello" number={5}></FuncPropsEx>
      <FuncPropsEx number={5} />


      <Section title="sesac 영역">
        <div>sesac 영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <PropsTest food = "애플포도 탕후루"/>

    </div>
  );
}










// function Test() {
//   const name = "불이";
//   const animal = "아기강아지";
//   const a = 5;
//   const b = 3;


//   return (
//   <>
//     <h2>
//       제 반려 동물의 이름은 {name}입니다. <br /> 
//       {name}는 {animal}입니다.
//     </h2> 

//     <h4>{ 3+5 == 8 ? "정답입니다" : "오답입니다" }</h4>

//     <h5>{ a > b  && "a가 b보다 큽니다" }</h5>

//     <form className='form'>
//       <div className='box'>
//         <div className='title'>hello world</div>

//         <div>
//           아이디 : 
//           <input type='text'></input>
//         </div>
//         <div>
//           비번 : 
//           <input type='text'></input>
//         </div>
//       </div>
//     </form>

//   </>
//   );
// }
export default App;
