import React from 'react'

const About = () => {
  return (
    <div>
        <section className="about section" id="about">
                <h2 className="section__title">About</h2>
                <span className="section__subtitle">Background</span>

                <div className="about__container container grid">
                    <img src="assets/img/about.png" alt="" className="about__img"/>

                    <div className="about__data">
                        <p className="about__description">The aim of this 
                        research is to look into how a selected group 
                        of data and IT-oriented SMEs in the South-East and 
                        South-West of England region make use of data protection 
                        regulations. Its goal is to review and determine the need for tailored recommendations 
                        based on existing models already in place.
                        </p>

                        <div className="about__info">
                            <div>
                                <span className="about__info-title">07+</span>
                                <span className="about__info-name">Participant <br/>Enterprises</span>
                            </div>

                            <div>
                                <span className="about__info-title">100+</span>
                                <span className="about__info-name">Contributing <br/> researchers</span>
                            </div>

                            <div>
                                <span className="about__info-title">05+</span>
                                <span className="about__info-name">Satisfied<br/>Users</span>
                            </div>
                        </div>

                        <div className="about__buttons">
                            <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                                Download PDF <i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About