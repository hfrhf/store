import React from 'react'
import "./Icons.css"

const Icons = (props) => {
  return (
    
        <li><span style={{"color":"#5E5E5E"}} className="span-icons">{props.children}</span></li>
    
  )
}

export default Icons