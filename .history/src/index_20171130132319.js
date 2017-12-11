import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'

// const currentTodoChangeHandler=(val)=>store.dispatch(
//     updateCurrent(val)
// )

const actions=bindActionCreators({
    currentTodoChangeHandler:updateCurrent,
},store.dispatch)
const render=()=>{
    const state=store.getState()
    ReactDOM.render(<App {...state} 
        currentTodoChangeHandler={currentTodoChangeHandler}/>, document.getElementById('root'));
}
render()

//rerender application when state object chanes

store.subscribe(render)



registerServiceWorker();
