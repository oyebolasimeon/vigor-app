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
                <p>ICO</p>
            </div>
                <div className="cards" id="img-modal">
                <img src={imgBlock}/>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default TextModal