import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const state={
    todos:[
    ]
}
ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
