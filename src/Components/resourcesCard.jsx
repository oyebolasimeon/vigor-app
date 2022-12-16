import React from 'react'
import TextModal from './TextModal'

const ResourcesCard = (props) => {
    let modalBox = () =>{

        // alert("hello")
        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
            console.log("Close Box with Icon");
          }

          modal.style.display = "block";

          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
              console.log("CLose Box");
            }
          }
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