
const initState={
    todos:[
        {id:1,name:'create Static UI',isComplete:true},
        {id:2,name:'create Initial State',isComplete:false},
        {id:3,name:'Use state to render UI',isComplete:false}
    ]
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

