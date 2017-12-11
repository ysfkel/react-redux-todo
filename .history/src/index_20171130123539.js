import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const render=()=>{
    const state=store.getState()
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
}
render()

//rerender application when state object chanes

store.subscribe(render)

setTimeout(()=>{
    store.dispatch({
        type:'TODO_ADD',
        payload:{
            id:4,name:'THIS IS MEEE'
        }
    })
},1000)

registerServiceWorker();
