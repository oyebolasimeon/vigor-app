import React from 'react'

const ResourcesCard = (props) => {
  return (
    <>
        <div className="item-block">
                    <button>
                        <i className={props.fontIcon}></i>
                    </button>
                    <h3> {props.title} </h3>
                        <p>{props.content} </p>
                    <button className="more-item">
                        See more <i className="fa fa-long-arrow-right"></i>
                    </button>
                </div>

    </>
  )
}

export default ResourcesCard