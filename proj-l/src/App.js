
import './App.css';
import Title from './comps/Title';
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from './comps/Navb';
// import PBody from './comps/PBody';
import RForm from './comps/RForm';
import background from "./comps/street-light.jpg"
// import Details from './comps/Details';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './comps/Home';
import OurTeam from './comps/OurTeam';
import { useState } from 'react';


function App() {
  const [name,setName] = useState('')

  const recieveName = (Rname)=>{
    setName(Rname)
  }

  return (
    <div className="App" style={{backgroundImage:`url(${background})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height:"100vh", opacity:"0.8"}}>
      <BrowserRouter>
        <Title/>
        <Navb/>
        <Route path="/home" component={Home}></Route>
      {/* <PBody/> */}
      APP
      <Route path="/ourteam" component={()=><OurTeam name={name}/>}></Route>
      
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", maxHeight:"100vh"}}><Route path="/form" component={()=><RForm recieveName={recieveName}></RForm>}></Route></div>
      {/* <Details/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
