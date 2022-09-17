//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CurrentTime from './component/CurrentTime';
import StopWatch from './component/StopWatch';

function App() {
  let [count , setCount]=useState(0);
  
  
  return (
    <div className="App">
   
    <StopWatch/>
    </div>
  );
}

export default App;
