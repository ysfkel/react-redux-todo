import React from 'react'

export default (props)=>{
   
    const {currentTodo,currentTodoChangeHandler}=props
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