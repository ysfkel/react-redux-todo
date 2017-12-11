import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const currentTodoChangeHandler=(val)=>store.dispatch(
    {
        type:'UPDATE_CURRENT_TODO',
         payload:val
    }
)

const render=()=>{
    const state=store.getState()
    ReactDOM.render(<App {...state} 
        currentTodoChangeHandler={currentTodoChangeHandler}/>, document.getElementById('root'));
}
render()

//rerender application when state object chanes

store.subscribe(render)



registerServiceWorker();
