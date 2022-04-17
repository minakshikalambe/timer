
import './App.css';
import{Counter} from"./component/Counter"
import{useState} from"react"
function App() {
  const[show, setShow]=useState(true)
  return (
    <div className="App">
    {show ? <Counter/> :null}
    <button
    onClick={()=>{
      setShow(!show)
    }}>
    {show ? "Hide":"show"}Counter</button>
    </div>
  );
}

export default App;
