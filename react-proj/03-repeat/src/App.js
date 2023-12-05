import './App.css';
import ListMap from './components/ListMap'
import ListMap_Prac from './components/ListMap_Prac'
import FuncRef from './components/FuncRef'
import ClassRef from './components/ClassRef'
import ScrollBox from './components/ScrollBox'


function App() {
  return (
    <div >
      <ListMap />
      <ListMap_Prac />

      <br />
      <br />
      <br />
      <FuncRef />
      <ClassRef />
      <ScrollBox/>
    </div>
  );
}

export default App;
