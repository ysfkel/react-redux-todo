import React from 'react'
import {connect} from 'r'


const TodoList= (props)=>(
    <div className="Todo-List">
              <ul>
                 {props.todos.map(todo=>{
                    return <li  key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}</li> 
                 })}
              </ul>
          </div>
)

