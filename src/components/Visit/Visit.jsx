import React from 'react'
import visitImage from "../../assets/visit.jpg"
import './Visit.css'

const Visit = () => {
  return (
    <section className="visit-section" id='visit'>
      <div className="visit-content">
        <div className="visit-text">
          <h2 className="visit-title">Authentic Italian Experience with Us</h2>
          <p className="visit-description">
            Indulge in our delicious Italian wines, appetisers, and freshly baked pasta recipes in a warm and friendly environment on our terrace.
          </p>
          <a href="#" className="visit-button">Visit</a>
        </div>
        <div className="visit-image">
          <img src={visitImage} alt="Italian dining experience" />
        </div>
      </div>
    </section>
  )
}

export default Visit