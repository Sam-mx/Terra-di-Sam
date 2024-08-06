import React from 'react'
import AboutImage1 from "../../assets/crayfish.jpg"
import AboutImage2 from "../../assets/Lasagna.jpg"
import './About.css'

const About = () => {
  return (
    <section className="About-section" id='About'>
      <div className="About-content">
        
        <div className="About-image">
          <img src={AboutImage1} alt="cooked shrimp on white ceramic plate" />
          <img src={AboutImage2} alt="a white plate topped with lasagna covered in sauce" />
        </div>

        <div className="About-text">
          <h2 className="About-title">About Our Italian Cuisine</h2>
          <p className="About-description">
            Experience the taste of Italy with our freshly prepared dishes and handpicked wines in a cozy and inviting atmosphere on our terrace.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About