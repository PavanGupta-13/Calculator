import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./comptodolist/Todo";
import CakeContainer from "./compcakeshop/cakeContainer";
import {Provider} from 'react-redux';
import store from "./redux/cakeStore";
import IceCreamContainer from "./compcakeshop/iceCreamContainer";
import Usersdata from "./compusers/Usersdata";


function App() {
  // const [loading,setLoading] = useState(true);
  // const [tours,setTours] = useState([
  //   {
  //     place:"DC",cost:"2000"
  //   },
  //   {
  //     place:"AP",cost:"3000"
  //   }
  // ])

  // if(loading){
  //   return (<>
  //   <Loading></Loading>
  //   <button onClick={()=>setLoading(!loading)}>View Page</button>
  //   </>);

  // const [people,setPeople] = useState(Data);
  // const [count,setCount] = useState(0);

  // const [number,setNumber] = useState([1,2,3,4,5]);

  // const filterItems = (category)=>{
    
  //   if(category==="all"){
  //     setItems(Items);t.push(element);
  //     }
  //     setItems(newList);
  //   })};
  // }

  // const [items,setItems] = useState(Items);

  // const [count,setCount] = useState(0);
  // const [items,setItems] = useState([]);

  // const handleForm = (e)=>{
  //   e.preventDefault()
  //   let amount = parseInt(count)
  //   setItems(Data.slice(0,amount))
  // }eople}></BdayList>
    //   </div>
    //   <button onClick={()=>{setPeople([])}}>Clear All</button>
    // </>

    return (


      // <><Todo/>
      //   </>
    <>
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/>
        <IceCreamContainer/> */}
        {/* <Usersdata/> */}
      </div>
    </Provider>
    </>
  // <>
  // <Reviews people={people} count={count}/>
  // </>

    // <>
    //   <Navbar></Navbar>
    // </>

    // <>Todo</>

    // <>
    //   <div className="container-sm"><h1 className="display-1" style={{textAlign:"center"}}>Our Menu</h1>
    //   <Categories filterItems={filterItems}/>
    //   <Menu items={items} />
      
    //   </div>
    // </>

    // <>
    // <Groclist style={{alignItems:"center"}}></Groclist>
    // </>

    // <>
    //   <Slider items={items}/>
    // </>
    
    // <>
    //   <h2 className="display-2" style={{textAlign:"center"}}>PARA GENERATOR</h2>
    //   <form onSubmit={handleForm} style={{textAlign:"center", marginTop:"70px"}}>
    //     <label>Paragraphes</label>
    //     <input type="number" onChange={(e)=>{setCount(e.target.value)}} value={count} style={{marginLeft:"50px" ,marginRight:"50px"}}></input>
    //     <button type="submit" className="btn btn-primary">Generate</button>
    //   </form>
    //   {items.map((i,index)=>{
    //     return (<p className="display-7" style={{textAlign:"justify", color:"hotpink"}} key={index}>{i}</p>);
    //   })}
    // </>

    // <> <Accordion number={number}/> </>
  // <>
  //   <Tours tour={tours}></Tours>
  //   <button>Delete</button>
  // </>  

  
    )

  }


export default App;



