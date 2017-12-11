import {getTodos} from '../repo/todo.service'
import {dispatch} from 'redux'

const initState={
    todos:[],
    currentTodo:''
}

const UPDATE_CURRENT_TODO='UPDATE_CURRENT_TODO'
const TODO_ADD='TODO_ADD'
const LOAD_TODOS='LOAD_TODOS'

export const updateCurrent=(val)=>({
    type:UPDATE_CURRENT_TODO,
     payload:val
})
export const loadTods=(todos)=>({
    type:LOAD_TODOS,
    payload:todos
})

//fetch todos action creator
export const fetchTodos=()=>{
     return ()=>{
        getTodos()
        .then(todos=>loadTods(dispatch(todos)))
     }
}

export default (state=initState,action)=>{
 
       
    switch(action.type){
          case TODO_ADD:{
              state.todos=[...state.todos,action.payload]
              return state
          }
          case LOAD_TODOS:{
           return {...state,todos:action.payload}
          }
          case UPDATE_CURRENT_TODO:{
              return {...state,currentTodo:action.payload}
          }
          default:{
              return state
          }
    }
}

