import React from 'react'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'
const TodoForm =(props)=>{
   
    const {currentTodo,updateCurrent}=props
    const handleInputChange=(e)=>{
        const value=e.target.value
        currentTodoChangeHandler(value)

    }

    return(
        <form action="">
        <input type="text" 
        onChange={handleInputChange}
         value={currentTodo}/>
      </form>
    )
}

export default connect(
    (state)=({currentTodo:state.currentTodo},{updateCurrent})
)(TodoForm)