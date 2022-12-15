import React from 'react'
import './customAbout.scss'
import aboutImg from '../assets/img-1.jpg'

const About = () => {
  return (
    <div>

        <section className="about-section" id="about">
            <span className="about-subtitle">About</span>
            <h2 className="about-title">Project Background</h2>
        </section>
        {/* <section className="about section" id="about">

                <span className="section__subtitle">Project Background</span>
                <h2 className="section__title">About</h2>

                <div className="about__container container grid">
                    <img src={aboutImg} alt="" className="about__img custom"/>

                    <div className="about__data">
                        <p className="about__description">We carry out extensive research on cybersecurity toolkits and data protection regulations for technology-oriented small and medium businesses in England. Our mission is to close information and technological knowledge gaps that increase the risk of security breaches and the loss of sensitive business or customer data in small and medium-sized businesses.
                        </p>

                        <div className="about__info">
                            <div>
                                <span className="about__info-title custom-text-count">08+</span>
                                <span className="about__info-name custom-text-count-span">Resources <br/>and Toolkits</span>
                            </div>

                            <div>
                                <span className="about__info-title custom-text-count">80+</span>
                                <span className="about__info-name custom-text-count-span">Research <br/> contributions</span>
                            </div>

                            <div>
                                <span className="about__info-title custom-text-count">5+</span>
                                <span className="about__info-name custom-text-count-span">Collaborated<br/>Companies</span>
                            </div>
                        </div>

                        <div className="about__buttons">
                            <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                                Download PDF <i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
  )
}

export default About

