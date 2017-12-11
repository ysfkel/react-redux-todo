
const initState={
    todos:[]
}

export default (state=initState,action)=>{
 
       
    switch(state.type){
          case 'TODO_ADD':{
            state.todos=[...state.todos,action.payload]
            return {
                ...state,
                todos:state.todos.concat(action.payload)
            }
          }default:{
              return state
          }
    }
}

