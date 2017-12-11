import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../reducers/todo'

class TodoList extends Component {

    componenDidMount(){
        console.log('FT ,,EHC')
        //this.props.fetchTodos()
    }
    render(){
        return(
            <div className="Todo-List">
            <ul>
              
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

export default TodoList
// connect(
//    (state)=>({todos:state.todos}),
//    {fetchTodos}
   
// )(TodoList)


