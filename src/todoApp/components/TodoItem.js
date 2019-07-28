import React from 'react'
import todosData from "../todosData"

function Todoitem(props){
  
return(
        <div className="todo-item">
           <p>{props.tizio.text } 
           {props.tizio.completed.toString()} </p>
           <p>The number of the Task is: {props.tizio.id }</p>
           

           <input type="checkbox" />
        
          
         
        </div>
    ) 
}

export default Todoitem