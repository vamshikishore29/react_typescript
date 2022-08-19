import React from 'react';
import './App.css';
import { Person } from './components/Person';
import InputRef from './components/InputRef'


const name:string = "henry"
const age:number=23 
const gender:string="male"

const details ={  
  name:"bob",
  age:22,
  gender:"male"
}

function App() {

  return (
    
      <div className="App"> 
      <Person name={name} age={age} gender={gender} details={details} />
      <InputRef />
    </div>

    
  );
}

export default App;
