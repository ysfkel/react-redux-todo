
import React from 'react'

import {Link} from 'react-router-dom'

export default (props)=>(
   <div>
      <Link to='/'><small>All</small></Link>|
      <Link to='/active'><small>active</small></Link>|
      <Link to='/completed'><small>completed</small></Link>
   </div>
)
