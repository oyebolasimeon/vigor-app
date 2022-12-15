import React from 'react'
import './customBanner.scss'
import aboutImg from '../assets/img-1.jpg'
import Button from '../Components/Button'

const Banner = () => {
  return (
    <>
        <section className="banner-section">
            <div className="box-1">
                <h2>Vigor</h2>
                <p className="para-text">Your Data is in Safe Hands</p>
                <p className="para-text-2">We provide on demand data security guidelines for data and technology driven small and medium-sized businesses</p>
                <Button content="Learn More" />
            </div>
            <div className="box-2">
               <img src={aboutImg} />
            </div>
            <div className="box-3">
                <img src={aboutImg} />
            </div>
        </section>
    </>
  )
}

export default Banner