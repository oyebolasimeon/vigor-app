import React from 'react'
import './textModal.scss'
import imgBlock from '../assets/img-1.jpg'

const TextModal = () => {
  return (
    <div>
         <div id="myModal" className="modal">
            <div className="modal-content">
            <div className="gallery">
            <div className="header-modal">
                <div className="modal-title"> <h3>Title</h3></div>
                <div className="modal-close-me">
                <span className="close"> <i className="fa fa-times-circle"></i> </span>
                </div>
            </div>
            <h4 className="subtitle">subtitle</h4>
                <div className="cards" id="img-modal">
                <img src={imgBlock}/>
                <p>
                Lorem ipsum dolor sit amet consectetur. Nec lobortis venenatis fermentum tincidunt. Dis eu ultrices justo ullamcorper odio risus sed. Condimentum ipsum condimentum tincidunt felis nisl aliquam diam porttitor ornare. Dignissim id posuere tellus ridiculus tempor auctor quis. Neque dictum quam sit urna sed neque non nulla.
                </p>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default TextModal