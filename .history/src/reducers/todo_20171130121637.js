
const initState={
    todos:[]
}

export default (state=initState,action)=>{
 
       
    switch(action.type){
          case 'TODO_ADD':{
            state.todos=[...state.todos,action.payload]
            return state
          }default:{
              return state
          }
    }
}

