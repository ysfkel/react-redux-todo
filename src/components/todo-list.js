import React,{Component} from 'react'

import {connect} from 'react-redux'
import {fetchTodos,toggleTodo,deleteTodo,getVisibleTodos} from '../reducers/todo'



const TodoItem=({id,name,isComplete,toggleTodo,deleteTodo})=>(
   
         <li >
          <input type="checkbox"
           onChange={()=>toggleTodo(id)}
          checked={isComplete} />{name} <button onClick={()=>deleteTodo(id)}>delete</button></li> 
    
)

class TodoList extends Component {

    componentDidMount(){
   
        this.props.fetchTodos()
    }
    render(){
      
        return(
            <div className="Todo-List">
            <ul>
            {this.props.todos.map(todo=>{
                return <TodoItem  key={todo.id} {...todo} 
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}/>
             })}
            </ul>
        </div>
        )
    }
}

/**
 * connect accepts an argument called mapStateToProps
 * mapsStateToProps is a function that accepts an entire state
 * and returns a function that reporesnts the subset of that state 
 * that we want passed into our component
 */

export default connect(
    //ownProps gives us the props that have been attached to the instance of our component

   (state,ownProps)=>({todos:getVisibleTodos(state.todo.todos,ownProps.filter)}),
  
   {fetchTodos,toggleTodo,deleteTodo}
   
)(TodoList)


