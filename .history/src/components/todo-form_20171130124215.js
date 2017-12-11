import React from 'react'

export default (props)=>{
   
    const {currentTodo}=props

    return(
        <form action="">
        <input type="text" value={currentTodo}/>
      </form>
    )
}