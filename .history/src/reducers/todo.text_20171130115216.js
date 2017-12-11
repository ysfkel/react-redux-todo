
import reducer from './todo'


describe('Todo reducer',()=>{
      
    test('returns a state object',()=>{
          
        const result = reducer(undefined,{type:'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo ',()=>{
       const startSate={
           todos:[
               {id:1,name:'create Static UI',isComplete:true},
               {id:2,name:'create Initial State',isComplete:false},
               {id:3,name:'Use state to render UI',isComplete:false}
           ]
       }
    })
})
