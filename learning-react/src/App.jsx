import { useState } from 'react';
import { useEffect } from 'react';
// import './App.css';
import Naukri from './components/Naukri';
import Todo from './components/Todo';
// import Counter from './components/Counter';
// import Mobile from './components/Mobile';
function App() {
  const [show,setShow]=useState(true);
  
  return (
    // <Counter/>
    // <Mobile/>
    <div className='App'>
      {/* <button onClick={()=>{
        setShow(!show);
      }}>{show ?"Hide" : "Show"} Todos</button>
      {show?<Todo/>:null} */}
      
      <Naukri/>
      
    </div>
  );
}
export default App;
