
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoDisp from './components/TodoDisp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos"
  return (
    <div className="App">
      <Header/>
      <Todo/>
      <TodoDisp url={url}/>
    </div>
  );
}

export default App;
