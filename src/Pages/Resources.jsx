import React from 'react'
import ResourcesCard from '../Components/resourcesCard'
import './customResources.scss'

const Resources = () => {
  return (
    <div>
        <section className="resource-section">
            <span>Resources</span>
            <h2>Data protection regulation</h2>

            <div className="reg-items">
                <ResourcesCard fontIcon="fa fa-arrows-alt" itemNumber="1" title="ICO" content="(ICO): The ICO is the UK's independent body set up to uphold information rights. Find out more about the organization and structure." />
                <ResourcesCard fontIcon="fa fa-code" title="UKGDPR" itemNumber="2" content="Guide to the general data protection regulation -gdpr. https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/."/>
                <ResourcesCard fontIcon="fa fa-pencil" title="EU COOKIE DIRECTIVE" itemNumber="3" content="Lorem ipsum dolor sit amet consectetur. Velit maecenas purus tristique sagittis lectus sit risus. Dignissim leo scelerisque scelerisque in." />
            </div>
        </section>
    </div>
  )
}

export default Resources 