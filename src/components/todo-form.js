import React,{Component}from 'react'
import {connect} from 'react-redux'
import {updateCurrent,saveTodo} from '../reducers/todo'

class TodoForm extends Component{

    constructor(){
        super()
        this.handleInputChange=this.handleInputChange.bind(this)
    }
   
     handleInputChange=(e)=>{
        const value=e.target.value
        this.props.updateCurrent(value)

    }

    handleSubmit=(e)=>{
       e.preventDefault()
       this.props.saveTodo(this.props.currentTodo)
    }

   render(){
       
       const {currentTodo}=this.props
   
        return(
        <form onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange={this.handleInputChange}
         value={currentTodo}/>
      </form>
    )
   }
}

export default connect(
    (state)=>({currentTodo:state.todo.currentTodo}),
    {updateCurrent,saveTodo}
)(TodoForm)