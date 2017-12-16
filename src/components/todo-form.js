import React,{Component}from 'react'
import {connect} from 'react-redux'
import {updateCurrent,saveTodo} from '../reducers/todo'

class TodoForm extends Component{

    constructor(){
        super()
        this.handleInputChange=this.handleInputChange.bind(this)
    }


    componentDidMount=()=>{
   
        //    document.getElementById("1").addEventListener("click", event => 
        //    this.handleMessageButtonClick())


             const el=document.getElementsByClassName("message")

             if(el  && el.length>0){
                 Array.from(el).forEach(e=>{
                     if(e){
                     e.addEventListener("click", function(){
                       console.log('button 21222',this, this.dataset)
                   })
                     }
                 })
                    
             }

           
    }
    
    componentWillUnmount=()=>{
          const el=document.getElementsByClassName("message")

             if(el  && el.length>0){
                 Array.from(el).forEach(e=>{
                     if(e){
                          if (e.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
                                e.removeEventListener("click", myFunction);
                            } else if (x.detachEvent) {                    // For IE 8 and earlier versions
                                e.detachEvent("click", myFunction);
                            }
                     }
                 })
                    
             }
    }

    myFunction=()=>{
        
    }
   
     handleInputChange=(e)=>{
        const value=e.target.value
        this.props.updateCurrent(value)

    }

    handleSubmit=(e)=>{
       e.preventDefault()
       this.props.saveTodo(this.props.currentTodo)
    }

   render(){
       
       const {currentTodo}=this.props
   
        return(
        <form onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange={this.handleInputChange}
         value={currentTodo}/>
      </form>
    )
   }
}

export default connect(
    (state)=>({currentTodo:state.todo.currentTodo}),
    {updateCurrent,saveTodo}
)(TodoForm)