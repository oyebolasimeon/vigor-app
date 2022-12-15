import React from 'react'
import './button.scss'

const Button = (props) => {
  return (
    <div>
        <button style={props.style}>
            {props.content} <i className="fa fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default Button