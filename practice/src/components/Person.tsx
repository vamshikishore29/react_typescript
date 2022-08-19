import * as React from "react";
import { useContext } from "react";
import {PersonContext} from './PersonContext'

interface Props{
    name:string 
    age:number 
    gender:string
    details:{
        name:string 
        age:number
        gender:string
    }
  }

export const Person: React.FC<Props> = ({name , age , gender , details}) => {
    const [country , setcountry] = React.useState("")
    const Per = useContext(PersonContext)
    
    
  return (
    <div>
      <h1>hello {name} {details.name}</h1>
      <p>{age} {details.age}</p>
      <p>{gender}  {details.gender}</p>
      <input type="text" placeholder="Write down your country..." onChange={(e)=>setcountry(e.target.value)} />
      <br/>
      {country}
      {Per.location}
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
      </table>
    </div>
  );
};

