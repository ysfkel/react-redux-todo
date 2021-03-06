import React from 'react'
import {connect} from 'react-redux'


const TodoList= (props)=>(
    <div className="Todo-List">
              <ul>
                 {props.todos.map(todo=>{
                    return <li  key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}</li> 
                 })}
              </ul>
          </div>
)
 

export default connect(
    (state)=>({todos:state.todos})
)(TodoList)