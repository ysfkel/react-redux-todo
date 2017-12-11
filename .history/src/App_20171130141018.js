import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import {connect} from 'react-redux'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
            <TodoForm currentTodo={this.props.currentTodo}
            currentTodoChangeHandler={this.props.updateCurrent}></TodoForm>
            <TodoList todos={this.props.todos}></TodoList>
        </div>
      </div>
    );
  }
}

//export default App;
/**
 * connect accepts an argument called mapStateToProps
 * mapsStateToProps is a function that accepts an entire state
 * and returns a function that reporesnts the subset of that state 
 * that we want passed into our component
 */

const mapStateToProps = (state) => state
/**
 * mapDispatchToProps is a function that accepts the dispatch function 
 * from our store and returns object that contains dispatch funcions
 */
// const mapDipatchToProps=(dispatch)=>bindActionCreators({updateCurrent},dispatch)

/**
 * connect gives a nice alternative to keep code succinct
 * instead of wrapping action creators and dispatch calls manually
 * or with bind action creators like we are doing above, we can just pass
 * in an object and our action creators and let connect handle mapping
 */
const mapDipatchToProps={updateCurrent}

const connectApp =connect(mapStateToProps,mapDipatchToProps)(App)
export default connectApp

