import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../todosData"

function MainComponent() {
  const todoItems = todosData.map(item => <TodoItem key={item.id}  todoitem={item} />)
  return (
     <div className="todo-list">
       {todoItems}
     </div> 
  )
}

export default MainComponent