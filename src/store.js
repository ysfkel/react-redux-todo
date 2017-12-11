import {createStore,applyMiddleware,combineReducers} from 'redux'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//
const reducer=combineReducers({
    
    message:messageReducer,
    todo:todoReducer
})

export default createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

