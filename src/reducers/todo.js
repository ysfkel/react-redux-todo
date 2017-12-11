import {getTodos,createTodo,updateTodo,deleteTodoService} from '../repo/todo.service'
import {dispatch} from 'redux'
import {showMessage} from './message'

const initState={
    todos:[],
    currentTodo:''
}

const UPDATE_CURRENT_TODO='UPDATE_CURRENT_TODO'
export const TODO_ADD='TODO_ADD'
export const TODO_REPLACE='TODO_REPLACE'
export const LOAD_TODOS='LOAD_TODOS'
export const REMOVE_TODO='REMOVE_TODO'

export const updateCurrent=(val)=>({
    type:UPDATE_CURRENT_TODO,
     payload:val
})
export const loadTods=(todos)=>({
    type:LOAD_TODOS,
    payload:todos
})

export const addTodo=(todo)=>({
    type:TODO_ADD,
    payload:todo
})



export const resplaceTodo=(todo)=>({
    type:TODO_REPLACE,
    payload:todo
})

export const removeTodo=(id)=>({
     type:REMOVE_TODO,
     payload:id
})
//fetch todos action creator
export const fetchTodos=()=>{
     return (dispatch)=>{
        dispatch(showMessage('LOADING TODOS..'))
        getTodos()
        .then(todos=>dispatch(loadTods(todos)))
     }
}

export const saveTodo=(name)=>{
    
    return (dispatch)=>{
        dispatch(showMessage('Saving todo'))
     
        createTodo(name)
        .then(todo=>{dispatch(addTodo(todo))
            
         })
    }
}

export const toggleTodo=(id)=>{
 
      return (dispatch,getState)=>{
            const {todos}=getState().todo
            const todo = todos.find(t=>t.id===id);
         
            const toggled={...todo,isComplete:!todo.isComplete}
             
            updateTodo(toggled)
            .then(res=>dispatch(resplaceTodo(res)))
      }
}

export const getVisibleTodos=(todos,filter)=>{
      
      switch(filter){
          case 'active':
           return todos.filter(t=>!t.isComplete)

           case 'completed':
            return todos.filter(t=>t.isComplete)
           
           default:
             return todos
      }
}

export const deleteTodo=(id)=>{
     return (dispatch,getState)=>{
            dispatch(showMessage('DELETING..'))
            deleteTodoService(id)
            .then(()=>dispatch(removeTodo(id)))
     }
}

export default (state=initState,action)=>{
 
       
    switch(action.type){
          case TODO_ADD:{
              const todos=[...state.todos,action.payload]
          
              return {
                 ...state,
                 currentTodo:'',
                 todos:todos
              }
          }
          case LOAD_TODOS:{
           return {...state,todos:action.payload}
          }
          case UPDATE_CURRENT_TODO:{
              return {...state,currentTodo:action.payload}
          }
          case TODO_REPLACE:

            return {
                ...state,
                todos:state.todos
                .map(t=>t.id===action.payload.id?action.payload:t)
            }
            case REMOVE_TODO:
            return {
                ...state,
                todos:state.todos.filter(t=>t.id!==action.payload)
            }
               
          default:{
              return state
          }
    }
}

