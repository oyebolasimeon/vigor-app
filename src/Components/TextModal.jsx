import React from 'react'
import './textModal.scss'

const TextModal = () => {
  return (
    <div>
         <div id="myModal" className="modal">
            <div className="modal-content">
            <div className="gallery">
            <div className="header-modal">
                <div className="modal-title" id='modal-title'> </div>
                <div className="modal-close-me">
                <span className="close"> <i className="fa fa-times-circle"></i> </span>
                </div>
            </div>
            <h4 className="subtitle" id="subtitle"></h4>
                <div className="cards" id="img-modal">
               
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default TextModal