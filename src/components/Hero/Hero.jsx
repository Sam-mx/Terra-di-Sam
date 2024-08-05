import React from 'react'
import './Hero.css'
import heroVideo from "../../assets/hero.mp4"

const Hero = () => {
  return (
    <section className="hero-section">
    <video className="hero-video" autoPlay muted loop>
      <source src={heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-overlay">
      <div className="hero-content">
        <h1 className="hero-title">Authentic Italian &nbsp;Wines and Appetisers Served Fresh</h1>
        <p className="hero-description">
          Experience the Taste of Italy on Our Terrace with Freshly Baked Pasta Recipes
        </p>
        <a href="#explore" className="hero-button">Explore</a>
        <div className="hero-rating">★★★★★</div>
        <p className="hero-subtitle">Warm and Friendly Italian Dining Experience</p>
      </div>
    </div>
  </section>
  )
}

export default Hero