import React from 'react'

const ResourcesCard = (props) => {
  return (
    <>
        <div className="item-block">
                    <button>
                        <i className={props.fontIcon}></i>
                    </button>
                    <h3>EU COOKIE DIRECTIVE</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Velit maecenas purus tristique sagittis lectus sit risus. Dignissim leo scelerisque scelerisque in.
                        </p>
                    <button className="more-item">
                        See more <i className="fa fa-long-arrow-right"></i>
                    </button>
                </div>

    </>
  )
}

export default ResourcesCard