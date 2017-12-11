

import React from 'react'
import {connect} from 'react-redux'

const Message=({message})=>(
    message?<span>{message}</span>:null
)



export default connect(
    (state)=>({message:state.message})
)(Message)