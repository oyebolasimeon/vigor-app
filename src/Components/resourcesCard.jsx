import React from 'react'
import TextModal from './TextModal'
import imgBlock1 from '../assets/news-1.png'
import imgBlock2 from '../assets/news-2.png'
import imgBlock3 from '../assets/news-3.png'
const ResourcesCard = (props) => {
    let modalBox = ( itemNumber) =>{
let title = [
    "EU COOKIE DIRECTIVE",
    "UKGDPR",
    "ICO"
]
let subtitle = [
    "Information Commissioners Office",
    "UK General Data Protection Regulation",
    "The International Information Security Standard"
]

let imageList = [
    imgBlock1,
    imgBlock2,
    imgBlock3
]

let content = [
    "Simeon Oye",
    "Lorem ipsum dolor sit amet consectetur. Nec lobortis venenatis fermentum tincidunt. Dis eu ultrices justo ullamcorper odio risus sed. Condimentum ipsum condimentum tincidunt felis nisl aliquam diam porttitor ornare. Dignissim id posuere tellus ridiculus tempor auctor quis. Neque dictum quam sit urna sed neque non nulla.",
    "Lorem ipsum dolor sit amet consectetur. Nec lobortis venenatis fermentum tincidunt. Dis eu ultrices justo ullamcorper odio risus sed. Condimentum ipsum condimentum tincidunt felis nisl aliquam diam porttitor ornare. Dignissim id posuere tellus ridiculus tempor auctor quis. Neque dictum quam sit urna sed neque non nulla."
]

        // alert("hello ",i)
        console.log(itemNumber)
        let modal = document.getElementById("myModal");
        let modalTitle = document.getElementById("modal-title");
        let modalSubTitle = document.getElementById("subtitle")
        let span = document.getElementsByClassName("close")[0];
        let modalImage = document.getElementById("img-modal")

        span.onclick = function() {
            modal.style.display = "none";
            console.log("Close Box with Icon");
          }

          modal.style.display = "block";

          modalSubTitle.innerHTML = `
                ${subtitle[itemNumber]}
          `
          modalTitle.innerHTML = `
          <h3>${title[itemNumber]}</h3>`
          modalImage.innerHTML = `
          <img src=${imageList[itemNumber]}
          <p className="modalpara">${content[itemNumber]} </p>
          `

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
                    <button className="more-item" id={props.itemNumber} onClick={(e) => {modalBox( props.itemNumber-1)}}>
                        See more <i className="fa fa-long-arrow-right"></i>
                    </button>
                </div>

                <TextModal />

    </>
  )
}

export default ResourcesCard