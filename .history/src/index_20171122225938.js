import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const state={
    todos:[
        {id:1,name:'Create UI',isComplete:true},
        {id:2,name:'Create Initial state',isComplete:true},
        {id:3,name:'Use state to render UI',isComplete:true}
    ]
}
ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
