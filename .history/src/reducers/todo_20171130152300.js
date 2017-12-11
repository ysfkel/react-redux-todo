import {getTodos} from '../repo/todo.service'

const initState={
    todos:[],
    currentTodo:''
}

const UPDATE_CURRENT_TODO='UPDATE_CURRENT_TODO'

export const updateCurrent=(val)=>({
    type:UPDATE_CURRENT_TODO,
     payload:val
})

export default (state=initState,action)=>{
 
       
    switch(action.type){
          case 'TODO_ADD':{
              state.todos=[...state.todos,action.payload]
              return state
          }
          case UPDATE_CURRENT_TODO:{
              return {...state,currentTodo:action.payload}
          }
          default:{
              return state
          }
    }
}

