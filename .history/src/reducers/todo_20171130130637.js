
const initState={
    todos:[
        {id:1,name:'create Static UI',isComplete:true},
        {id:2,name:'create Initial State',isComplete:false},
        {id:3,name:'Use state to render UI',isComplete:false}
    ],
    currentTodo:'temp'
}

export default (state=initState,action)=>{
 
       
    switch(action.type){
          case 'TODO_ADD':{
              state.todos=[...state.todos,action.payload]
              return state
          }
          case 'UPDATE_CURRENT_TODO':{
              return {...state,currentTodo:action.payload}
          }
          default:{
              return state
          }
    }
}

