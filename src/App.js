
import React from 'react';
import './svg/App.css';
import {useState} from 'react';
import Animalshow from  './Animalshow';

function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}

 


function App()
{ 
    const [animals,setAnimals]=useState([]);

    const handleClick=()=>{
    setAnimals([...animals,getRandomAnimal()]);
    
        
    }
    const renderedAnimals=animals.map((animal,index)=>{
        return <Animalshow type={animal} key={index}/>
    });
    return (
   <div className='app'> 
    
   <button onClick={handleClick}>Add Animal</button>
   <h1> Animals are:</h1>
  <div className='animal-list'>{renderedAnimals}</div>
   
  
    </div>
    );
}
export default App;