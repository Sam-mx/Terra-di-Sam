import React from 'react'
import './Review.css'
import bowl from '../../assets/bowl.jpeg'
import pasta from '../../assets/pasta.jpeg'

const Review = () => {
  return (
    <section className="review-section" id="reviews">
    <h2 className="review-heading">Delicious Food</h2>
    <p className="review-subheading">Experience authentic Italian cuisine in a warm and friendly environment.</p>
    <div className="review-container">
        <div className="review-column">
            <div className="review">
                
                <h3 className="review-title">★★★★★</h3>
                <p className="review-description">The appetisers were delicious, and the atmosphere was perfect for a relaxing evening.</p>

                <div className='review-customer'>
                    <img src={pasta} alt='a white plate topped with pasta covered in sauce'/>
                <div className='customer'>
                    <p className='customer-name'>Michael Smith</p>
                    <p className='customer-city'>Milan</p>
                </div>
                </div>
            </div>
            
        </div>
        <div className="review-column">
            <div className="review">
                
                <h3 className="review-title">★★★★★</h3>
                <p className="review-description">The pasta dishes were exquisite, and the wine selection was top-notch.</p>

                <div className='review-customer'>
                    <img src={bowl} alt='a bowl of food and a glass of wine on a table'/>
                <div className='customer'>
                    <p className='customer-name'>Sara Johnson</p>
                    <p className='customer-city'>Rome</p>
                </div>
                </div>
            </div>
            
        </div>
    </div>
    
</section>
  )
}

export default Review