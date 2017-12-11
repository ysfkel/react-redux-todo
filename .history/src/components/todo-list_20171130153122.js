import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../reducers/todo'

class TodoList extends Component {
    render(){
        return(
            <div className="Todo-List">
            <ul>
               {this.props.todos.map(todo=>{
                  return <li  key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}</li> 
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
   (state)=>({todos:state.todos}),
   {fetchTodos}
)(TodoList)


