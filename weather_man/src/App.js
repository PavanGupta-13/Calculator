
import './App.css';
import Background from './components/Background';
import Tempcomp from './components/Tempcomp';

function App() {
  return (
    <div className="App">
      <div style={{zIndex:"1", position:"absolute"}}><Tempcomp/></div>
      <div style={{zIndex:"2", position:"absolute"}}><Background/></div>
    </div>
  );
}

export default App;
