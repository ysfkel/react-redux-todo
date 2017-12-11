import {TODO_ADD,LOAD_TODOS,TODO_REPLACE,REMOVE_TODO} from './todo'


const MESSAGE_SHOW='MESSAGE_SHOW'


export const showMessage=(msg)=>({
    type:MESSAGE_SHOW,
    payload:msg
})


export default function(state='',action){


    switch(action.type){
        
        case MESSAGE_SHOW:
           return action.payload
        case TODO_ADD:
        case LOAD_TODOS:
        case TODO_REPLACE:
        case REMOVE_TODO:
          return ''
        default:{
           return state
        }

    }
}

