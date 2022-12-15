import React from 'react'
import './customResources.scss'

const Resources = () => {
  return (
    <div>
        <section className="resource-section">
            <span>Resources</span>
            <h2>Data protection regulation</h2>

            <div className="reg-items">
                <div className="item-block">
                <button>
                <i className="fa fa-arrows-alt"></i>
                </button>
                </div>
                <div className="item-block">
                <button>
                <i className="fa fa-code"></i>
                </button>
                </div>
                <div className="item-block">
                <button>
                <i className="fa fa-pen"></i>
                </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Resources