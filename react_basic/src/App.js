import React from 'react';
import './App.css';
 import Hello from './components/Hello';
 //import ClassComponent from './components/ClassComponent';
 import Expenses from './components/Expenses';
 
function App() {
  
  return (
    <div className="App">
      <Hello msg= 'React Js'/>       
      <Expenses/>
     {/* <ClassComponent/> */}
    </div>
  );
}

export default App;
