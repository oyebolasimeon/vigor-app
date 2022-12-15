import React from 'react'
import './footer.scss'
import footerImg from '../assets/img-2.jpg'
import Button from './Button'

const Footer = () => {
  return (
    <div>
        <section className="footer">
        <div className="footer-wrapper">
            <div className="footer-img">
                <img src={footerImg} />
            </div>
            <div className="footer-form">
            <h2>Contact Us</h2>
            <span>Contact</span>
            <p>contact@company.com</p>
            <p>(406) 555-0120</p>

            <form>
                <input type="input" className="form-input" placeholder="Email"/>
                <Button type="submit" content="Subscribe now" />
            </form>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Footer