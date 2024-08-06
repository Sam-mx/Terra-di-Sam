import React from 'react'
import './Sample.css'
import salad from '../../assets/salad.png'

const Sample = () => {
  return (
    <section className="recipe-section" id="Recipes">
    <h2 className="recipe-heading">Italian Wines</h2>
    <p className="recipe-subheading">Indulge in our delicious pasta recipes made with love and passion.</p>
    <div className="recipe-container">
        <div className="recipe-column">
            <div className="recipe">
                <div className="recipe-header">
                    <h3 className="recipe-title">Fresh Pasta Recipes</h3>
                    <p className="recipe-price">12$</p>
                </div>
                <p className="recipe-description">Savor the authentic flavors of freshly baked pasta dishes from Italy.</p>
            </div>
            <div className="recipe">
                <div className="recipe-header"> 
                    <h3 className="recipe-title">Appetizing Starters</h3>
                    <p className="recipe-price">8$</p>
                </div>
                <p className="recipe-description">Tantalize your taste buds with our selection of flavorful appetisers.</p>
            </div>
            <div className="recipe">
                <div className="recipe-header">
                    <h3 className="recipe-title">Warm Environment</h3>
                    <p className="recipe-price">10$</p>
                </div>
                <p className="recipe-description">Experience a cozy and inviting atmosphere while dining on our terrace.</p>
            </div>
        </div>
        <div className="recipe-column">
            <div className="recipe">
                <div className="recipe-header">
                    <h3 className="recipe-title">Freshly Baked Pasta</h3>
                    <p className="recipe-price">9$</p>
                </div>
                <p className="recipe-description">Enjoy the rich and authentic taste of freshly baked pasta dishes.</p>
            </div>
            <div className="recipe">
                <div className="recipe-header">
                    <h3 className="recipe-title">Friendly Service</h3>
                    <p className="recipe-price">11$</p>
                </div>
                <p className="recipe-description">Our staff is dedicated to providing a warm and friendly dining experience.</p>
            </div>
            <div className="recipe">
                <div className="recipe-header">
                    <h3 className="recipe-title">Italian Appetisers</h3>
                    <p className="recipe-price">7$</p>
                </div>
                <p className="recipe-description">Delight in the flavors of traditional Italian appetisers served with a modern twist.</p>
            </div>
        </div>
    </div>
    <div className="recipe-image">
        <img src={salad} alt="red and green bell pepper on white ceramic bowl" />
    </div>
</section>
  )
}

export default Sample