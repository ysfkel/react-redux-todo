import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'
import Provider from 'react-redux';



const actions=bindActionCreators({
    updateCurrent
},store.dispatch)



 
    const state=store.getState()
    ReactDOM.render(
        <Provider store={store}>
          currentTodoChangeHandler={actions.updateCurrent}/>
        </Provider>,
         document.getElementById('root'));


registerServiceWorker();
