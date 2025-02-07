
import React from 'react'
import { useState } from 'react'
import "./App.css"



export default function MyApp() {
  const [things, setlists] = useState([]);
  const [inputval, setinputval] =  useState('');
 
  const add_thing = () =>{
   if(inputval.trim() !== ' '){
    setlists([...things, inputval]);
    setinputval('');
   }
  }
   const remove_thing = (index) => {
    const new_lst = things.filter((_, i) => i !== index);
      setlists(new_lst);
  }
 

  //handleSubmit: function(e){ if (!this.validate()) { e.preventDefault() } }
  //For the John Doe I want to create Profiles in the future
  // It will correct to the user's name
  return (
    <div class = "App">
      <h2>Welcome John Doe, Please add to your list</h2>
      <h3>List 1</h3>
      <label>
       
        <input
         type= 'text'
         value={inputval}
         onChange={(e) => setinputval(e.target.value)}
        />
      <button onClick={add_thing}>Add</button>
      <ul>
        {things.map((things, index) => (
          <li key={index}>
            {things}
            <button onClick={() => remove_thing(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
  
      </label>
    </div>
  );
};
