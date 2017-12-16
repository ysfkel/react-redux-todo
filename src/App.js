import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import Message from './components/message'
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router >
            <div className="Todo-App">
           <Message />
            <TodoForm />
            <Route path='/:filter?' render={({match})=>(
                 <TodoList filter={match.params.filter}/>
            )}/>
           
            <Footer/>
            <Router/>
        </div>
        </Router>
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

// const mapStateToProps = (state) => state
/**
 * mapDispatchToProps is a function that accepts the dispatch function 
 * from our store and returns object that contains dispatch funcions
 */
//// const mapDipatchToProps=(dispatch)=>bindActionCreators({updateCurrent},dispatch)

/**
 * connect gives a nice alternative to keep code succinct
 * instead of wrapping action creators and dispatch calls manually
 * or with bind action creators like we are doing above, we can just pass
 * in an object and our action creators and let connect handle mapping
 */

// const mapStateToProps = (state) => state
// const mapDipatchToProps={updateCurrent}

// const connectApp =connect(mapStateToProps,mapDipatchToProps)(App)
// export default connectApp

export default App

