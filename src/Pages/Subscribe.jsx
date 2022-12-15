import React from 'react'
import Button from '../Components/Button'
import './customSubscribe.scss'

const Subscribe = () => {
  return (
    <div>
        <section className="subscribe-section">
        <div>
            <span>subscribe to vigor for free</span>
            <h1>Get updates on security trends with Vigor</h1>
            <Button content="Subscribe now" />
            </div>
        </section>
    </div>
  )
}

export default Subscribe