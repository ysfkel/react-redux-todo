import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import {connect} from 'react-redux'
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
            currentTodoChangeHandler={this.props.currentTodoChangeHandler}></TodoForm>
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
const mapStateToProps = (state) => {
  console.log('my state',state)
  return state
  // return {
  //   prop: state.prop
  // }
}
const connectApp =connect(mapStateToProps)(App)
export default connectApp
