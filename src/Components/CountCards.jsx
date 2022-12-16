import React from 'react'

const CountCards = (props) => {
  return (
    <>
          <div className="count-cards">
            <h2> {props.count} </h2>
            <p className="count-text">{props.content1}<br/> {props.content2} </p>
        </div>
       
    </>
  )
}

export default CountCards