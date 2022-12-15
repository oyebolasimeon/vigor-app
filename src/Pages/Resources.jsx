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
                <ResourcesCard fontIcon="fa fa-arrows-alt" title="EU COOKIE DIRECTIVE" content="Lorem ipsum dolor sit amet consectetur. Velit maecenas purus tristique sagittis lectus sit risus. Dignissim leo scelerisque scelerisque in." />
                <ResourcesCard fontIcon="fa fa-code" title="UKGDPR" content="Lorem ipsum dolor sit amet consectetur. Velit maecenas purus tristique sagittis lectus sit risus. Dignissim leo scelerisque scelerisque in."/>
                <ResourcesCard fontIcon="fa fa-pencil" title="ICO" content="Lorem ipsum dolor sit amet consectetur. Velit maecenas purus tristique sagittis lectus sit risus. Dignissim leo scelerisque scelerisque in." />
            </div>
        </section>
    </div>
  )
}

export default Resources