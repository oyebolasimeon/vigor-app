import React from 'react'
import './customAbout.scss'
import aboutImg from '../assets/img-1.jpg'
import ResourcesCard from '../Components/resourcesCard'
import CountCards from '../Components/CountCards'
import Button from '../Components/Button'

const About = () => {
  return (
    <div>

<section className="resource-section">
            <span>About</span>
            <h2>Project Background</h2>

            <div className="reg-items">
            <div className="item-block">
                <img src={aboutImg} />
            </div>
            <div className="item-block">
                    <button>
                        <i className="fa fa-lock"></i>
                    </button>
                    <h3>Cybersecurity research to ease your mind.</h3>
                        <p className="about-text">
                        We carry out extensive research on cybersecurity toolkits and data protection regulations for technology-oriented small and medium businesses in England. Our mission is to close information and technological knowledge gaps that increase the risk of security breaches and the loss of sensitive business or customer data in small and medium-sized businesses.
                        </p>
                  

                    <div className="counts">
                        <CountCards count="08+" content1="Resources " content2="and Toolkits" />
                        <CountCards count="80+" content1="Resources " content2="contributions" />
                        <CountCards count="5+" content1="Collaborated " content2="Companies" />
                      
                    </div>

                    <Button content="Download PDF" />
                </div>
            </div>
        </section>
       
    </div>
  )
}

export default About

