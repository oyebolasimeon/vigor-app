import React from 'react'
import './textModal.scss'

const TextModal = () => {
  return (
    <div>
         <div id="myModal" class="modal">
            <div class="modal-content">
            <div class="gallery">
                <span class="close">&times;</span>
                <div class="cards" id="img-modal">
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default TextModal