import React from 'react'



export default (props)=>(
    <div className="Todo-List">
              <ul>
                 {props.todos.map(todo=>{
                    return <li  key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}</li> 
                 })}
              </ul>
          </div>
)