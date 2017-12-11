import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

// const currentTodoChangeHandler=(val)=>store.dispatch(
//     updateCurrent(val)
// )

const actions=bindActionCreators({
    updateCurrent
},store.dispatch)
const render=()=>{
    const state=store.getState()
    ReactDOM.render(<App {...state} 
        currentTodoChangeHandler={actions.updateCurrent}/>, document.getElementById('root'));
}
render()

//rerender application when state object chanes

store.subscribe(render)



registerServiceWorker();
