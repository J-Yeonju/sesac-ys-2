import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import EventClass from './components/EventClass';
import EventFunc from './components/EventFunc';

function App() {
  return (
    <div>

      <StateClass name="yeonju" />

      <StateFunc />
      <EventClass />
      <EventFunc />
    </div>
  );
}

export default App;
