import React from 'react'
import TextModal from './TextModal'

const ResourcesCard = (props) => {
    let modalBox = () =>{

        alert("hello")
    }
  return (
    <>
        <div className="item-block">
                    <button>
                        <i className={props.fontIcon}></i>
                    </button>
                    <h3> {props.title} </h3>
                        <p>{props.content} </p>
                    <button className="more-item" onClick={modalBox}>
                        See more <i className="fa fa-long-arrow-right"></i>
                    </button>
                </div>

                <TextModal />

    </>
  )
}

export default ResourcesCard