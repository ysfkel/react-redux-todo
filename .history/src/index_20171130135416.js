import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux';



const actions=bindActionCreators({
    updateCurrent
},store.dispatch)

ReactDOM.render(
                        <Provider store={store}>
                        <App 
                        currentTodoChangeHandler={actions.updateCurrent}/>
                        </Provider>,
                        document.getElementById('root'));


registerServiceWorker();
